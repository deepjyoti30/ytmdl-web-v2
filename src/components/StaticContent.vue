<template>
  <div class="static__container">
    <div class="content w-2/5 mr-auto ml-auto" v-html="getContent"></div>
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

<style lang="scss" scoped>
.static__container {
  margin-top: 5em;

  .content {
    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4 {
      color: $black;
      margin: 2rem 0;
      font-weight: 500;
    }

    ::v-deep h1 {
      font-size: 2.2em;
    }

    ::v-deep h2 {
      font-size: 2em;
    }

    ::v-deep h3 {
      font-size: 1.8em;
    }

    ::v-deep h4 {
      font-size: 1em;
    }

    ::v-deep p,
    ::v-deep li {
      @extend .roboto;
      font-size: 18px;

      @apply text-gray-600;
    }
  }
}
</style>
