<template>
  <div class="confirm__container">
    <modal ref="modal" modalId="confirm" heading="Confirm">
      <div id="message" class="mb-2">
        <h3
          id="modal-frame-title"
          class="modal__title md:text-2xl text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          {{ getHeading }}
        </h3>
        <h6 class="md:text-base text-sm text-gray-500 dark:text-gray-400">
          {{ getText }}
        </h6>
      </div>
      <div class="btn-container w-full mb-2 mt-8 flex text-xl">
        <button
          type="button"
          class="no w-1/2 mx-2 py-1 rounded-md border-green-500 border-2 text-green-500 font-semibold"
          @click="handleCancelClick"
        >
          Cancel
        </button>
        <button
          type="button"
          class="yes w-1/2 mx-2 rounded-md bg-green-500 text-white font-semibold"
          @click="handleContinueClick"
        >
          {{ getContinueText }}
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "Confirm",
  components: {
    Modal: () => import(/* webpackPrefetch: true */ "@/components/Modal.vue")
  },
  props: {
    heading: {
      type: String,
      default: "Are you sure you want to continue?"
    },
    text: {
      type: String,
      default: ""
    },
    crossBtn: {
      type: Boolean,
      default: false
    },
    continueText: {
      type: String,
      default: "I know"
    }
  },
  computed: {
    getHeading() {
      return this.heading;
    },
    getText() {
      return this.text;
    },
    showCancelButton() {
      return this.crossBtn;
    },
    getContinueText() {
      return this.continueText;
    }
  },
  methods: {
    handleCancelClick: function() {
      /**
       * Handle the click on the cancel button.
       *
       * When the cancel button is clicked, we need to
       * hide the modal and emit that the cancel button
       * was clicked.
       */
      this.$emit("cancel");

      this.$refs.modal.closeModal();
    },
    handleContinueClick: function() {
      /**
       * Handle the click on the continue button.
       *
       * When the continue button is clicked, we need
       * to hide the modal and emit a change that the
       * continue button was clicked.
       */
      this.$emit("continue");

      this.$refs.modal.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.yes {
  @extend .strip-button;
}

.no {
  outline: none;

  &:hover,
  &:active {
    outline: none;
  }
}
</style>
