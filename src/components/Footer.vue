<template>
  <div class="footer__container w-full lg:pl-24 pl-0">
    <div class="footer__content lg:w-4/5 lg:px-0 px-2 w-full mr-auto ml-auto">
      <div
        class="footer--text text-center border-b-2 p-8 lg:text-2xl text-xl font-medium italic"
      >
        This project lives on donations. Consider <a href="">donating</a> to
        help us sustain our activites or <a href="">become a backer</a>.
      </div>
      <div
        class="footer--extra py-4 text-gray-500 lg:flex block text-center justify-between"
      >
        <div class="copyright--text">
          © 2020-Present Ytmdl. All rights reserved.
        </div>
        <div class="social--content lg:mt-0 mt-2">
          <ul>
            <li><a href="https://github.com/deepjyoti30/ytmdl">GitHub</a></li>
            <li><a href="https://ytmdl.deepjyoti30.dev/about">About</a></li>
            <li>
              <a href="https://ytmdl.deepjyoti30.dev/terms">Terms of Use</a>
            </li>
            <li>
              <a href="">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer__container {
  .footer__content {
    .footer--text {
      a {
        color: $darkgreen;
        text-decoration: underline;
      }
    }

    .footer--extra {
      @extend .roboto;

      .social--content {
        ul {
          li {
            @apply inline-block;
            @apply mr-4;
          }

          li:last-child {
            @apply mr-0;
          }
        }
      }
    }
  }
}
</style>
