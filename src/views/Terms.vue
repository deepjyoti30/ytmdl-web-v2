<template>
  <div class="about__container">
    <StaticContent filePath="../static/terms.md" />
  </div>
</template>

<script>
import StaticContent from "@/components/StaticContent";

export default {
  name: "Terms",
  components: {
    StaticContent
  }
};
</script>
