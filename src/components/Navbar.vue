<template>
  <nav class="navbar-cust" @mouseleave="disableHover">
    <div id="navbar-collapsed" class="navbar-collapsed">
      <div class="navbar-brand py-3 px-2">
        <a href="" class="">YTMDL</a>
      </div>
      <div class="menu-button-mobile py-3 px-4 h5" @click="toggleHover()">
        <span v-if="!getHover">Menu</span>
        <span v-else>Close</span>
      </div>
      <div class="navigation" @mouseover="enableHover()">
        <div id="home" class="pl-9">
          <router-link to="/" id="home" :class="getClass('home')"
            ><HomeIcon></HomeIcon
          ></router-link>
        </div>
        <div id="home" class="pl-9">
          <router-link to="/about" id="about" :class="getClass('about')"
            ><HelpCircleIcon></HelpCircleIcon
          ></router-link>
        </div>
        <div id="home" class="pl-9">
          <router-link to="/terms" id="about" :class="getClass('about')"
            ><FileTextIcon></FileTextIcon
          ></router-link>
        </div>
      </div>
      <div class="navbar-bottom py-3 px-3"></div>
    </div>
    <div id="navbar-expanded" class="navbar-expanded">
      <div id="navbar-expanded-navigation" class="navigation text-left">
        <router-link to="/" :class="getClass('home')">
          <span>Home</span>
        </router-link>
        <router-link to="/about" :class="getClass('about')">
          <span>About</span>
        </router-link>
        <router-link to="/terms" :class="getClass('terms')">
          <span>Terms</span>
        </router-link>
      </div>
    </div>
    <button
      id="navbar-bottom"
      class="navbar-bottom"
      @click="sendThemeChangeRequest()"
      title="Toggle theme"
    >
      <MoonIcon v-if="isDarkIcon"></MoonIcon>
      <SunIcon v-else color="#FFCA28"></SunIcon>
    </button>
  </nav>
</template>

<script>
import {
  HomeIcon,
  HelpCircleIcon,
  MoonIcon,
  SunIcon,
  FileTextIcon
} from "vue-feather-icons";

export default {
  name: "Navbar",
  components: {
    HomeIcon,
    HelpCircleIcon,
    MoonIcon,
    SunIcon,
    FileTextIcon
  },
  props: {
    highlight: {
      type: String,
      default: "home"
    }
  },
  data: () => {
    return {
      isHovered: false,
      showDark: true
    };
  },
  methods: {
    highlightCurrentPageIcon() {
      // Add the active class to the passed current id.
      document.getElementById(this.highlight).classList.add("active");
    },
    emitChange(clickedWhere) {
      this.$emit("nav-click", clickedWhere);
      this.disableHover();
      return false;
    },
    getClass(callingElement) {
      if (this.highlight == callingElement) return "active";
      else return "";
    },
    enableHover() {
      if (this.isHovered) return;
      this.isHovered = true;

      const navExpanded = document.getElementById("navbar-expanded");
      navExpanded.style.visibility = "visible";
      navExpanded.classList.remove("collapseLeft");
      navExpanded.classList.add("expandRight");
      this.animateSpan();

      // Styles for mobile devices
      if (window.innerWidth <= 468) {
        document.getElementById("navbar-bottom").style.display = "block";
      }
    },
    disableHover() {
      if (!this.isHovered) return;

      this.animateSpan(true);
      this.isHovered = false;

      const navExpanded = document.getElementById("navbar-expanded");
      navExpanded.classList.remove("expandRight");
      navExpanded.classList.add("collapseLeft");
      navExpanded.style.visibility = "hidden";

      // Styles for mobile devices
      if (window.innerWidth <= 468) {
        document.getElementById("navbar-bottom").style.display = "none";
      }
    },
    toggleHover() {
      if (this.isHovered) this.disableHover();
      else this.enableHover();
    },
    animateSpan(reverse = false) {
      if (!this.isHovered) return;
      const animationUsed = reverse ? "fadeOutUp" : "fadeInUp";
      let delay = 0;

      document
        .getElementById("navbar-expanded")
        .getElementsByTagName("span")
        .forEach((el, index) => {
          if (reverse) el.classList.remove("fadeInUp");
          else el.classList.remove("fadeOutUp");

          el.classList.add(animationUsed);
          delay = 0.1 + index * 0.1;
          el.style.animationDelay = `${delay}s`;
        });
    },
    toggleThemeIcon() {
      this.showDark = !this.showDark;
    },
    sendThemeChangeRequest() {
      this.$emit("theme-change", this.showDark);
    }
  },
  computed: {
    getHover() {
      return this.isHovered;
    },
    isDarkIcon() {
      return this.showDark;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.navbar-cust {
  transition: 0.3s ease;

  position: fixed;
  left: 0;
  height: 100%;
  z-index: 2;
  background: $background-secondary;
  display: flex;

  .menu-button-mobile {
    display: none;
  }

  .navbar-expanded {
    background: $background-secondary;
    width: 0;
    overflow: hidden;
    z-index: -1;
    visibility: hidden;

    .navigation {
      margin-top: 65px;

      a {
        padding-left: 0.75rem;

        span {
          padding: 3px;
          border-radius: 3px;
        }

        &:hover {
          background: darken($background-secondary, 5);
          transition: 0.5s ease;
          text-decoration: none;
        }
      }

      .active {
        span {
          background: $background-primary;
        }
      }
    }
  }

  .navbar-collapsed {
    background: $background-secondary;
    width: 6rem;
    height: 100%;
  }

  .navigation {
    margin: 10px 0;
    text-align: center;

    a {
      font-size: 16px;
      padding: 20px 0;
      display: block;
      color: $dark;
    }

    .active {
      color: $primary;
    }
  }

  .navbar-brand {
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    width: 100%;

    a {
      color: $primary-darker;
      &:hover {
        text-decoration: none !important;
      }
    }
  }

  .navbar-bottom {
    position: absolute;
    bottom: 0;
    width: 6rem;
    padding: 20px 0;
    text-align: center;
    color: $dark;
    border: none;
    background: none;
    outline: none;

    &:hover {
      background: darken($background-secondary, 4);
    }
  }
}

@media only screen and (max-width: 468px) {
  .navbar-cust {
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    width: 100vw;

    .menu-button-mobile {
      display: block;
      position: absolute;
      right: 0;
      top: 0;
    }

    .navbar-collapsed {
      div {
        display: inline-block;
      }

      .navigation {
        display: none;
      }
    }

    .navbar-expanded {
      width: 100%;
      position: absolute;
      height: 100vh;
      left: 0;
      z-index: -2;
      animation-name: none;
      .navigation {
        a {
          font-size: 30px;

          span {
            padding: 10px 20px;
          }
        }
      }
    }
    .navbar-bottom {
      display: none;
      top: 350px;
    }
  }
}
</style>
