<template>
  <div class="welcome--feature__container">
    <div class="welcome--feature py-4 rounded-xl border">
      <div class="icon--wrapper" align="center">
        <slot></slot>
      </div>
      <h5
        v-if="isText"
        class="text-md capitalize font-semibold mt-6 text-center"
      >
        {{ getText }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeFeature",
  props: {
    text: {
      type: String,
      default: null
    }
  },
  computed: {
    isText() {
      return Boolean(this.text);
    },
    getText() {
      return this.text;
    }
  }
};
</script>

<style lang="scss" scoped>
.welcome--feature__container {
  width: 200px;

  .icon--wrapper {
    svg {
      width: 2.5em;
      height: 2.5em;
    }
  }
}
</style>
