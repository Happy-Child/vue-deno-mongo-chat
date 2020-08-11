<template>
  <span class="el-icon">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "ElIcon",

  components: {},

  props: {
    size: {
      type: String,
      default: "xl"
    },
  },

  data() {
    return {}
  },

  methods: {},

  computed: {
    classes() {
      return [`el-image_${this.size}`];
    }
  }
}
</script>

<style lang="scss">
.el-icon {
  $block: &;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    * {
      transition: $transition-default all ease;
    }
  }

  &_xl {
    width: 24px;
    height: 24px;
  }
}
</style>