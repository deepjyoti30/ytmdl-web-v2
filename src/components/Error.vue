<template>
  <div
    class="error__container md:w-2/5 w-11/12 mr-auto ml-auto h-screen flex items-center justify-center"
  >
    <!--Show the error to the user and indicate what the possible reason might be-->
    <div class="heading">
      <h1 class="text-5xl text-red-500 font-bold">Damn it!!</h1>
      <p class="my-8 text-gray-600">
        There was an error with the app. This is probably something we forgot to
        fix. We're sorry about that!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>
