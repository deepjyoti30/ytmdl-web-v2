<template>
  <div class="welcome__container">
    <modal ref="modal" modalId="welcome" heading="Welcome" crossBtn>
      <div class="header--content text-center">
        <h3 class="md:text-3xl text-xl font-semibold dark:text-white">
          Welcome to Ytmdl Web
          <span class="uppercase font-bold highlight-v2">v2</span>
        </h3>
        <p
          class="md:block hidden md:mt-6 mt-4 max-w-2xl md:text-base text-sm mr-auto ml-auto text-gray-600 dark:text-gray-400"
        >
          In less than a year of the first release, v2 is here. This version is
          built from scratch with the consideration of various feedbacks
          provided by the users of the former version.
        </p>
        <p
          class="md:text-base text-sm text-gray-600 dark:text-gray-400 md:mb-0 md:mt-0 mt-2 mb-4"
        >
          Some of the new features are
        </p>
      </div>
      <div class="features__container flex justify-around flex-wrap md:mt-4">
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
        <welcome-feature text="Open Source">
          <git-branch-icon />
        </welcome-feature>
      </div>
      <p class="read--more text-sm mt-4 text-center">
        <a
          href="https://blog.deepjyoti30.dev/ytmdl-v2-release"
          target="_blank"
          rel="noopener"
          class="underline text-gray-500"
          >Read more about the features</a
        >
      </p>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import WelcomeFeature from "@/components/WelcomeFeature.vue";
import {
  ZapIcon,
  DownloadIcon,
  SettingsIcon,
  EditIcon,
  AnchorIcon,
  GitBranchIcon
} from "vue-feather-icons";

export default {
  name: "Welcome",
  components: {
    Modal,
    WelcomeFeature,
    ZapIcon,
    DownloadIcon,
    SettingsIcon,
    EditIcon,
    AnchorIcon,
    GitBranchIcon
  },
  methods: {}
};
</script>

<style lang="scss">
.highlight-v2 {
  color: $green;
}
</style>
