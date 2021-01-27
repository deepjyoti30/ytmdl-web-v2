<template>
  <div class="setting--each__container">
    <div class="setting--each py-4 my-2 flex justify-between">
      <div class="setting--text">
        <h2 class="text-2xl font-medium text-gray-600">Format</h2>
      </div>
      <div class="setting--handler">
        <button type="button" class="px-4 py-2 rounded-md">mp3</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingEach"
};
</script>

<style lang="scss" scoped>
.setting--each__container {
  .setting--handler {
    button {
      background: $yellow;
    }
  }
}
</style>
