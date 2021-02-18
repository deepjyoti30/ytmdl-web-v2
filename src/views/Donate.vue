<template>
  <div class="donate__container">
    <div class="donate--content md:w-3/5 w-11/12 mr-auto ml-auto py-12">
      <div class="details">
        <h3 class="text-3xl font-bold dark:text-white">Donate</h3>
        <p class="my-8 text-lg text-gray-700 dark:text-gray-300">
          This project lives on donations. We're not monetizing out of your data
          or ads in any way. If you would like to support the development of
          this project please consider one of the following options. This help
          will go a long way in order to keep the project alive.
        </p>
        <p class="text-lg text-gray-700 dark:text-gray-300">
          You can also check the GitHub repo and star it!
        </p>
      </div>
      <show-support />
    </div>
  </div>
</template>

<script>
import ShowSupport from "@/components/ShowSupport";

export default {
  name: "Donate",
  components: {
    ShowSupport
  }
};
</script>
