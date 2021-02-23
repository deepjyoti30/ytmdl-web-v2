<template>
  <div
    class="welcome__container modal micromodal-slide"
    id="welcome-frame"
    aria-hidden="true"
  >
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div
        class="modal__container md:w-4/6 w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-frame-title"
      >
        <header class="modal__header">
          <h3 id="modal-frame-title" class="modal__title">
            Welcome
          </h3>
          <button
            id="close-btn"
            class="modal__close strip-button"
            aria-label="Close modal"
            @click="closeModal"
            data-micromodal-close
          >
            <XIcon class="dark:text-gray-400"></XIcon>
          </button>
        </header>
        <main class="modal__content" id="welcome-frame-content">
          <div class="header--content text-center">
            <h3 class="md:text-3xl text-xl font-semibold dark:text-white">
              Welcome to Ytmdl Web
              <span class="uppercase font-bold highlight-v2">v2</span>
            </h3>
            <p
              class="md:block hidden md:mt-6 mt-4 max-w-2xl md:text-base text-sm mr-auto ml-auto text-gray-600 dark:text-gray-400"
            >
              In less than a year of the first release, v2 is here. This version
              is built from scratch with the consideration of various feedbacks
              provided by the users of the former version.
            </p>
            <p
              class="md:text-base text-sm text-gray-600 dark:text-gray-400 md:mb-0 md:mt-0 mt-2 mb-4"
            >
              Some of the new features are
            </p>
          </div>
          <div
            class="features__container flex md:justify-center flex-wrap md:mt-4"
          >
            <welcome-feature text="Way faster">
              <zap-icon />
            </welcome-feature>
            <welcome-feature text="Better Downloads">
              <download-icon />
            </welcome-feature>
            <welcome-feature text="User Settings">
              <settings-icon />
            </welcome-feature>
            <welcome-feature text="Manual Metadata">
              <edit-icon />
            </welcome-feature>
            <welcome-feature text="URL support">
              <anchor-icon />
            </welcome-feature>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import MicroModal from "micromodal";
import WelcomeFeature from "@/components/WelcomeFeature.vue";
import {
  XIcon,
  ZapIcon,
  DownloadIcon,
  SettingsIcon,
  EditIcon,
  AnchorIcon
} from "vue-feather-icons";

export default {
  name: "Welcome",
  components: {
    XIcon,
    WelcomeFeature,
    ZapIcon,
    DownloadIcon,
    SettingsIcon,
    EditIcon,
    AnchorIcon
  },
  methods: {
    showModal: function() {
      /**
       * Show the modal
       */
      MicroModal.show("welcome-frame", {
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
      MicroModal.close("welcome-frame");
    }
  }
};
</script>

<style lang="scss">
.highlight-v2 {
  color: $green;
}
</style>
