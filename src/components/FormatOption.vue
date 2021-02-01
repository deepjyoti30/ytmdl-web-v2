<template>
  <div class="format--option__container">
    <div
      class="format--option p-8 my-8 rounded-md max-w-2xl flex items-center md:justify-start justify-between"
    >
      <div class="format--name md:w-1/4 w-1/2">
        <h3 class="md:text-4xl text-2xl font-semibold uppercase">
          {{ getName }}
        </h3>
      </div>
      <div class="format--details md:w-auto w-4/5">
        <p class="md:text-lg text-base">
          {{ getDesc }}
        </p>
      </div>
      <div v-if="getRecommended" class="recommended--icon border uppercase">
        recommended
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormatOption",
  props: {
    name: {
      type: String
    },
    description: {
      type: String
    },
    recommended: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getName() {
      return this.name;
    },
    getDesc() {
      return this.description;
    },
    getRecommended() {
      return this.recommended;
    }
  }
};
</script>

<style lang="scss" scoped>
.format--option__container {
  .format--option {
    background: $lightcyan;
    color: $mediumblue;
    position: relative;

    .recommended--icon {
      position: absolute;
      right: 10px;
      top: -10px;
    }
  }
}
</style>
