<template>
  <div
    class="confirm__container modal micromodal-slide"
    id="modal-frame"
    aria-hidden="true"
  >
    <div class="modal__overlay border" tabindex="-1" data-micromodal-close>
      <div
        class="modal__container md:w-2/6 w-11/12"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-frame-title"
      >
        <header class="modal__header">
          <h3
            id="modal-frame-title"
            class="md:text-2xl text-lg font-medium text-gray-600"
          >
            {{ getHeading }}
          </h3>
          <button
            v-if="showCancelButton"
            id="close-btn"
            class="modal__close strip-button"
            aria-label="Close modal"
            @click="closeModal"
            data-micromodal-close
          >
            <XIcon></XIcon>
          </button>
        </header>
        <main class="modal__content" id="modal-frame-content">
          <div id="message">
            <h6 class="text-muted">{{ getText }}</h6>
          </div>
          <div class="btn-container w-full mb-2 mt-8 flex text-xl">
            <button
              type="button"
              class="no w-1/2 mx-1 py-2 rounded-md border-green-500 border-2 text-green-500 font-semibold"
            >
              Cancel
            </button>
            <button
              type="button"
              class="yes w-1/2 mx-1 rounded-md bg-green-500 text-white font-semibold"
            >
              I know
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
    }
  },
  methods: {
    showModal() {
      /**
       * Show the modal
       */
      MicroModal.show("modal-frame", {
        disableFocus: true,
        awaitCloseAnimation: true,
        awaitOpenAnimation: true
      });
    },
    closeModal: function() {
      /**
       * Close the modal when the close button is clicked
       */
      MicroModal.close("modal-frame");
    }
  },
  mounted() {
    this.showModal();
  }
};
</script>

<style lang="scss" scoped></style>
