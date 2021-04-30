<template>
  <div class="playlist--song__container">
    <div
      class="pl--song--content flex items-center justify-between border-b dark:border-gray-700 py-2"
    >
      <div class="song--details flex items-center md:w-4/5 w-11/12">
        <div class="cover md:w-auto w-1/6">
          <img
            :src="getCover"
            alt="Song Cover"
            class="w-10 h-10 rounded-md object-cover"
            loading="lazy"
          />
        </div>
        <div class="title md:w-3/6 w-5/6">
          <div class="font-medium text-gray-800 dark:text-gray-300">
            {{ getTitle }}
          </div>
        </div>
        <div class="artist md:w-2/6 md:block hidden">
          <div class="font-medium text-gray-400 dark:text-gray-500">
            {{ getArtist }}
          </div>
        </div>
      </div>
      <div class="link md:w-auto w-1/12">
        <a
          :href="getUrl"
          class="px-2 py-2 bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-full inline-flex duration-150 ease-in hover:bg-gray-200 dark:hover:bg-gray-700"
          title="Check on YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLinkIcon size="1x" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "PlaylistSong",
  components: {
    ExternalLinkIcon
  },
  data: function() {
    return {
      cover: null,
      coverStatus: "loading",
      endpoint: "http://0.0.0.0:5000/v2/song"
    };
  },
  props: {
    song: {
      type: Object,
      default: null
    }
  },
  methods: {
    fetchSongCover: async function(id) {
      /**
       * Use the id passed in order to fetch the cover of the song
       * that is to be shown to the user.
       */
      const url = `${this.endpoint}/${id}/cover`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const jsonData = await response.json();

      this.coverStatus = response.statusText.toLowerCase();

      // Try to extract the details only if the response is ok
      if (this.coverStatus == "ok") this.cover = jsonData;
    }
  },
  computed: {
    getTitle() {
      return this.song["title"];
    },
    getArtist() {
      return this.song["uploader"];
    },
    getUrl() {
      return this.song["url"];
    },
    getCover() {
      return this.coverStatus == "ok"
        ? this.cover["cover"]["small"]
        : "https://generative-placeholders.glitch.me/image?width=50&height=50&style=123&colors=25";
    }
  },
  mounted() {
    // Since the component will be mounted only after the
    // song is available, we can call fetch now.
    this.fetchSongCover(this.song["id"]);
  }
};
</script>

<style lang="scss" scoped>
.playlist--song__container {
  .pl--song--content {
    .song--details {
      div {
        @apply px-2;

        &:first-child {
          @apply pl-0;
        }
      }

      .title,
      .artist {
        div {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
