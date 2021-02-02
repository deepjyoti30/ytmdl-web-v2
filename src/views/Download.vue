<template>
  <div class="download__container"></div>
</template>

<script>
import { settings } from "@/components/mixins/settings";

export default {
  name: "Download",
  mixins: [settings],
  props: {
    metaDetails: {
      type: Object
    }
  },
  data() {
    return {
      format: null
    };
  },
  created() {
    this.format = this.getSetting("format");
  }
};
</script>
