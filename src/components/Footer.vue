<template>
  <div class="footer__container w-full md:pl-24 pl-0 mt-12 mb-4">
    <div class="footer__content lg:w-4/5 md:px-0 px-2 w-full mr-auto ml-auto">
      <div
        class="footer--text text-center px-8 py-2 md:text-2xl text-xl font-medium italic"
      >
        We're Open Source!
        <a href="https://github.com/deepjyoti30/ytmdl-web-v2"
          >Star the project on GitHub</a
        >.
      </div>
      <div class="social--content py-6 text-gray-600" align="center">
        <ul class="inline-flex">
          <li>
            <a
              href="https://github.com/deepjyoti30/ytmdl-web-v2"
              title="GitHub"
            >
              <github-icon class="inline icon-up" />
            </a>
          </li>
          <li>
            <a href="https://t.me/ytmdl" title="Telegram">
              <send-icon class="inline icon-up" />
            </a>
          </li>
          <li>
            <a href="mailto:hello@deepjyoti30.dev" title="Mail">
              <mail-icon class="inline icon-up" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/DeepBarman30" title="Twitter">
              <twitter-icon class="inline icon-up" />
            </a>
          </li>
        </ul>
      </div>
      <div
        class="footer--extra py-2 text-gray-500 text-center text-sm border-t border-gray-100 roboto"
      >
        <div class="copyright--text lg:text-left md:flex md:justify-between">
          <div>© 2020-Present Ytmdl. All rights reserved.</div>
          <div class="lg:inline block md:mt-0 mt-2 md:ml-2 ml-0">
            <a href="https://ytmdl.deepjyoti30.dev/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon, SendIcon, GithubIcon, TwitterIcon } from "vue-feather-icons";

export default {
  name: "Footer",
  components: { MailIcon, SendIcon, GithubIcon, TwitterIcon }
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

    .social--content {
      ul {
        li {
          @apply inline-block;
          @apply mr-6;

          .icon-up {
            $size: 1.3rem;

            width: $size;
            height: $size;
          }
        }

        li:last-child {
          @apply mr-0;
        }
      }
    }
  }
}
</style>
