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
      />
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
  computed: {
    getManualOptions() {
      return manualOptions;
    }
  }
};
</script>