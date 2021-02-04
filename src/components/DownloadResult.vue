<template>
  <div class="download--result__container flex">
    <div class="cover--img w-2/5">
      <img
        src="https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/9a/a0/eb/9aa0ebb8-3150-8f37-58ba-2329bd4bdd0a/source/480x480bb.jpg"
        alt=""
        loading="lazy"
        class="rounded-md shadow-2xl"
      />
    </div>
    <div class="download--details py-12 px-8 w-3/5">
      <h1 class="title font-bold text-4xl dark:text-white">
        What You Know Bout Love
      </h1>
      <h3
        class="artist text-3xl font-medium mt-6 text-gray-700 dark:text-gray-200"
      >
        Pop Smoke
      </h3>
      <h4 class="genre font-medium text-gray-500 mt-4 dark:text-gray-400">
        Hip-Hop/Rap
      </h4>
      <h4 class="release font-medium text-gray-500 mt-0.5 dark:text-gray-400">
        2020-07-03
      </h4>
      <h3
        class="size text-xl font-medium mt-4 text-gray-600 dark:text-gray-400"
      >
        5.66 MB
      </h3>
      <div class="dw--btn mt-6">
        <DownloadButton />
      </div>
    </div>
  </div>
</template>

<script>
import DownloadButton from "@/components/DownloadButton";

export default {
  name: "DownloadResult",
  components: {
    DownloadButton
  }
};
</script>

<style lang="scss" scoped>
.download--result__container {
  .download--details {
    .artist,
    .genre,
    .release,
    .size {
      @extend .dm-sans;
    }

    .verified {
      background: lighten($darkgreen, 45);
      color: $darkgreen;
    }
  }
}
</style>
