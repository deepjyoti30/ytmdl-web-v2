<template>
  <div class="playlist--select__container">
    <div class="flex items-center mr-4 mb-2">
      <input
        type="checkbox"
        id="A3-yes"
        name="A3-confirmation"
        value="yes"
        class="appearance-none absolute h-8 w-8"
      />
      <div
        class="bg-white border-2 rounded-md border-blue-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
      >
        <svg
          class="fill-current hidden w-3 h-3 text-white pointer-events-none"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(-9 -11)" fill="#fff" fill-rule="nonzero">
              <path
                d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
              />
            </g>
          </g>
        </svg>
      </div>
      <label for="A3-yes" class="select-none ml-1 roboto text-gray-600">{{
        getText
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistSelect",
  props: {
    text: {
      type: String,
      default: "Select all songs"
    }
  },
  computed: {
    getText() {
      return this.text;
    }
  }
};
</script>

<style lang="scss" scoped>
.playlist--select__container {
  input:checked + div {
    @apply border-blue-500;
    @apply bg-blue-500;
  }

  input:checked + div svg {
    @apply block;
  }
}
</style>
