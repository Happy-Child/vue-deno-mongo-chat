<template>
  <button class="el-tab" v-on="$listeners">
    <span class="el-tab__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "ElTab",

  components: {},

  props: {
    prop: String
  },

  data() {
    return {};
  },

  methods: {},

  computed: {}
};
</script>

<style lang="scss">
.el-tab {
  $block: &;
  font-size: 24px;
  transition: $transition-default all ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: px-to-em(68px, 24px);
  padding: px-to-em(10px, 24px) px-to-em(20px, 24px);
  color: $color-gray-2;
  border-bottom: 1px solid $color-gray-1;

  @include media-max(lg) {
    font-size: 20px;
  }

  @include media-max(sm) {
    font-size: 18px;
  }

  &__text {
    color: inherit;
  }

  &_active {
    color: $color-dark;
    border-bottom-color: $color-dark;
  }
}
</style>
