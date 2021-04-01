<template>
  <div class="welcome__container">
    <modal ref="modal" modalId="adupdate" heading="Update" crossBtn>
      <div class="header--content text-center">
        <h3 class="md:text-3xl text-xl font-semibold dark:text-white">
          I'm sorry, but I had to!
        </h3>
        <p
          class="md:mt-6 mt-8 max-w-2xl md:text-base text-sm mr-auto ml-auto text-gray-600 dark:text-gray-400"
        >
          As of <b>1/04/2021</b>, this app will show ads in certain places in
          order to get some revenue to sustain the development and the server
          costs. These ads, in no way, will obstruct the functionality of the
          app.
        </p>
        <p class="read--more text-sm mt-4 text-center">
          <a
            href="https://blog.deepjyoti30.dev/ytmdl-web-ads"
            target="_blank"
            rel="noopener"
            class="underline text-gray-500"
            >You can read more about it here</a
          >
        </p>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "AdUpdate",
  components: {
    Modal
  }
};
</script>
