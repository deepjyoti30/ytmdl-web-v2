<template>
  <div class="support__container">
    <div class="support--content py-12 md:mt-24 mt-8 mb-8 md:flex">
      <div
        class="support--comp px-4 py-6 border max-w-sm rounded-md md:mr-12 md:mb-0 mb-12"
      >
        <div
          class="recommended--icon uppercase py-0 px-3 font-semibold rounded-xl"
        >
          recommended
        </div>
        <h4 class="font-semibold text-2xl dark:text-white">
          Recurring Donation
        </h4>
        <p class="mt-4 text-gray-600 dark:text-gray-400">
          Please consider making a recurring donation in order to help sustain
          the development of the project for the future.
        </p>
        <div class="options mt-6 dark:text-white md:text-base text-sm">
          <a
            href="https://www.patreon.com/deepjyoti30"
            class="py-2 px-4 inline-flex items-center rounded-md border"
          >
            <img src="img/patreon.png" class="brand-logo" alt="Patreon Icon" />
            <span class="ml-2 uppercase font-medium">Become a patron</span>
          </a>
          <a
            href="https://opencollective.com/ytmdl#backer"
            class="py-2 px-4 inline-flex items-center rounded-md border"
          >
            <img
              src="img/opencollective.png"
              class="brand-logo"
              alt="OpenCollective Icon"
            />
            <span class="ml-2 uppercase font-medium">Become a backer</span>
          </a>
        </div>
      </div>
      <div class="support--comp px-4 py-6 border max-w-sm rounded-md">
        <h4 class="font-semibold text-2xl dark:text-white">
          One-Time Donation
        </h4>
        <p class="mt-4 text-gray-600 dark:text-gray-400">
          You can also make a one time donation using one of the following
          services. Every little bit of help is appreciated.
        </p>
        <div class="options mt-6 dark:text-white md:text-base text-sm">
          <a
            href="https://ko-fi.com/deepjyoti30"
            class="py-2 px-4 inline-flex items-center rounded-md border"
          >
            <img src="img/kofi.png" class="brand-logo" alt="Ko-Fi Icon" />
            <span class="ml-2 uppercase font-medium">Buy me a coffee</span>
          </a>
          <a
            href="https://paypal.me/deepjyoti30"
            class="py-2 px-4 inline-flex items-center rounded-md border"
          >
            <img src="img/paypal.png" class="brand-logo" alt="Paypal Icon" />
            <span class="ml-2 uppercase font-medium">Donate on Paypal</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowSupport"
};
</script>

<style lang="scss" scoped>
$size: 25px;

.brand-logo {
  width: $size;
  height: $size;
}

.options {
  a {
    @apply mt-2;
    transition: 0.2s ease;

    &:first-child {
      @apply mt-0;
    }

    &:hover {
      transition: 0.2s ease;
    }
  }
}

.support--comp {
  position: relative;

  .recommended--icon {
    @extend .top-right;
  }
}
</style>
