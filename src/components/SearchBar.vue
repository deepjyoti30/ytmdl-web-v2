<template>
  <div class="search-bar__container">
    <div
      class="text-for-search w-1/5 mr-auto ml-auto text-center text-md text-gray-600 dark:text-gray-400 pb-2"
    >
      Type name of song, artist, album etc.
    </div>
    <div
      class="divider--line w-0 mr-auto ml-auto border border-gray-200 dark:border-gray-700 h-7"
    ></div>
    <div class="search--box shadow-cust w-2/5 mb-2 mr-auto ml-auto rounded-md">
      <input
        type="text"
        class="w-full my-2 border py-2 pl-4 text-xl"
        placeholder="Save your tears"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style lang="scss" scoped>
input {
  @extend .strip-border;
}
</style>
