<template>
  <div
    class="error__container md:w-2/5 w-11/12 mr-auto ml-auto h-screen flex items-center justify-center"
  >
    <!--Show the error to the user and indicate what the possible reason might be-->
    <div class="wrapper">
      <div class="heading text-gray-600 dark:text-gray-400">
        <h1 class="text-5xl text-red-500 dark:text-red-400 font-bold">
          Damn it!!
        </h1>
        <p class="mt-4">
          There was an error with the app. This is probably something we forgot
          to fix. We're sorry about that! In the meantime, try refreshing the
          page now or come back a bit later!
        </p>
      </div>
      <div class="information mt-6 text-gray-700">
        <p>
          If this error occurred a few times, you can consider
          <a
            href="https://github.com/deepjyoti30/ytmdl-web-v2/issues/new?assignees=&labels=bug&template=bug_report.md&title="
            target="_blank"
            ref="noopener norefferer"
            class="underline"
            >reporting this to us</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>
