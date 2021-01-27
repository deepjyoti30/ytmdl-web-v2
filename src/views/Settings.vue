<template>
  <div class="settings__container">
    <div class="settings--content w-3/5 mr-auto ml-auto mt-16">
      <div class="settings--text">
        <h1 class="font-semibold text-4xl">Settings</h1>
      </div>
      <div class="settings--content mt-12">
        <SettingEach />
      </div>
    </div>
  </div>
</template>

<script>
import SettingEach from "@/components/SettingEach";

export default {
  name: "Settings",
  components: {
    SettingEach
  }
};
</script>
