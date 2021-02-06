<template>
  <div class="manual--meta__container my-12">
    <div class="manual--meta md:w-3/5 w-11/12 mr-auto ml-auto py-6">
      <h2 class="text-3xl font-bold dark:text-white">
        Enter metadata manually
      </h2>
      <p class="mt-4 mb-8 text-gray-700 dark:text-gray-400">
        Modify the metadata according to your liking.
      </p>
      <ManualEach
        v-for="(option, id) in getManualOptions"
        :key="id"
        :option="option"
        :index="id"
      />
      <div class="submit--btn text-center mt-14">
        <button
          type="button"
          class="py-4 px-12 rounded-md md:text-xl font-semibold strip-button"
        >
          Set manual metadata
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ManualEach from "@/components/ManualMetaEach";
import manualOptions from "@/static/manual.js";

export default {
  name: "ManualMeta",
  props: {
    videoId: {
      type: String
    }
  },
  components: {
    ManualEach
  },
  data() {
    return {
      enteredData: {}
    };
  },
  computed: {
    getManualOptions() {
      return manualOptions;
    }
  },
  created() {
    // Update the enteredData object with proper keys
    manualOptions.forEach(el => {
      this.enteredData[el.attrName] = "";
    });
  }
};
</script>

<style lang="scss" scoped>
.submit--btn {
  $color: lighten($mediumblue, 5);

  button {
    background: $color;
    color: white;
    transition: 0.2s ease;

    &:hover {
      transition: 0.2s ease;
      background: darken($color, 5);
    }
  }
}
</style>
