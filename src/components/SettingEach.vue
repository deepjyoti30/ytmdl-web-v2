<template>
  <div class="setting--each__container">
    <div
      class="setting--each py-4 md:my-2 mt-6 md:flex md:justify-between md:items-center block"
    >
      <div class="setting--text md:w-1/2 w-full">
        <h2 class="text-2xl font-medium text-gray-700 dark:text-gray-400">
          {{ getSettingName }}
        </h2>
        <div class="description text-md mt-4 text-gray-500 dark:text-gray-500">
          {{ getSettingDesc }}
        </div>
      </div>
      <div class="setting--handler md:w-2/5 w-full md:mt-0 mt-6 flex">
        <button
          type="button"
          v-for="(option, id) in getSettingOptions"
          :key="id"
          @click="emitValueChange(option)"
          class="px-4 py-2 rounded-md font-semibold text-gray-600 w-1/5"
          :class="{
            current: getDefault == option
          }"
        >
          {{ option }}
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
    emitValueChange: function(newValue) {
      /**
       * Emit when the value changes to a different value.
       *
       * When emitted the parent will take care of the changes
       * and writing the changes to the storage.
       */
      if (this.getSettingDefault == newValue) return;

      this.$emit("change", {
        name: this.settingDetails.name,
        newValue: newValue
      });
    }
  },
  computed: {
    getSettingName() {
      return this.settingDetails.title;
    },
    getSettingDesc() {
      return this.settingDetails.description;
    },
    getSettingOptions() {
      return this.settingDetails.options;
    },
    getSettingDefault() {
      return this.settingDetails.default;
    },
    getDefault() {
      return this.settingDetails.default;
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
      @extend .strip-button;

      background: lighten($darkgreen, 45);
      flex-basis: 100%;
      transition: 150ms ease;

      @apply mr-4;

      &:last-child {
        @apply mr-0;
      }

      &:hover {
        background: lighten($darkgreen, 15);
        transition: 150ms ease;
      }

      &.current {
        background: lighten($darkgreen, 15);
      }
    }
  }
}
</style>
