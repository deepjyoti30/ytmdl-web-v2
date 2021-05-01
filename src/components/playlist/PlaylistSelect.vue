<template>
  <div class="playlist--select__container">
    <check-box :text="getText" @clicked="handleClick" />
  </div>
</template>

<script>
import CheckBox from "../CheckBox.vue";
export default {
  components: { CheckBox },
  name: "PlaylistSelect",
  props: {
    text: {
      type: String,
      default: "Select all songs"
    },
    start: {
      type: Number,
      default: -1
    },
    end: {
      type: Number,
      default: -1
    }
  },
  methods: {
    handleClick: function(isSelected) {
      /**
       * Handle the click on the checkbox.
       *
       * We need to let the parent know that the
       * box was clicked.
       */
      this.$emit("clicked", {
        start: this.start,
        end: this.end,
        isChecked: isSelected
      });
    }
  },
  computed: {
    getText() {
      return this.text;
    }
  }
};
</script>
