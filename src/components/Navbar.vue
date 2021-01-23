<template>
  <div class="navbar__container">
    <div class="navbar__content flex">
      <div class="navbar__content--collapsed">
        <div class="brand__container py-5 text-center uppercase font-semibold">
          ytmdl
        </div>
        <div class="navbar-left">
          <div class="py-6 text-center">
            <router-link to=""
              ><HomeIcon class="ml-auto mr-auto link-icon"
            /></router-link>
          </div>
          <div class="py-6 text-center">
            <router-link to="/about"
              ><HelpCircleIcon class="ml-auto mr-auto link-icon"
            /></router-link>
          </div>
          <div class="py-6 text-center">
            <router-link to="/settings"
              ><SettingsIcon class="ml-auto mr-auto link-icon"
            /></router-link>
          </div>
        </div>
      </div>
      <div class="navbar__content--expanded"></div>
    </div>
  </div>
</template>

<script>
import { HomeIcon, SettingsIcon, HelpCircleIcon } from "vue-feather-icons";

export default {
  name: "Navbar",
  components: {
    HomeIcon,
    SettingsIcon,
    HelpCircleIcon
  }
};
</script>

<style lang="scss" scoped>
.navbar__container {
  @extend .work-sans;

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

      .brand__container {
        color: $green;
      }
    }

    /*.navbar__content--collapsed:hover + .navbar__content--expanded {
      visibility: visible;
      width: 12rem;
    }*/
  }
}
</style>
