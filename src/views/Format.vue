<template>
  <div class="format__container">
    <div
      class="format--content md:w-1/2 w-11/12 mr-auto ml-auto mt-12 mb-24 pt-4 pb-24"
    >
      <h1 class="text-4xl font-bold dark:text-white">Format</h1>
      <h5 class="text-xl text-gray-600 mt-4 dark:text-gray-500">
        Which format do you want to download the song in?
      </h5>
      <div class="options--container mt-12">
        <FormatOption />
      </div>
    </div>
  </div>
</template>

<script>
import FormatOption from "@/components/FormatOption";

export default {
  name: "Format",
  components: {
    FormatOption
  }
};
</script>

<style lang="scss" scoped>
.format__container {
  .format--content {
    h5 {
      @extend .dm-sans;
    }
  }
}
</style>
