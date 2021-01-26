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
        class="footer--extra py-4 text-gray-500 text-center lg:flex lg:justify-between items-center block"
      >
        <div class="copyright--text lg:text-left">
          <span>© 2020-Present Ytmdl. All rights reserved.</span>
          <span><a href="">Terms of Service</a></span>
        </div>
        <div class="social--content lg:mt-0 mt-6">
          <ul>
            <li>
              <a href="https://github.com/deepjyoti30/ytmdl">
                <font-awesome-icon :icon="['fab', 'github']" size="lg" />
              </a>
            </li>
            <li>
              <a href="">
                <font-awesome-icon
                  :icon="['fab', 'telegram-plane']"
                  size="lg"
                />
              </a>
            </li>
            <li>
              <a href="mailto:hello@deepjyoti30.dev">
                <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {}
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
            @apply mr-6;
          }

          li:last-child {
            @apply mr-0;
          }
        }
      }

      .copyright--text {
        span {
          @apply block;
          @apply mt-2;

          &:first-child {
            @apply mt-0;
          }
        }
      }
    }
  }
}
</style>
