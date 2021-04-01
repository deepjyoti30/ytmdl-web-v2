<template>
  <div id="app">
    <welcome ref="welcome" />
    <ad-update ref="adUpdate" />
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
import Welcome from "@/components/Welcome";

import defaultSettings from "@/static/settings.js";
import AdUpdate from "./components/AdUpdate.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Welcome,
    AdUpdate
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
      var savedSettings = localStorage.getItem("settings");

      if (savedSettings == null) this.saveSettings();

      savedSettings = JSON.parse(savedSettings);
      savedSettings["theme"] = theme;
      localStorage.setItem("settings", JSON.stringify(savedSettings));
    },
    readAndApplyTheme: function() {
      /**
       * Read the saved theme from the localStorage and apply it
       * accordingly.
       */
      var savedSettings = JSON.parse(localStorage.getItem("settings"));

      if (savedSettings == null || !("theme" in savedSettings)) return;

      this.handleThemeChange(savedSettings.theme);
    },
    saveSettings: function() {
      /**
       * Check if settings is stored in the localStorage, if not then create the
       * settings.
       */
      const settings = localStorage.getItem("settings");

      if (settings != null) return;

      // Store the default settings

      var newSettings = {};
      defaultSettings.forEach(el => {
        newSettings[el.name] = el.default;
      });

      localStorage.setItem("settings", JSON.stringify(newSettings));
    },
    showWelcome: function() {
      /**
       * Check if this the first time user is visiting the version
       * 2 of the app and accordingly show the welcome component.
       */
      const showWelcome = localStorage.getItem("showWelcome");

      // If it is present in the storage, we need to skip it.
      if (showWelcome != null) return;

      this.$refs.welcome.$refs.modal.showModal();

      // Update the settings
      localStorage.setItem("showWelcome", JSON.stringify({ value: true }));
    },
    showAdUpdate() {
      /**
       * Show the user the update that ads are now shown on the webapp.
       */
      const showWelcome = localStorage.getItem("showAdUpdate");

      // If it is present in the storage, we need to skip it.
      if (showWelcome != null) return;

      this.$refs.adUpdate.$refs.modal.showModal();

      // Update the settings
      localStorage.setItem("showAdUpdate", JSON.stringify({ value: true }));
    }
  },
  computed: {
    getIsDark() {
      return this.isDark;
    }
  },
  mounted() {
    this.saveSettings();
    this.readAndApplyTheme();
    this.showWelcome();
    this.showAdUpdate();
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
  }

  .fade-in-enter-to {
    opacity: 1;
  }

  .fade-in-enter-active {
    transition: opacity 500ms ease;
  }
}
</style>
