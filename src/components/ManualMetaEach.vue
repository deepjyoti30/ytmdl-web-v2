<template>
  <div
    class="
      manual--each__container
      py-4
      w-full
      md:flex
      items-center
      justify-items-start
    "
  >
    <div class="text--content md:w-2/5 w-full">
      <h3 class="text-xl font-medium dark:text-white">
        {{ getName }}
        <span
          v-if="getIsRequired"
          class="
            required
            px-2
            rounded-xl
            py-0.5
            text-sm
            font-normal
            ml-5
            dark:text-black
          "
          >Required</span
        >
      </h3>
      <h5 class="mt-1 text-gray-600 dark:text-gray-400">
        {{ getText }}
      </h5>
    </div>
    <div class="input--content md:w-3/5 w-full">
      <input
        class="border mt-3 px-4 py-2 rounded-md text-lg w-full dark:text-white"
        :placeholder="getExample"
        v-model="valueEntered"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ManualEach",
  props: {
    option: {
      type: Object,
    },
    index: {
      type: Number,
    },
    enableNormalize: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    normalizeSpecialChars: function (value) {
      /**
       * Normalize special characters like `/` in the passed
       * value by replacing them with a -
       */
      if (!this.enableNormalize) return value;

      return value.replace(/\/|;/g, "-");
    },
  },
  computed: {
    getName() {
      return this.option.name;
    },
    getText() {
      return this.option.text;
    },
    getIsRequired() {
      return !this.option.skippingAllowed;
    },
    getExample() {
      return this.option.example;
    },
    valueEntered: {
      get() {
        return this.value;
      },
      set(value) {
        // Normalize the value
        value = this.normalizeSpecialChars(value);

        this.value = value;
        const valid = this.option.skippingAllowed ? true : Boolean(this.value);

        this.$parent.enteredData[this.option.attrName] = {
          value: valid ? this.value : this.option.default,
          valid: valid,
        };
        this.$parent.validateDataEntered();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.manual--each__container {
  h3 {
    @extend .dm-sans;

    .required {
      background: $yellow;
    }
  }

  h5 {
    @extend .dm-sans;
  }

  input {
    border: 3px solid $lightblue;
    outline: none;
    transition: 0.2s ease;

    &:focus {
      transition: 0.2s ease;
      border-color: $darkblue;
      border-width: 3px;
    }
  }
}
</style>
