<template>
  <div class="home__container py-16">
    <div class="top__container text-center">
      <h1 class="text-4xl font-bold">
        Download songs with metadata in the best quality possible!
      </h1>
    </div>
    <div class="search-bar-content pt-8">
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
