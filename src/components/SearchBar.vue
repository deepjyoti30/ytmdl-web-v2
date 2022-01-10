<template>
  <div class="search-bar__container">
    <div
      class="text-for-search md:w-1/5 mr-auto ml-auto text-center font-medium text-md text-gray-400 dark:text-gray-400 pb-2"
    >
      Type name of song, artist, album etc.
    </div>
    <div
      class="divider--line w-0 mr-auto ml-auto border border-gray-200 dark:border-gray-700 h-7"
    ></div>
    <div
      class="search--box shadow-cust md:w-2/5 w-11/12 mb-3 mr-auto ml-auto rounded-lg"
      :class="{ 'border-b-4 border-red-400': getInvalidInput }"
    >
      <SearchIcon size="1.5x" class="search-icon mt-4" />
      <input
        type="text"
        class="w-full my-2 py-2 pl-12 pr-12 text-xl"
        :placeholder="getPlaceholder"
        spellcheck="false"
        autocomplete="false"
        v-model="songEntered"
        @keyup.enter="sendSearchRequest"
        ref="searchInput"
      />
      <button
        type="button"
        class="strip-button"
        title="Clear Input"
        @click="clearInput"
      >
        <XCircleIcon
          v-if="getShowClearIcon"
          size="1.5x"
          class="clear-icon text-gray-200"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { SearchIcon, XCircleIcon } from "vue-feather-icons";

export default {
  name: "SearchBar",
  components: {
    SearchIcon,
    XCircleIcon
  },
  data: () => {
    return {
      isInvalidInput: false,
      titleUrl: `${process.env.VUE_APP_API_URL}/metadata/title-from-url`
    };
  },
  props: {
    hideUrlMessage: {
      type: Boolean,
      default: false
    },
    disableAutoSearch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    songEntered: {
      get() {
        var queryFromRoute = this.$route.query.query;

        if (!queryFromRoute) queryFromRoute = "";
        return queryFromRoute;
      },
      set(value) {
        this.$router.replace({
          query: {
            ...this.$route.query,
            query: value
          }
        });
      }
    },
    getShowClearIcon() {
      return this.songEntered.length;
    },
    isUrl() {
      // Check if the entered text is an URL
      return Boolean(this.songEntered.match(/https?:\/\/|youtu.be/g));
    },
    isYoutubeUrl() {
      // Check if the entered text is a valid YouTube URL
      return Boolean(
        this.songEntered.match(
          /https?:\/\/(www\.)?youtube.com\/watch\?v=.+?|youtu.be\//g
        )
      );
    },
    getInvalidInput() {
      return this.isInvalidInput;
    },
    getPlaceholder() {
      var placeholder = `Enter name of song ${
        this.hideUrlMessage ? "" : "or YouTube URL"
      }`;
      return placeholder;
    }
  },
  methods: {
    clearInput: function() {
      // Clear the entered input
      this.songEntered = "";
    },
    extractVideoId: function(enteredUrl) {
      /**
       * Extract the video ID from the passed string
       *
       * The youtube URL has the video ID in the string as a
       * query. The v parameter contains the video ID.
       */
      // If the string is of the new type then extract it separately.
      if (enteredUrl.includes("youtu.be")) {
        return enteredUrl.replace("youtu.be/", "");
      }

      const urlParams = new URLSearchParams(
        enteredUrl.replace(/https?:\/\/(www\.)?youtube.com\/watch/g, "")
      );
      return urlParams.get("v");
    },
    extractTitleFromUrl: async function(enteredUrl) {
      /**
       * Extract the title from the URL using the API.
       *
       * If should_verify is passed, show user if they want to
       * change the title.
       */
      const response = await fetch(
        `${this.titleUrl}?${new URLSearchParams({
          url: enteredUrl
        }).toString()}`,
        {
          method: "GET"
        }
      );
      const jsonData = await response.json();

      // TODO: Do something with the should_verify flag

      return jsonData.title;
    },
    sendSearchRequest: async function() {
      /**
       * Emit a search request when the enter button is clicked.
       */
      if (!this.getShowClearIcon) return;

      // If the entered value is not an URL, just search for the term
      if (!this.isUrl) {
        this.$emit("search", { song: this.songEntered, isYoutube: false });
        this.unfocuSearchBar();
        return;
      }

      // If it is an URL, it might be from YouTube
      if (!this.isYoutubeUrl) {
        this.isInvalidInput = true;
        setTimeout(() => {
          this.isInvalidInput = false;
        }, 3000);
        return;
      }

      const videoId = this.extractVideoId(this.songEntered);

      // Extract the title from the URL
      const titleExtracted = await this.extractTitleFromUrl(this.songEntered);

      // Use the videoId to redirect to the metadata route with that videoId.
      this.$emit("search", {
        song: titleExtracted,
        isYoutube: true,
        videoId: videoId
      });
      this.unfocuSearchBar();
    },
    focusSearchBar: function() {
      // Put focus on the search bar
      this.$refs.searchInput.focus();
    },
    unfocuSearchBar: function() {
      // Unfocus the search bar so that the keyboard is hidden.
      this.$refs.searchInput.blur();
    }
  },
  mounted() {
    this.focusSearchBar();

    // If auto search is disabled, don't send search request
    if (!this.disableAutoSearch) this.sendSearchRequest();
  }
};
</script>

<style lang="scss" scoped>
input {
  @extend .strip-border;
  background: none;
}

.icon {
  color: $grey-lighter;
  position: absolute;
}

.search--box {
  position: relative;
}

.search-icon {
  @extend .icon;

  transform: translateX(0.5rem);
}

.clear-icon {
  @extend .icon;
  top: 1rem;
  right: 0.5rem;
}
</style>
