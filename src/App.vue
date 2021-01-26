<template>
  <div id="app">
    <Navbar :isDark="getIsDark" @themeChange="handleThemeChange" />
    <transition name="fade-in"
      ><router-view class="router-view__container" />
    </transition>
    <Footer class="footer" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  data: () => {
    return {
      isDark: false,
      showFooter: false
    };
  },
  methods: {
    addDark: function() {
      /**
       * Set the theme as the dark theme.
       *
       * In order to set the dark theme, we will add
       * the dark class to the body. We will also need to
       * change the logo.
       *
       * We also need to make sure the navbar icon changes.
       */
      document.querySelector("body").classList.add("dark");
      this.isDark = true;
    },
    removeDark: function() {
      /**
       * Remove dark mode.
       *
       * Undo everything done in addDark
       */
      document.querySelector("body").classList.remove("dark");
      this.isDark = false;
    },
    handleThemeChange: function(theme = "light") {
      /**
       * Change the theme based on what the navbar is asking to do.
       */
      theme == "light" ? this.removeDark() : this.addDark();
      this.saveTheme(theme);
    },
    saveTheme: function(theme) {
      /**
       * Save the theme in the localStorage so it can be used later.
       */
      localStorage.setItem("theme", theme);
    },
    readAndApplyTheme: function() {
      /**
       * Read the saved theme from the localStorage and apply it
       * accordingly.
       */
      const savedTheme = localStorage.getItem("theme");
      this.handleThemeChange(savedTheme);
    }
  },
  computed: {
    getIsDark() {
      return this.isDark;
    }
  },
  mounted() {
    this.readAndApplyTheme();
  }
};
</script>

<style lang="scss">
.router-view__container {
  padding-left: 6rem;

  @media only screen and (max-width: $md) {
    padding-left: 0;
    padding-top: 4rem;
  }
}

#app {
  @extend .work-sans;

  // Animations for the router view

  .fade-in-enter {
    opacity: 0;
    transform: translateY(-5rem);
  }

  .fade-in-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-in-enter-active {
    transition: opacity 500ms ease;
  }
}
</style>
