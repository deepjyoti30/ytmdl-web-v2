<template>
  <div class="song--result__container">
    <div class="song--result my-4 max-w-3xl mr-auto ml-auto p-2 flex">
      <div class="song--cover w-3/6">
        <img :src="getCover" alt="" class="rounded-md" loading="lazy" />
      </div>
      <div class="song--details px-6 w-4/6">
        <div class="top--details flex justify-between items-center">
          <h3
            class="text-2xl font-semibold title text-gray-600 dark:text-gray-200"
          >
            {{ getTitle }}
          </h3>
          <span
            v-if="isVerifiedMusic"
            class="verified--music py-1 px-2 rounded-sm"
          >
            Verified Music
          </span>
        </div>
        <h5
          class="duration text-lg mt-2 text-gray-700 font-medium dark:text-gray-300"
        >
          {{ getDuration }}
        </h5>
        <h5 class="channel text-lg text-gray-500">{{ getChannel }}</h5>
        <h5 class="description text-md mt-2 text-gray-500">
          {{ getDescription }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongResult",
  props: {
    song: {
      type: Object
    }
  },
  methods: {
    findCover: function() {
      /**
       * Find the cover of the song.
       *
       * Try to return the highest quality possible. If nothing is available,
       * fallback to a default image.
       */
      const coverObj = this.song.cover;

      if ("large" in coverObj) return coverObj.large;
      else if ("small" in coverObj) return coverObj.large;
      else return "";
    }
  },
  computed: {
    getTitle() {
      return this.song.title;
    },
    getDescription() {
      return this.song.long_desc;
    },
    getChannel() {
      return this.song.channel;
    },
    getDuration() {
      return this.song.duration.readable;
    },
    isVerifiedMusic() {
      return this.song.verified_music;
    },
    getCover() {
      return this.findCover();
    }
  }
};
</script>

<style lang="scss" scoped>
.song--result__container {
  .song--result {
    .song--details {
      .channel,
      .duration,
      .verified--music {
        @extend .dm-sans;
      }

      .verified--music {
        background: lighten($darkgreen, 45);
        color: $darkgreen;
      }

      .description,
      .title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>
