<template>
  <div class="setting--each__container">
    <div class="setting--each py-4 my-2 flex justify-between items-center">
      <div class="setting--text w-2/4">
        <h2 class="text-2xl font-medium text-gray-700 dark:text-gray-400">
          Format
        </h2>
        <div class="description text-md mt-4 text-gray-600 dark:text-gray-500">
          Format is the format in which the song will be downloaded in. mp3 is
          the older but famous format. m4a is a good format. Takes less space
          and songs are good quality.
        </div>
      </div>
      <div class="setting--handler">
        <button
          type="button"
          class="px-4 py-2 rounded-md font-semibold text-gray-600"
        >
          mp3
        </button>
        <button
          type="button"
          class="px-4 py-2 rounded-md font-semibold text-gray-600"
        >
          m4a
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingEach",
  props: {
    settingDetails: {
      type: Object
    }
  },
  methods: {
    emitValueChange: function() {
      /**
       * Emit when the value changes to a different value.
       *
       * When emitted the parent will take care of the changes
       * and writing the changes to the storage.
       */
    }
  },
  computed: {
    getSettingName() {
      return this.settingDetails.name;
    },
    getSettingDesc() {
      return this.settingDetails.description;
    },
    getSettingOptions() {
      return this.settingDetails.options;
    }
  }
};
</script>

<style lang="scss" scoped>
.setting--each__container {
  .setting-text {
    .description {
      @extend .dm-sans;
    }
  }
  .setting--handler {
    button {
      background: $yellow;

      @apply mr-2;

      &:last-child {
        @apply mr-0;
      }
    }
  }
}
</style>
