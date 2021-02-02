<template>
  <div class="settings__container">
    <div
      class="settings--content lg:w-3/5 md:w-4/5 w-5/5 md:px-0 px-4 mr-auto ml-auto mt-16 mb-24"
    >
      <div class="settings--text">
        <h1 class="font-semibold text-4xl dark:text-white">Settings</h1>
      </div>
      <div class="settings--content mt-12">
        <SettingEach
          v-for="(el, id) in getSettings"
          :key="id"
          :settingDetails="el"
          :currentSetting="getCurrentSetting(el)"
          @change="updateSetting"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SettingEach from "@/components/SettingEach";
import defaultSettings from "@/static/settings.js";
import { settings } from "@/components/mixins/settings";

export default {
  name: "Settings",
  components: {
    SettingEach
  },
  mixins: [settings],
  data: () => {
    return {
      savedSettings: null
    };
  },
  methods: {
    addNewSettings: function() {
      /**
       * Once the component is mounted, the saved settings object
       * is updated since each setting is being fetched.
       *
       * We just need to save it to the localStorage once.
       */
      // Check if new settings were added
      const savedKeys = Object.keys(this.savedSettings);
      const defaultKeys = defaultSettings.map(setting => setting.name);

      const difference = defaultKeys.filter(
        setting => !savedKeys.includes(setting)
      );

      if (!difference) return;

      // Else add the new key and it's value from the default settings
      difference.forEach(setting => {
        this.setSetting(
          setting,
          defaultSettings[defaultKeys.indexOf(setting)]["default"]
        );
      });
    },
    updateSetting: function(changes) {
      /**
       * Update the setting based on the passed values.
       *
       * The changes variable will be an object that will contain
       * name and newValue. The name can be used to update the
       * savedSettings as the key.
       */
      this.savedSettings[changes.name] = changes.newValue;
      this.saveSettings();
    },
    saveSettings: function() {
      // Save the settings to the localStorage
      localStorage.setItem("settings", JSON.stringify(this.savedSettings));
    },
    getCurrentSetting: function(el) {
      /**
       * Get the current setting of the passed element. We need to see if it
       * is present in the savedSettings, if it is not present, we need to
       * add it to that and return the default value.
       */
      if (!this.savedSettings) return null;

      if (!(el.name in this.savedSettings)) return el.default;

      return this.savedSettings[el.name];
    },
    readSettings: function() {
      /**
       * Read the settings from the localStorage.
       *
       * If the setting read is null, try to read it again in 2 seconds.
       */
      const readSettings = JSON.parse(localStorage.getItem("settings"));

      if (!readSettings) setTimeout(this.readSettings, 200);
      else this.savedSettings = readSettings;
    }
  },
  computed: {
    getSettings() {
      return defaultSettings;
    }
  },
  mounted() {
    this.readSettings();
    this.addNewSettings();
  }
};
</script>
