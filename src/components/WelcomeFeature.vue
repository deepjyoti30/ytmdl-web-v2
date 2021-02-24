<template>
  <div class="welcome--feature__container">
    <div class="welcome--feature py-4 rounded-xl">
      <div class="icon--wrapper" align="center">
        <div
          class="icon--wrapper--content p-4 rounded-full bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-100 inline-block"
        >
          <slot></slot>
        </div>
      </div>
      <h5
        v-if="isText"
        class="md:text-md text-sm capitalize font-medium mt-2 text-center dark:text-white"
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
  width: 150px;
  @apply mx-1;

  @media only screen and (max-width: $md) {
    width: 30%;
  }

  .icon--wrapper {
    svg {
      width: 2.5em;
      height: 2.5em;

      @media only screen and (max-width: $md) {
        width: 2em;
        height: 2em;
      }
    }
  }
}
</style>
