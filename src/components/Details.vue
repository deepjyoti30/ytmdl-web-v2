<template>
  <div class="details__container">
    <div class="details--content w-5/6 mr-auto ml-auto my-24 py-2">
      <div
        class="icon--content w-4/6 mr-auto ml-auto py-6 flex justify-center items-center"
      >
        <div class="icon--each mr-auto ml-auto">
          <MusicIcon size="4x" class="icon" />
        </div>
        <div class="line--each"></div>
        <div class="icon--each mr-auto ml-auto">
          <PackageIcon size="4x" class="icon" />
        </div>
        <div class="line--each"></div>
        <div class="icon--each mr-auto ml-auto">
          <DownloadCloudIcon size="4x" class="icon" />
        </div>
      </div>
      <div class="text--content flex justify-between py-6 text-center">
        <div class="details--each">
          <h3 class="text-3xl font-semibold">Select the Song</h3>
          <p class="mt-4">
            Select the song you want to download. Either search the song or
            enter the YouTube URL of the song.
          </p>
        </div>
        <div class="details--each">
          <h3 class="text-3xl font-semibold">Select the metadata</h3>
          <p class="mt-4">
            Search for the song in the various metadata sources and select one
            out of the results OR enter the metadata manually.
          </p>
        </div>
        <div class="details--each">
          <h3 class="text-3xl font-semibold">Download the song</h3>
          <p class="mt-4">
            After the song and the metadata is selected, just download the high
            quality song and enjoy it.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MusicIcon, PackageIcon, DownloadCloudIcon } from "vue-feather-icons";

export default {
  name: "Details",
  components: {
    MusicIcon,
    PackageIcon,
    DownloadCloudIcon
  }
};
</script>

<style lang="scss" scoped>
.details__container {
  .details--content {
    .text--content {
      .details--each {
        h3 {
          color: $green;
        }

        p {
          font-size: 1em;
        }

        @apply mx-2;
      }
    }

    .icon--content {
      .icon--each {
        @apply p-4;
        border-radius: 100%;
        background: $yellow;
        color: $lightgreen;
      }

      .line--each {
        @apply mx-6;

        flex-grow: 1;
        height: 2px;
        border: 1px solid $yellow;
      }
    }
  }
}
</style>
