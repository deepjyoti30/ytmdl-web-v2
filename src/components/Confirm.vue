<template>
  <div
    class="confirm__container modal micromodal-slide"
    id="modal-frame"
    aria-hidden="true"
  >
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div
        class="modal__container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-frame-title"
      >
        <header class="modal__header">
          <h3 id="modal-frame-title">
            {{ getHeading }}
          </h3>
          <button
            id="close-btn"
            class="modal__close"
            aria-label="Close modal"
            data-micromodal-close
          >
            <XIcon></XIcon>
          </button>
        </header>
        <main class="modal__content" id="modal-frame-content">
          <div id="message">
            <h6 class="mt-4 text-muted">{{ getText }}</h6>
          </div>
          <div class="btn-container w-full my-8">
            <button type="button" class="no">Cancel</button>
            <button type="button" class="yes">I know</button>
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
      default: "Are you sure you want to"
    },
    text: {
      type: String,
      default: ""
    }
  },
  computed: {
    getHeading() {
      return this.heading;
    },
    getText() {
      return this.text;
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
    listenClose() {
      /**
       * Listen to the close button
       *
       * This is required since I am overriding the default
       * style and replace the arrow with a custom icon.
       */
      document.getElementById("close-btn").addEventListener("click", () => {
        MicroModal.close("modal-frame");
      });
    }
  },
  mounted() {
    this.showModal();
  }
};
</script>

<style lang="scss" scoped></style>
