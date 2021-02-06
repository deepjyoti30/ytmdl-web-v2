<template>
  <div class="manual--meta__container my-12">
    <div class="manual--meta w-3/5 mr-auto ml-auto py-6">
      <h2 class="text-3xl font-bold dark:text-white">
        Enter metadata manually
      </h2>
      <p class="my-4 text-gray-700 dark:text-gray-400">
        Modify the metadata according to your liking.
      </p>
      <ManualEach />
    </div>
  </div>
</template>

<script>
import ManualEach from "@/components/ManualMetaEach";

export default {
  name: "ManualMeta",
  props: {
    videoId: {
      type: String
    }
  },
  components: {
    ManualEach
  }
};
</script>
