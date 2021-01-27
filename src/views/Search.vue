<template>
  <div class="search__container">
    <SearchBar class="my-8" />
    <SongList query="Sundown" class="mt-24" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SongList from "@/components/SongList";

export default {
  name: "Search",
  components: {
    SearchBar,
    SongList
  }
};
</script>
