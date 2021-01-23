<template>
  <div class="navbar__container">
    <div class="navbar__content flex">
      <div class="navbar__content--collapsed">
        <div class="brand__container"></div>
      </div>
      <div class="navbar__content--expanded"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.navbar__container {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;

  .navbar__content {
    .navbar__content--expanded {
      height: 100vh;
      visibility: hidden;
    }

    .navbar__content--collapsed {
      height: 100vh;
      width: 6rem;
      background: $background-light;
    }

    /*.navbar__content--collapsed:hover + .navbar__content--expanded {
      visibility: visible;
      width: 12rem;
    }*/
  }
}
</style>
