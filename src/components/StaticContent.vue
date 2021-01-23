<template>
  <div class="static__container">
    <div class="content" v-html="getContent"></div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "StaticContent",
  props: {
    filePath: {
      type: String
    }
  },
  data: () => {
    return {
      content: ""
    };
  },
  methods: {
    readContent: function() {
      /**
       * Read the content of the passed file based on
       * the path and accordingly store it in a local
       * variable.
       */
      this.$http.get(this.filePath).then(response => {
        this.content = marked(response.body);
      });
    }
  },
  computed: {
    getContent() {
      return this.content;
    }
  },
  mounted() {
    this.readContent();
  }
};
</script>
