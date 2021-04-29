<template>
  <div class="playlist--head__container my-12">
    <div class="md:flex">
      <div class="pl--cover">
        <img
          src="https://generative-placeholders.glitch.me/image?width=300&height=300&style=123&colors=74"
          loading="lazy"
          alt="Playlist Cover"
          class="rounded-md shadow-2xl md:w-full w-3/4 mr-auto ml-auto"
        />
      </div>
      <div
        class="pl--details md:ml-12 md:my-3 mb-3 mt-12 flex flex-col justify-between"
      >
        <div class="md:text-left text-center">
          <div
            class="pl--title md:text-4xl text-3xl text-gray-700 font-medium dm-sans dark:text-gray-200"
          >
            My Super Mix
          </div>
          <div
            class="pl--songs text-xl mt-6 text-gray-500 font-medium dark:text-gray-400"
          >
            <span
              class="text-gray-500 dark:text-gray-300 font-semibold md:text-4xl text-3xl"
              >15</span
            >
            songs
          </div>
          <div
            class="pl--details mt-3 text-gray-500 dark:text-gray-400 roboto md:max-w-md text-left md:block hidden"
          >
            Just a bit explaining about the cool playlist that I have made that
            does not have any resemblance to any other playlist whatsoever.
          </div>
        </div>
        <div class="pl--cta md:mt-0 mt-8 md:text-left text-center">
          <a
            href=""
            class="py-2 px-6 bg-red-500 text-white rounded-md font-medium duration-150 ease-in hover:bg-red-600 inline-flex"
            target="_blank"
            rel="noopener noreferrer"
            title="Preview the playlist on YouTube"
          >
            Preview
            <span class="external--icon ml-2 mt-1">
              <ExternalLinkIcon size="1x" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "PlaylistHead",
  components: {
    ExternalLinkIcon
  },
  props: {}
};
</script>
