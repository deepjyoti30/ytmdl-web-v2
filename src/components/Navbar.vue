<template>
  <div class="navbar__container" @mouseleave="collapseBar">
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
        <div class="navbar-left" @mouseover="expandBar">
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
        <div class="theme-toggle-btn desktop hidden lg:block">
          <div class="py-6 text-center">
            <button type="button" title="Toggle theme">
              <MoonIcon />
            </button>
          </div>
        </div>
      </div>
      <transition name="navbar-expand">
        <div v-if="getExpandNavbar" class="navbar__content--expanded">
          <div class="navbar-right pl-7">
            <div class="link-each py-6">
              <router-link to="/">Home</router-link>
            </div>
            <div class="link-each py-6">
              <router-link to="/about">About</router-link>
            </div>
            <div class="link-each py-6">
              <router-link to="/settings">Settings</router-link>
            </div>
          </div>
        </div>
      </transition>
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
  },
  data: () => {
    return {
      expandNavbar: false
    };
  },
  methods: {
    expandBar: function() {
      // Expand the bar
      this.expandNavbar = true;
    },
    collapseBar: function() {
      // Collapse the bar
      this.expandNavbar = false;
    }
  },
  computed: {
    getExpandNavbar() {
      return this.expandNavbar;
    }
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
      width: 12rem;
      background: $background-light;
      z-index: -1;

      .navbar-right {
        margin-top: 103px;

        .link-each {
          font-size: 18px;
        }
      }
    }

    .navbar__content--collapsed {
      height: 100vh;
      width: 6rem;
      background: $background-light;
      position: relative;
      z-index: 99;

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

      .theme-toggle-btn {
        &.desktop {
          width: 6rem;
          position: absolute;
          bottom: 0;
        }
      }
    }
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

  .navbar-expand-enter {
    opacity: 0;
    transform: translateX(-12rem);
  }

  .navbar-expand-enter-to {
    opacity: 1;
    transform: translateX(0);
  }

  .navbar-expand-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .navbar-expand-leave-to {
    opacity: 1;
    transform: translateX(-12rem);
  }

  .navbar-expand-enter-active,
  .navbar-expand-leave-active {
    transition: opacity, transform 200ms ease-out;
  }
}
</style>
