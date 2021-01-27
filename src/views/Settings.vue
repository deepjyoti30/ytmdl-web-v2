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
  computed: {
    getSettings() {
      return defaultSettings;
    }
  }
};
</script>
