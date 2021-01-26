<template>
  <div class="home__container md:py-16 py-24">
    <div class="top__container text-center">
      <h1 class="md:text-4xl text-3xl font-bold">
        Download songs with metadata in the best quality possible!
      </h1>
    </div>
    <div class="search-bar-content pt-16">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  name: "Home",
  components: { SearchBar }
};
</script>

<style lang="scss" scoped>
.home__container {
  .top__container {
    h1 {
      color: $lightgreen;
    }
  }
}
</style>
