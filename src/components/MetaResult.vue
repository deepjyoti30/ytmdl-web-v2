<template>
  <div class="meta--result__container border">
    <div
      class="meta--result md:my-4 my-3 max-w-3xl mr-auto ml-auto p-2 border flex"
    >
      <div class="meta--cover w-1/4">
        <img
          src="https://is5-ssl.mzstatic.com/image/thumb/Music/v4/84/0d/fc/840dfce7-ceab-cb9d-cc93-8b268984e09b/source/480x480bb.jpg"
          alt=""
          class="rounded-md"
          loading="lazy"
        />
      </div>
      <div class="meta--details w-3/4 md:px-6 pl-3 py-2">
        <h3
          class="text-3xl font-semibold title text-gray-600 dark:text-gray-200"
        >
          Sundown
        </h3>
        <h4 class="artist mt-3 text-xl text-gray-600 dark:text-gray-400">
          Gordon Lightfoot
        </h4>
        <h5 class="duration text-gray-700 dark:text-gray-400">3:34</h5>
        <h5 class="album mt-3 text-md text-gray-500">Gord's Gold</h5>
        <h5 class="release text-md text-gray-500">17 Sept, 2020</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetaResult"
};
</script>

<style lang="scss" scoped>
.meta--result__container {
  .meta--result {
    .meta--cover {
      img {
        @media only screen and (min-width: $md) {
          min-width: 12rem;
        }

        @media only screen and (max-width: $md) {
          min-height: 100%;
        }
      }
    }

    .meta--details {
      .artist,
      .album,
      .release,
      .duration {
        @extend .dm-sans;
      }
    }
  }
}
</style>
