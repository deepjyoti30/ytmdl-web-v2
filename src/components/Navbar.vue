<template>
  <div class="navbar__container" @mouseleave="collapseBar">
    <div class="navbar__content lg:flex">
      <div class="navbar__content--collapsed">
        <div
          class="navbar-top flex justify-between flex-row-reverse md:block my-5 px-2 md:my-0 text-center"
        >
          <div class="menu-btn md:hidden">
            <button type="button" @click="toggleBar">
              <MenuIcon />
            </button>
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
          <div class="navbar-right">
            <router-link to="/" class="link-each py-6 pl-7">
              <span>Home</span>
            </router-link>
            <router-link to="/about" class="link-each py-6 pl-7">
              <span>About</span>
            </router-link>
            <router-link to="/settings" class="link-each py-6 pl-7">
              <span>Settings</span>
            </router-link>
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
    },
    toggleBar: function() {
      // Toggle the visibility of the bar
      this.expandNavbar = !this.expandNavbar;
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
    .navbar__content--expanded {
      height: 100vh;
      width: 12rem;
      background: $background-light;

      .navbar-right {
        margin-top: 103px;

        .link-each {
          font-size: 18px;
          color: $grey-lighter;
          display: block;
          transition: 150ms ease-in;

          span {
            @apply px-1;
          }

          &.router-link-exact-active {
            color: $darkgreen;

            span {
              background: lighten($darkgreen, 50);
            }
          }

          &:hover {
            transition: 150ms ease-in;
            background: darken($background-light, 5);
          }
        }
      }

      @media only screen and (max-width: $md) {
        width: 100vw;

        .navbar-right {
          margin-top: 0;
          padding-top: 5rem;

          .link-each {
            font-size: 22px;
          }
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

    @media only screen and (max-width: $md) {
      transform: translateY(0);
    }
  }

  .navbar-expand-enter-to {
    opacity: 1;
    transform: translateX(0);

    @media only screen and (max-width: $md) {
      transform: translateY(4rem);
    }
  }

  .navbar-expand-leave {
    opacity: 1;
    transform: translateX(0);

    @media only screen and (max-width: $md) {
      transform: translateY(100vh);
    }
  }

  .navbar-expand-leave-to {
    opacity: 1;
    transform: translateX(-12rem);

    @media only screen and (max-width: $md) {
      transform: translateY(0);
    }
  }

  .navbar-expand-enter-active,
  .navbar-expand-leave-active {
    transition: opacity, transform 200ms ease;
  }
}
</style>
