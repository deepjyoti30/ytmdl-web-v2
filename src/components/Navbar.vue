<template>
  <div class="navbar__container" @mouseleave="collapseBar">
    <div class="navbar__content lg:flex">
      <div class="navbar__content--collapsed">
        <div
          class="navbar-top flex justify-between flex-row-reverse md:block my-5 px-5 md:my-0 text-center"
        >
          <div class="menu-btn md:hidden">
            <button type="button" title="Menu Button" @click="toggleBar">
              <XIcon v-if="getExpandNavbar" />
              <MenuIcon v-else />
            </button>
          </div>
          <div
            class="brand__container md:py-5 md:my-5 md:text-center block lg:flex uppercase font-semibold"
          >
            ytmdl
            <span class="text-xxs text-gray-500">v2</span>
          </div>
          <div class="theme-toggle-btn md:hidden">
            <button type="button" title="Toggle theme" @click="toggleTheme">
              <MoonIcon v-if="!getIsDark" />
              <SunIcon v-else class="sun-icon" />
            </button>
          </div>
        </div>
        <div class="navbar-left" @mouseover="expandBar">
          <div class="py-6 text-center">
            <router-link to="/" title="Home"
              ><HomeIcon class="ml-auto mr-auto link-icon"
            /></router-link>
          </div>
          <div class="py-6 text-center">
            <router-link to="/about" title="About"
              ><HelpCircleIcon class="ml-auto mr-auto link-icon"
            /></router-link>
          </div>
          <div class="py-6 text-center">
            <router-link to="/settings" title="Settings"
              ><SettingsIcon class="ml-auto mr-auto link-icon"
            /></router-link>
          </div>
          <div class="py-6 text-center">
            <router-link to="/donate" title="Donate"
              ><DollarSignIcon class="ml-auto mr-auto link-icon"
            /></router-link>
          </div>
          <div class="py-6 text-center">
            <a
              href="https://github.com/deepjyoti30/ytmdl-web-v2"
              target="_blank"
              rel="noopener"
              title="GitHub"
              ><GithubIcon class="ml-auto mr-auto link-icon" />
            </a>
          </div>
        </div>
        <div class="theme-toggle-btn desktop hidden lg:block">
          <div class="py-6 text-center">
            <button type="button" title="Toggle theme" @click="toggleTheme">
              <MoonIcon v-if="!getIsDark" />
              <SunIcon v-else class="sun-icon" />
            </button>
          </div>
        </div>
      </div>
      <transition name="navbar-expand">
        <div v-if="getExpandNavbar" class="navbar__content--expanded">
          <div class="navbar-right">
            <router-link
              to="/"
              @click.native="toggleBar"
              class="link-each pl-7"
            >
              <span>Home</span>
            </router-link>
            <router-link
              to="/about"
              @click.native="toggleBar"
              class="link-each pl-7"
            >
              <span>About</span>
            </router-link>
            <router-link
              to="/settings"
              @click.native="toggleBar"
              class="link-each pl-7"
            >
              <span>Settings</span>
            </router-link>
            <router-link
              to="/donate"
              @click.native="toggleBar"
              class="link-each pl-7"
            >
              <span>Donate</span>
            </router-link>
            <a
              href="https://github.com/deepjyoti30/ytmdl-web-v2"
              target="_blank"
              rel="noopener"
              @click="toggleBar"
              class="link-each pl-7"
            >
              <span
                >GitHub
                <div class="external-icon">
                  <ExternalLinkIcon size="1.1x" class="icon" />
                </div>
              </span>
            </a>
          </div>
          <div
            class="crafted-by text-sm font-medium md:text-left text-center my-7 md:pl-0"
          >
            Made by @deepjyoti30
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
  MenuIcon,
  XIcon,
  SunIcon,
  ExternalLinkIcon,
  DollarSignIcon,
  GithubIcon
} from "vue-feather-icons";

export default {
  name: "Navbar",
  components: {
    HomeIcon,
    SettingsIcon,
    HelpCircleIcon,
    MoonIcon,
    MenuIcon,
    XIcon,
    SunIcon,
    ExternalLinkIcon,
    DollarSignIcon,
    GithubIcon
  },
  data: () => {
    return {
      expandNavbar: false
    };
  },
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
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
    },
    toggleTheme: function() {
      /**
       * Toggle the theme when the theme button is clicked.
       *
       * We need to send an emit request in order to make sure
       * the colors are changed. We also need to change the
       * icon of the icon.
       */
      this.$emit("themeChange", !this.isDark ? "dark" : "light");
    }
  },
  computed: {
    getExpandNavbar() {
      return this.expandNavbar;
    },
    getIsDark() {
      return this.isDark;
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
  z-index: 99;

  button {
    @extend .strip-button;
  }

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
          padding-top: 1.45rem;
          padding-bottom: 1.45rem;
          position: relative;

          span {
            @apply px-1;
          }

          .external-icon {
            position: absolute;
            right: 1.3rem;
            top: 1.7rem;

            .icon {
              color: $lightblue;
            }
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

      .crafted-by {
        position: absolute;
        bottom: 0;
        width: 12rem;

        color: $grey-lighter;

        @media only screen and (max-width: $md) {
          position: fixed;
          width: 100vw;
        }
      }

      @media only screen and (max-width: $md) {
        width: 100vw;

        .navbar-right {
          margin-top: 0;
          padding-top: 5rem;

          .link-each {
            @apply border-gray-200;
            @apply border-b-2;

            font-size: 22px;

            &:first-child {
              @apply border-t-2;
            }
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

        @media only screen and (max-width: $md) {
          font-size: 20px;
        }
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

      .theme-toggle-btn,
      .menu-btn {
        color: $grey-lighter;

        .sun-icon {
          fill: $yellow;
          stroke: $orange;
        }

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
      transform: translateY(-100vh);
    }
  }

  .navbar-expand-enter-to {
    opacity: 1;
    transform: translateX(0);

    @media only screen and (max-width: $md) {
      transform: translateY(0);
    }
  }

  .navbar-expand-leave {
    opacity: 1;
    transform: translateX(0);

    @media only screen and (max-width: $md) {
      transform: translateY(0);
    }
  }

  .navbar-expand-leave-to {
    opacity: 1;
    transform: translateX(-12rem);

    @media only screen and (max-width: $md) {
      transform: translateY(-100vh);
    }
  }

  .navbar-expand-enter-active,
  .navbar-expand-leave-active {
    transition: opacity, transform 200ms ease;
  }
}
</style>
