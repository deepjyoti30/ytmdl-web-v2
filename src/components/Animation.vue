<template>
  <div
    class="animation__container py-56 md:w-2/5 w-full mr-auto ml-auto flex justify-center relative items-center"
  >
    <div class="loadingWrap">
      <svg class="loading mr-auto ml-auto" viewBox="0 0 84.6 84.6">
        <defs>
          <filter id="stickyFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="filter"
            />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
          <linearGradient
            id="gradient"
            class="gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="40%"
            gradientTransform="rotate(45)"
          >
            <stop offset="0%" />
            <stop offset="100%" />
          </linearGradient>
        </defs>
        <clipPath id="clip">
          <circle cx="42.3" cy="42.3" r="41.6" />
        </clipPath>
        <g clip-path="url(#clip)">
          <path class="background" d="M0 0h84.6v84.6H0z" />
          <g class="exhaust">
            <path
              class="gradientBox"
              d="M2.37244 65.5981l28.84968-28.84968 16.54614 16.54614-28.84968 28.84968z"
            />
            <path
              class="gradientBox"
              d="M6.35189 69.55189l28.84968-28.84968 8.34378 8.34378-28.84968 28.84968z"
            />
            <g class="filteredGroup">
              <path class="line1 line lineThick" d="M47.7 49.6L13.4 83.9" />
              <path class="line2 line lineThick" d="M42.3 42.3L8 76.6" />
              <path class="line3 line lineThick" d="M33.5 38.5L-.8 72.8" />

              <path class="line4 line lineDots" d="M45 45.82L10.7 80.12" />
              <path class="line5 line lineDots" d="M38.16 40.06L3.86 74.36" />

              <path class="line6 line lineStatic" d="M39.46 41.15L18.91 61.7" />
              <path
                class="line7 line lineStatic"
                d="M43.57 43.77L23.02 64.32"
              />
            </g>
          </g>
          <g class="rotate">
            <g class="rumble">
              <path
                class="arrow"
                d="M60.8 27.2c.6-2.1-1.3-4-3.4-3.4L19.5 35.3c-2.2.7-2.6 3.6-.8 4.9l15.8 7.6c1.1.5 2 1.4 2.5 2.6L44.4 66c1.3 1.9 4.2 1.4 4.9-.8l11.5-38z"
              />
            </g>
          </g>
        </g>
      </svg>
      <div class="label text-gray-500 dark:text-gray-400">{{ getText }}</div>
      <div
        class="license text-gray-400 dark:text-gray-700 absolute bottom-0 md:right-0 text-center"
      >
        Animation by <a href="https://codepen.io/coopergoeke">Cooper Goeke</a>.
        <a href="https://codepen.io/coopergoeke/details/abdogVj">License</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Animation",
  props: {
    text: {
      type: String,
      default: "Getting the song ready for you..."
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
$launchLength: 4s;

.animation__container {
  height: 80vh;
}

@keyframes drawThick {
  0% {
    stroke-dashoffset: 180;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes drawDots {
  0% {
    stroke-dashoffset: 60;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes drawStatic {
  0% {
    stroke-dashoffset: 8;
  }
  30% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 8;
  }
}
@keyframes rumble {
  0% {
    transform: translate(-1px, -1px);
  }
  10% {
    transform: translate(0, 0);
  }
  15% {
    transform: translate(-1px, -1px);
  }
  35% {
    transform: translate(1px, 1px);
  }
  45% {
    transform: translate(-1px, -1px);
  }
  55% {
    transform: translate(1px, 1px);
  }
  65% {
    transform: translate(0, 0);
  }
  80% {
    transform: translate(1px, 1px);
  }
  100% {
    transform: translate(-1px, -1px);
  }
}
@keyframes rotate3d {
  0% {
    transform: rotate3d(1, -1, 0, 0);
  }
  30% {
    transform: rotate3d(1, -1, 0, 0deg);
  }
  50% {
    transform: rotate3d(1, -1, 0, 60deg);
  }
  100% {
    transform: rotate3d(1, -1, 0, 0);
  }
}
@keyframes launch {
  5% {
    transform: translate(0, 0);
  }
  8% {
    transform: translate(2px, -2px);
  }
  30% {
    transform: translate(-60px, 60px);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes slideIn {
  0% {
    transform: translate(-60px, 60px);
  }
  35% {
    transform: translate(-60px, 60px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.loadingWrap {
  text-align: center;
}

.loading {
  max-width: 70px;
  width: 100%;

  .background {
    fill: #102555;
  }

  .rotate {
    animation: rotate3d $launchLength 1;
    transform-origin: center;
  }

  .rumble {
    animation: rumble 1s infinite ($launchLength / 3);
  }

  .arrow {
    animation: launch $launchLength 1;
    fill: #fff;
  }

  .exhaust {
    animation: slideIn $launchLength 1;
  }

  .gradient {
    stop {
      stop-color: #fff;
      stop-opacity: 0.2;
    }

    stop:last-child {
      stop-opacity: 0;
    }
  }

  .gradientBox {
    fill: url("#gradient");
  }

  .filteredGroup {
    filter: url("#stickyFilter");
  }

  .line {
    animation-iteration-count: infinite;
    stroke: #dde1ee;
    stroke-linecap: round;
  }

  .lineThick {
    animation-name: drawThick;
    animation-timing-function: linear;
  }

  .lineDots {
    animation-name: drawDots;
    animation-timing-function: linear;
    stroke-dasharray: 0, 30;
    stroke-width: 5.5;
  }

  .lineStatic {
    animation-name: drawStatic;
    animation-timing-function: ease;
    stroke-dasharray: 22;
    stroke-width: 8;
  }

  .line1 {
    animation-duration: 1.6s;
    stroke-dasharray: 8, 22, 3, 27, 16, 14;
    stroke-width: 4;
  }

  .line2 {
    animation-duration: 1.3s;
    stroke-dasharray: 18, 12, 10, 20, 3, 27;
    stroke-width: 6;
  }

  .line3 {
    animation-duration: 1.4s;
    stroke-dasharray: 3, 27, 10, 20, 20, 10;
    stroke-width: 4;
  }

  .line4 {
    animation-duration: 0.4s;
  }

  .line5 {
    animation-duration: 0.7s;
  }

  .line6 {
    animation-duration: 0.8s;
  }

  .line7 {
    animation-duration: 0.6s;
  }
}

.label {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 1rem;
}

// License

.license {
  font-size: 10px;
}
</style>
