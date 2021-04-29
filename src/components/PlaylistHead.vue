<template>
  <div class="playlist--head__container my-12">
    <div class="flex">
      <div class="pl--cover">
        <img
          src="https://generative-placeholders.glitch.me/image?width=300&height=300&style=123&colors=74"
          loading="lazy"
          alt="Playlist Cover"
          class="rounded-md shadow-2xl"
        />
      </div>
      <div class="pl--details ml-12 my-3 flex flex-col justify-between">
        <div>
          <div
            class="pl--title text-4xl text-gray-700 font-medium dm-sans dark:text-gray-200"
          >
            My Super Mix
          </div>
          <div
            class="pl--songs text-xl mt-6 text-gray-500 font-medium dark:text-gray-400"
          >
            <span
              class="text-gray-500 dark:text-gray-300 font-semibold text-4xl"
              >15</span
            >
            songs
          </div>
          <div
            class="pl--details mt-3 text-gray-500 dark:text-gray-400 roboto max-w-md"
          >
            Just a bit explaining about the cool playlist that I have made that
            does not have any resemblance to any other playlist whatsoever.
          </div>
        </div>
        <div class="pl--cta">
          <a
            href=""
            class="py-2 px-4 bg-red-500 text-white rounded-md font-medium duration-150 ease-in hover:bg-red-600 inline-flex"
            target="_blank"
            rel="noopener noreferrer"
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
  }
};
</script>
