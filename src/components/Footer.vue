<template>
  <div class="footer__container w-full md:pl-24 pl-0 mt-12 mb-4">
    <div class="footer__content lg:w-4/5 md:px-0 px-2 w-full mr-auto ml-auto">
      <div
        class="footer--text text-center border-b-2 p-8 md:text-2xl text-xl font-medium italic"
      >
        This project lives on donations. Consider
        <a href="https://paypal.me/deepjyoti30">donating</a> to help us sustain
        our activites or
        <a href="https://opencollective.com/ytmdl#backer">become a backer</a>.
      </div>
      <div
        class="footer--extra py-4 text-gray-500 text-center md:flex md:justify-between items-center block"
      >
        <div class="copyright--text lg:text-left">
          <span>© 2020-Present Ytmdl. All rights reserved.</span>
          <span class="lg:inline block md:mt-0 mt-2 md:ml-2 ml-0"
            ><a href="https://ytmdl.deepjyoti30.dev/terms"
              >Terms of Service</a
            ></span
          >
        </div>
        <div class="social--content md:mt-0 mt-6">
          <ul>
            <li>
              <a href="https://github.com/deepjyoti30/ytmdl" title="GitHub">
                <font-awesome-icon :icon="['fab', 'github']" size="lg" />
              </a>
            </li>
            <li>
              <a href="https://t.me/ytmdl" title="Telegram">
                <font-awesome-icon
                  :icon="['fab', 'telegram-plane']"
                  size="lg"
                />
              </a>
            </li>
            <li>
              <a href="mailto:hello@deepjyoti30.dev" title="Mail">
                <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
              </a>
            </li>
            <li>
              <a href="https://www.patreon.com/deepjyoti30" title="Patreon">
                <font-awesome-icon :icon="['fab', 'patreon']" size="lg" />
              </a>
            </li>
            <li>
              <a href="https://paypal.me/deepjyoti30" title="Paypal">
                <font-awesome-icon :icon="['fab', 'paypal']" size="lg" />
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
    }
  }
}
</style>
