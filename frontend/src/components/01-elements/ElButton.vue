<template>
  <component
    :is="isTag"
    v-bind="isBind"
    v-on="$listeners"
    :class="classes"
    class="el-button"
  >
    <span class="el-button__text">
      <slot></slot>
    </span>

    <SVGIconLoader class="el-button__loader" />
  </component>
</template>

<script>
import SVGIconLoader from "@/assets/images/svg/icon-loader.svg";

export default {
  name: "ElButton",

  components: {
    SVGIconLoader
  },

  props: {
    to: {
      type: [Object, String],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: "_blank"
    },
    tag: {
      type: String,
      default: "button"
    },
    theme: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  },

  methods: {},

  computed: {
    isTag() {
      if (this.to) {
        return "router-link";
      } else if (this.href) {
        return "a";
      }
      return this.tag;
    },
    isBind() {
      const result = {};

      if (this.to) {
        result.to = this.to;
      } else if (this.href || this.target) {
        result.href = this.href;
        result.target = this.target;
      } else if (this.isTag === "button") {
        result.disabled = this.disabled;
      }

      return result;
    },
    classes() {
      return [
        { "el-button_loading": this.loading },
        { "el-button_disabled": this.disabled },
        this.theme ? `el-button_${this.theme}` : null
      ];
    }
  }
};
</script>

<style lang="scss">
.el-button {
  $block: &;
  text-align: center;
  font-size: $font-size;
  min-height: px-to-em(54px, $font-size);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: px-to-em(10px, $font-size) px-to-em(20px, $font-size);
  transition: $transition-default all ease;
  background-color: $color-red;
  color: #fff;
  font-family: $font-bold;

  &:hover,
  &:focus {
    background-color: $color-red-dark;
    color: #fff;
  }

  &:focus {
    color: #fff;
    box-shadow: 0 0 16px rgba(253, 79, 79, 0.3);
  }

  &__text {
    transition: $transition-default all ease;
    color: inherit;
  }

  &__loader {
    transition: $transition-default all ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    opacity: 0;
    pointer-events: none;
  }

  &_green {
    background-color: $color-green;

    &:hover,
    &:focus {
      background-color: $color-green-dark;
    }

    &:focus {
      color: #fff;
      box-shadow: 0 0 16px rgba(35, 190, 121, 0.3);
    }
  }

  &_disabled,
  &[disabled],
  &_loading {
    pointer-events: none;
    cursor: none;
    background-color: $color-gray-2;
  }

  &_disabled,
  &[disabled] {
  }

  &_loading {
    #{$block} {
      &__text {
        opacity: 0;
      }
      &__loader {
        opacity: 1;
      }
    }
  }
}
</style>
