<template>
  <div class="manual--each__container py-4">
    <h3 class="text-xl font-medium">
      {{ getName }}
      <span
        v-if="getIsRequired"
        class="required px-2 rounded-xl py-0.5 text-sm font-normal ml-5"
        >Required</span
      >
    </h3>
    <h5 class="mt-1 text-gray-600">
      {{ getText }}
    </h5>
    <input
      class="border mt-3 px-4 py-2 rounded-md text-lg md:w-3/5 w-11/12"
      :placeholder="getExample"
    />
  </div>
</template>

<script>
export default {
  name: "ManualEach",
  props: {
    option: {
      type: Object
    }
  },
  computed: {
    getName() {
      return this.option.name;
    },
    getText() {
      return this.option.text;
    },
    getIsRequired() {
      return !this.option.skippingAllowed;
    },
    getExample() {
      return this.option.example;
    }
  }
};
</script>

<style lang="scss" scoped>
.manual--each__container {
  h3 {
    @extend .dm-sans;

    .required {
      background: $yellow;
    }
  }

  h5 {
    @extend .dm-sans;
  }

  input {
    border: 3px solid $lightblue;
    outline: none;
    transition: 0.2s ease;

    &:focus {
      transition: 0.2s ease;
      border-color: $darkblue;
      border-width: 3px;
    }
  }
}
</style>
