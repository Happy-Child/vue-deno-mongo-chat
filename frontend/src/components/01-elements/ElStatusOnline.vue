<template>
  <div class="el-status-online"></div>
</template>

<script>
export default {
  name: "ElStatusOnline",

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
.el-status-online {
  width: 14px;
  height: 14px;
  background-color: $color-green;
  border: 1.5px solid #fff;
  border-radius: 100px;
  z-index: 1;

  @include media-max(sm) {
    width: 12px;
    height: 12px;
  }
}
</style>
