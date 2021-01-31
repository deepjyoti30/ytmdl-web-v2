<template>
  <div class="meta--result__container">
    <div class="meta--result md:my-4 my-3 max-w-3xl mr-auto ml-auto p-2 flex">
      <div class="meta--cover w-1/4">
        <img :src="getCover" alt="" class="rounded-md" loading="lazy" />
      </div>
      <div class="meta--details w-3/4 md:px-8 pl-3 py-2">
        <h3
          class="text-3xl font-semibold title text-gray-600 dark:text-gray-200"
        >
          {{ getTitle }}
        </h3>
        <h4 class="artist mt-3 text-xl text-gray-600 dark:text-gray-400">
          {{ getArtist }}
        </h4>
        <h5 class="duration text-gray-700 dark:text-gray-400">
          {{ getDuration }}
        </h5>
        <h5 class="album mt-3 text-md text-gray-500">{{ getAlbum }}</h5>
        <h5 class="release text-md text-gray-500">{{ getRelease }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetaResult",
  props: {
    meta: {
      type: Object
    }
  },
  computed: {
    getTitle() {
      return this.meta.name;
    },
    getArtist() {
      return this.meta.artist;
    },
    getAlbum() {
      return this.meta.album;
    },
    getDuration() {
      return this.meta.time;
    },
    getRelease() {
      return this.meta.release_date;
    },
    getCover() {
      return this.meta.cover;
    }
  }
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

      .album,
      .title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .title {
        -webkit-line-clamp: 1;
      }
    }
  }
}
</style>
