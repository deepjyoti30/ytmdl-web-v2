<template>
  <div class="manual--each__container py-4">
    <h3 class="text-xl font-medium">Title of the song</h3>
    <input
      class="border mt-3 px-4 py-2 rounded-md text-lg w-3/5"
      placeholder="Enter the title of the song"
    />
  </div>
</template>

<script>
export default {
  name: "ManualEach"
};
</script>

<style lang="scss" scoped>
.manual--each__container {
  h3 {
    @extend .dm-sans;
  }

  input {
    border: 3px solid $mediumblue;
    outline: none;
    transition: 0.2s ease;

    &:focus {
      transition: 0.2s ease;
      border-color: $darkblue;
    }
  }
}
</style>
