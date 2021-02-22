<template>
  <div
    class="welcome__container modal micromodal-slide"
    id="modal-frame"
    aria-hidden="true"
  >
    <div class="modal__overlay border" tabindex="-1" data-micromodal-close>
      <div
        class="modal__container md:w-4/6 w-11/12"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-frame-title"
      >
        <header class="modal__header">
          <h3
            id="modal-frame-title"
            class="md:text-lg text-sm font-medium text-gray-600"
          >
            Welcome
          </h3>
          <button
            id="close-btn"
            class="modal__close strip-button"
            aria-label="Close modal"
            @click="closeModal"
            data-micromodal-close
          >
            <XIcon size="1x"></XIcon>
          </button>
        </header>
        <main class="modal__content" id="modal-frame-content"></main>
      </div>
    </div>
  </div>
</template>

<script>
import MicroModal from "micromodal";
import { XIcon } from "vue-feather-icons";

export default {
  name: "Welcome",
  components: {
    XIcon
  },
  methods: {
    showModal: function() {
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
  }
};
</script>
