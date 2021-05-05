<template>
  <div class="not--found__container h-screen flex justify-center items-center">
    <div class="wrapper md:w-2/5 w-11/12 mr-auto ml-auto">
      <h1 class="text-5xl text-red-500 dark:text-red-400 font-bold">Oops!</h1>
      <p class="md:text-xl text-base text-gray-600 dark:text-gray-400 mt-6">
        Seems like you're nowhere. How did you even end up here?!
      </p>
      <div class="useful--links mt-6 text-gray-600 dark:text-gray-400">
        <div class="links flex mt-2 roboto">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/donate">Donate</router-link>
          <a
            href="https://github.com/deepjyoti30/ytmdl-web-v2"
            ref="nopener noreferrer"
            >GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
.not--found__container {
  .useful--links {
    .links {
      a {
        @apply mr-6;
        @apply border-b;
        @apply border-darkgreen-300;

        &:last-child {
          @apply mr-0;
        }
      }
    }
  }
}
</style>
