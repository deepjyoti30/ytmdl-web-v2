<template>
  <div class="details__container md:mt-40">
    <div
      class="details--content md:w-5/6 w-6/6 px-4 md:px-0 mr-auto ml-auto md:mt-28 mt-24 md:mb-16 py-4 md:block flex justify-between"
    >
      <div
        class="icon--content md:w-4/6 w-1/6 md:mr-auto md:ml-auto py-6 md:flex block justify-center items-center"
      >
        <div class="icon--each mr-auto ml-auto w-24">
          <MusicIcon size="4x" class="icon" />
        </div>
        <div class="line--each">
          <div
            class="line--icon bg-white dark:bg-darklow w-8 mr-auto ml-auto"
            align="center"
          >
            <ZapIcon class="icon" />
          </div>
        </div>
        <div class="icon--each mr-auto ml-auto w-24">
          <PackageIcon size="4x" class="icon" />
        </div>
        <div class="line--each">
          <div
            class="line--icon bg-white dark:bg-darklow w-8 mr-auto ml-auto"
            align="center"
          >
            <ShieldIcon class="icon" />
          </div>
        </div>
        <div class="icon--each mr-auto ml-auto w-24">
          <DownloadCloudIcon size="4x" class="icon" />
        </div>
      </div>
      <div
        class="text--content md:w-11/12 pl-8 md:pl-0 md:mr-auto md:ml-auto md:flex md:justify-around md:py-6 md:text-center mt-8"
      >
        <div class="details--each">
          <h3 class="md:text-3xl text-2xl font-semibold">Select the Song</h3>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Select the song you want to download. Either search the song or
            enter the YouTube URL of the song.
          </p>
        </div>
        <div class="details--each">
          <h3 class="md:text-3xl text-2xl font-semibold">
            Select the metadata
          </h3>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Select the metadata that you want to be embedded in the song, either
            manually or by searching.
          </p>
        </div>
        <div class="details--each">
          <h3 class="md:text-3xl text-2xl font-semibold">Download the song</h3>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            After the song and the metadata is selected, just download the high
            quality song and enjoy it.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  MusicIcon,
  PackageIcon,
  DownloadCloudIcon,
  ZapIcon,
  ShieldIcon
} from "vue-feather-icons";

export default {
  name: "Details",
  components: {
    MusicIcon,
    PackageIcon,
    DownloadCloudIcon,
    ZapIcon,
    ShieldIcon
  }
};
</script>

<style lang="scss" scoped>
.details__container {
  .details--content {
    .text--content {
      .details--each {
        @apply max-w-xs;

        h3 {
          @apply text-gray-700;
        }

        p {
          @extend .dm-sans;

          font-size: 1em;
          line-height: 1.5em;
        }

        @media only screen and (max-width: $md) {
          height: 200px;
        }
      }
    }

    .icon--content {
      .icon--each {
        @apply p-4;
        border-radius: 100%;
        @apply bg-red-200;
        @apply text-darkblue;

        @media only screen and (max-width: $md) {
          @apply w-12;

          .icon {
            width: 2em;
            height: 2em;
          }

          @apply p-2;
        }
      }

      .line--each {
        @apply mx-6;

        flex-grow: 1;
        height: 2px;
        border-width: 1px;
        border-style: solid;

        @apply bg-red-400;
        @apply border-red-400;

        z-index: 2;

        .line--icon {
          z-index: 3;
          @apply text-red-400;

          @media only screen and (min-width: $md) {
            transform: translateY(-12px);
          }

          @media only screen and (max-width: $md) {
            margin-top: 52.5px;
            transform: translateX(-15px);
          }

          .icon {
            fill: white;
          }
        }

        @media only screen and (max-width: $md) {
          @apply mr-auto ml-auto my-6;

          height: 140px;
          width: 2px;
        }
      }
    }
  }
}
</style>
