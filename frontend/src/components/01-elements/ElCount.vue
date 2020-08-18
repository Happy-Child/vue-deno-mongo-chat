<template>
  <span class="el-count">
    <span class="el-count__text">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: "ElCount",

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
.el-count {
  border-radius: 100%;
  background-color: $color-red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  color: #fff;

  @include media-max(sm) {
    width: 18px;
    height: 18px;
  }

  &__text {
    color: inherit;
    font-size: 13px;

    @include media-max(sm) {
      font-size: 12px;
    }
  }
}
</style>
