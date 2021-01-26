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
      class="search--box shadow-cust md:w-2/5 w-11/12 mb-2 mr-auto ml-auto rounded-lg"
    >
      <SearchIcon size="1.5x" class="search-icon mt-4" />
      <input
        type="text"
        class="w-full my-2 border py-2 pl-12 pr-12 text-xl"
        placeholder="Save your tears"
        spellcheck="false"
        autocomplete="false"
        v-model="songEntered"
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
      songEntered: ""
    };
  },
  methods: {
    clearInput: function() {
      // Clear the entered input
      this.songEntered = "";
    }
  },
  computed: {
    getShowClearIcon() {
      return this.songEntered.length;
    }
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
