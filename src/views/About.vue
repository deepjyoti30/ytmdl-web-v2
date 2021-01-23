<template>
  <div class="about__container">
    <StaticContent filePath="../static/about.md" />
  </div>
</template>

<script>
import StaticContent from "@/components/StaticContent";

export default {
  name: "About",
  components: {
    StaticContent
  }
};
</script>
