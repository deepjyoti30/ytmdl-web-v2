<template>
  <div class="download--btn__container py-4">
    <div class="btn__container">
      <button
        type="button"
        class="text-xl uppercase text-white font-semibold rounded-md shadow-cust"
      >
        Download
        <span class="progress-bar bg-black rounded-b-md"></span>
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
      transition: 0.2s ease;
      position: relative;
      min-width: 10em;

      &:hover {
        background: darken($darkgreen, 2);
        transition: 0.2s ease;
      }

      .progress-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 3px;
        width: 100%;
      }
    }
  }
}
</style>
