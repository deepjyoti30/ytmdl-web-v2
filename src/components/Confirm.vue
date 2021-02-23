<template>
  <div
    class="confirm__container modal micromodal-slide"
    id="modal-frame"
    aria-hidden="true"
  >
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div
        class="modal__container md:w-2/6 w-11/12"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-frame-title"
      >
        <header class="modal__header">
          <h3 id="modal-frame-title" class="modal__title">
            Confirm
          </h3>
          <button
            v-if="showCancelButton"
            id="close-btn"
            class="modal__close strip-button"
            aria-label="Close modal"
            @click="closeModal"
            data-micromodal-close
          >
            <XIcon class="dark:text-gray-400"></XIcon>
          </button>
        </header>
        <main class="modal__content" id="modal-frame-content">
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
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import MicroModal from "micromodal";
import { XIcon } from "vue-feather-icons";

export default {
  name: "Confirm",
  components: {
    XIcon
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
    showModal: function() {
      /**
       * Show the modal
       */
      MicroModal.show("modal-frame", {
        disableFocus: true,
        disableScroll: true,
        awaitCloseAnimation: true,
        awaitOpenAnimation: true
      });
    },
    closeModal: function() {
      /**
       * Close the modal when the close button is clicked
       */
      MicroModal.close("modal-frame");
    },
    handleCancelClick: function() {
      /**
       * Handle the click on the cancel button.
       *
       * When the cancel button is clicked, we need to
       * hide the modal and emit that the cancel button
       * was clicked.
       */
      this.$emit("cancel");

      this.closeModal();
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

      this.closeModal();
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
