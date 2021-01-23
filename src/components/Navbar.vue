<template>
  <div class="navbar__container">
    <div class="navbar__content">
      <div class="navbar__content--collapsed">
        <div
          class="navbar-top flex justify-between flex-row-reverse md:block my-5 px-2 md:my-0 text-center"
        >
          <div class="menu-btn md:hidden">
            <MenuIcon />
          </div>
          <div
            class="brand__container md:py-5 md:my-5 md:text-center uppercase font-semibold"
          >
            ytmdl
          </div>
          <div class="theme-toggle-btn md:hidden">
            <MoonIcon />
          </div>
        </div>
        <div class="navbar-left">
          <div class="py-6 text-center">
            <router-link to="/"
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
import {
  HomeIcon,
  SettingsIcon,
  HelpCircleIcon,
  MoonIcon,
  MenuIcon
} from "vue-feather-icons";

export default {
  name: "Navbar",
  components: {
    HomeIcon,
    SettingsIcon,
    HelpCircleIcon,
    MoonIcon,
    MenuIcon
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
    display: flex;

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

      .navbar-left {
        .link-icon {
          color: $grey-lighter;
        }

        .router-link-exact-active {
          .link-icon {
            stroke: $darkgreen;
          }
        }
      }
    }

    /*.navbar__content--collapsed:hover + .navbar__content--expanded {
      visibility: visible;
      width: 12rem;
    }*/
  }

  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 4rem;

    .navbar__content {
      .navbar__content--collapsed {
        height: 4rem;
        width: 100vw;
        overflow: hidden;

        .navbar-left {
          display: none;
        }
      }
    }
  }
}
</style>
