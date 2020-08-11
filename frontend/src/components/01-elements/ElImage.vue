<template>
  <div class="el-image" :class="classes">
    <picture class="el-image__item el-image__wrap-tag">
      <img class="el-image__tag" :src="src" :alt="alt">
    </picture>
    <IconUserCircle class="el-image__item el-image__placeholder" />
  </div>
</template>

<script>
  import IconUserCircle from "@/assets/images/svg/icon-user-circle.svg";

export default {
  name: "ElImage",

  components: {
    IconUserCircle
  },

  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    }
  },

  data() {
    return {};
  },

  methods: {},

  computed: {
    classes() {
      return [{ "el-image_placeholder": !this.src }];
    }
  }
};
</script>

<style lang="scss">
.el-image {
  $block: &;
  width: 100%;
  position: relative;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  &__item,
  &__tag {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__item {
    border-radius: 100%;
    transition: $transition-default all ease;
    overflow-x: hidden;
  }

  &__tag {
    object-fit: cover;
    object-position: center;
    background-color: #fff;
  }

  &__placeholder {
    opacity: 0;
    visibility: hidden;
  }

  &_placeholder {
    #{$block} {
      &__tag {
        opacity: 0;
        visibility: hidden;
      }
      &__placeholder {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
