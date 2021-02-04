<template>
  <div class="download--btn__container py-4">
    <div class="btn__container">
      <button
        type="button"
        class="text-xl uppercase text-white font-semibold rounded-md shadow-cust"
      >
        Download
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadButton"
};
</script>

<style lang="scss" scoped>
.download--btn__container {
  .btn__container {
    button {
      @extend .strip-button;

      background: $darkgreen;
      padding: 0.75em 2em;
    }
  }
}
</style>
