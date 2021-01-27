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
          @change="updateSetting"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SettingEach from "@/components/SettingEach";
import defaultSettings from "@/static/settings.js";

export default {
  name: "Settings",
  components: {
    SettingEach
  },
  data: () => {
    return {
      savedSettings: JSON.parse(localStorage.getItem("settings"))
    };
  },
  methods: {
    updateSetting: function(changes) {
      /**
       * Update the setting based on the passed values.
       *
       * The changes variable will be an object that will contain
       * name and newValue. The name can be used to update the
       * savedSettings as the key.
       */
      this.savedSettings[changes.name] = changes.newValue;
    }
  },
  computed: {
    getSettings() {
      return defaultSettings;
    }
  },
  beforeRouteLeave(to, from, next) {
    localStorage.setItem("settings", JSON.stringify(this.savedSettings));
    next();
  }
};
</script>
