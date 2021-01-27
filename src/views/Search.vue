<template>
  <div class="search__container">
    <SearchBar class="my-8" />
    <SongResult />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SongResult from "@/components/SongResult";

export default {
  name: "Search",
  components: {
    SearchBar,
    SongResult
  }
};
</script>
