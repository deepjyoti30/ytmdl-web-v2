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
          @click.native="handleClick(option.name)"
        />
      </div>
    </div>
    <Confirm
      ref="confirm"
      :heading="getConfirmTitle"
      :text="getConfirmDescription"
      continueText="OK!"
    />
  </div>
</template>

<script>
import FormatOption from "@/components/FormatOption";
import Confirm from "@/components/Confirm";

export default {
  name: "Format",
  components: {
    FormatOption,
    Confirm
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
  methods: {
    handleClick: function(formatName) {
      /**
       * Handle the click on one of the formats
       */
      console.log(formatName);

      // Ask the user if they would like to make it the default setting.
      this.$refs.confirm.showModal();
    }
  },
  computed: {
    getOptions() {
      return this.formatOptions;
    },
    getConfirmTitle() {
      return "Would you like to make it default?";
    },
    getConfirmDescription() {
      return "If you make it default, you will not be asked to select a format from the next time. You can change this behaviour from the settings menu.";
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
