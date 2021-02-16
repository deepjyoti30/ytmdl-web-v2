<template>
  <div class="support__container">
    <div class="support--content py-12 mt-24 mb-8 flex">
      <div class="support--comp p-4 border max-w-sm rounded-md mr-12">
        <h4 class="font-semibold text-2xl dark:text-white">
          Recurring Donation
        </h4>
        <p class="mt-4 text-gray-600 dark:text-gray-400">
          Please consider making a recurring donation in order to help sustain
          the development of the project for the future.
        </p>
        <div class="options mt-4">
          <a
            href="nana"
            class="py-2 px-4 inline-flex items-center rounded-md border"
          >
            <img src="img/patreon.png" class="brand-logo" alt="Ko-Fi Icon" />
            <span class="ml-2 uppercase font-medium">Become a patron</span>
          </a>
        </div>
      </div>
      <div class="support--comp p-4 border max-w-sm rounded-md">
        <h4 class="font-semibold text-2xl dark:text-white">
          One-Time Donation
        </h4>
        <p class="mt-4 text-gray-600 dark:text-gray-400">
          You can also make a one time donation using one of the following
          services. Every little bit of help is appreciated.
        </p>
        <div class="options mt-4">
          <a
            href="nana"
            class="py-2 px-4 inline-flex items-center rounded-md border"
          >
            <img src="img/kofi.png" class="brand-logo" alt="Ko-Fi Icon" />
            <span class="ml-2 uppercase font-medium">Buy me a coffee</span>
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
</style>
