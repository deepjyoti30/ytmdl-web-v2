<template>
  <div class="metadata__container"></div>
</template>

<script>
export default {
  name: "Metadata",
  computed: {
    videoId: {
      get() {
        var queryFromRoute = this.$route.query.videoId;

        if (!queryFromRoute) queryFromRoute = null;
        return queryFromRoute;
      },
      set(value) {
        this.$router.replace({
          query: {
            ...this.$route.query,
            videoId: value
          }
        });
      }
    }
  },
  created() {
    if (!this.queryFromRoute) this.$router.push({ path: "search" });
  }
};
</script>

<style lang="scss" scoped></style>
