<template>
  <div id="app">
    <Navbar />
    <router-view class="router-view__container" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
.router-view__container {
  width: 100vw;
  padding-left: 6rem;
}
</style>
