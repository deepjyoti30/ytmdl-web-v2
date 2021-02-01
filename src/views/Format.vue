<template>
  <div class="format__container">
    <div
      class="format--content md:w-1/2 w-11/12 mr-auto ml-auto mt-12 mb-12 pt-4 pb-24"
    >
      <h1 class="text-4xl font-bold dark:text-white">Format</h1>
      <h5 class="text-xl text-gray-600 mt-4 dark:text-gray-500">
        Which format do you want to download the song in?
      </h5>
      <div class="options--container mt-12">
        <FormatOption
          v-for="(option, id) in getOptions"
          :key="id"
          :name="option.name"
          :description="option.description"
          :recommended="'recommended' in option && option.recommended"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FormatOption from "@/components/FormatOption";

export default {
  name: "Format",
  components: {
    FormatOption
  },
  data() {
    return {
      formatOptions: [
        {
          name: "m4a",
          description: "Aims to overtake mp3, newer format",
          recommended: true
        },
        {
          name: "mp3",
          description: "Older format but known by almost everyone"
        },
        {
          name: "opus",
          description:
            "Opus is mostly used for storage and streaming applications"
        }
      ]
    };
  },
  computed: {
    getOptions() {
      return this.formatOptions;
    }
  }
};
</script>

<style lang="scss" scoped>
.format__container {
  .format--content {
    h5 {
      @extend .dm-sans;
    }
  }
}
</style>
