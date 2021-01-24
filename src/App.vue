<template>
  <div id="app">
    <Navbar @themeChange="handleThemeChange" />
    <router-view class="router-view__container" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data: () => {
    return {
      isDark: false
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
    }
  }
};
</script>

<style lang="scss">
.router-view__container {
  width: 100vw;
  padding-left: 6rem;

  @media only screen and (max-width: $md) {
    padding-left: 0;
    padding-top: 4rem;
  }
}

#app {
  @extend .work-sans;
}
</style>
