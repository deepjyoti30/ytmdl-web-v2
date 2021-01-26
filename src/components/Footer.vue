<template>
  <div class="footer__container w-full lg:pl-24 pl-0">
    <div class="footer__content w-4/5 mr-auto ml-auto">
      <div
        class="footer--text text-center border-b-2 p-8 text-2xl font-medium italic"
      >
        This project lives on donations. Consider <a href="">donating</a> to
        help us sustain our activites or <a href="">become a backer</a>.
      </div>
      <div class="footer--extra py-4 text-gray-500 flex justify-between">
        <div class="copyright--text">
          © 2020-Present Ytmdl. All rights reserved.
        </div>
        <div class="social--content">
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
