<template>
  <div class="check--box__container">
    <div class="flex items-center">
      <input
        type="checkbox"
        :id="`${getId}-yes`"
        :name="`${getId}-confirmation`"
        value="yes"
        class="appearance-none absolute h-8 w-8"
        v-model="isChecked"
      />
      <div
        class="bg-white dark:bg-darklow border-2 rounded-md border-blue-400 w-5 h-5 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500"
        :class="getText != '' ? 'mr-2' : ''"
      >
        <svg
          class="fill-current hidden w-3 h-3 text-white pointer-events-none"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(-9 -11)" fill="#fff" fill-rule="nonzero">
              <path
                d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
              />
            </g>
          </g>
        </svg>
      </div>
      <label
        v-if="getText != ''"
        :for="`${getId}-yes`"
        class="select-none ml-1 roboto text-gray-600 dark:text-gray-400"
        >{{ getText }}</label
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    text: {
      type: String,
      default: ""
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      id: "default"
    };
  },
  methods: {},
  computed: {
    getText() {
      return this.text;
    },
    getId() {
      return this.id;
    },
    isChecked: {
      get() {
        return this.isSelected;
      },
      set(value) {
        /**
         * When the user clicks on check or uncheck
         * the checkbox, this method needs to be called.
         *
         * We need to emit a change to inform the parent
         * about this change.
         */
        this.$emit("clicked", value);
      }
    }
  },
  mounted() {
    this.id = Math.random()
      .toString(36)
      .substring(7);
  }
};
</script>

<style lang="scss" scoped>
.check--box__container {
  input:checked + div {
    @apply border-blue-500;
    @apply bg-blue-500;
  }

  input:checked + div svg {
    @apply block;
  }
}
</style>
