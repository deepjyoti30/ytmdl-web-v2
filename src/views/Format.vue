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
      @continue="handleContinue"
      @cancel="handleNextPage"
    />
  </div>
</template>

<script>
import FormatOption from "@/components/FormatOption";
import Confirm from "@/components/Confirm";
import { settings } from "@/components/mixins/settings";

export default {
  name: "Format",
  components: {
    FormatOption,
    Confirm
  },
  mixins: [settings],
  props: {
    metaDetails: {
      type: Object
    }
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
      ],
      selectedFormat: "",
      showConfirm: true
    };
  },
  methods: {
    handleClick: function(formatName) {
      /**
       * Handle the click on one of the formats
       *
       * One thing to note here is that the format that the user
       * selects here will be saved as the default since we need
       * to read it in the next page and somewhere else (maybe?!)
       */
      this.selectedFormat = formatName;
      this.setSetting("format", this.selectedFormat);

      if (this.showConfirm) {
        // Ask the user if they would like to make it the default setting.
        this.$refs.confirm.showModal();
        return;
      }

      this.handleNextPage();
    },
    handleContinue: function() {
      /**
       * Handle the click on continue in the confirmation.
       *
       * This means we need to set the setting to the current format
       * and make the format skipping option true;
       */
      this.setSetting("ask-format-each", false, true);

      this.handleNextPage();
    },
    handleNextPage: function() {
      /**
       * If the user selects to decline the request to make
       * the selected format the default format or if they have it
       * disabled, we need to forward them to the next page.
       */
      this.$router.push({
        name: "Download",
        params: {
          metaDetails: this.metaDetails
        },
        query: {
          videoId: this.$route.query.videoId
        }
      });
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
      return `If you make ${this.selectedFormat} default, you will not be asked to select a format from the next time. You can change this behaviour from the settings menu.`;
    }
  },
  created() {
    this.showConfirm = this.getSetting("format-confirm", true);
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
