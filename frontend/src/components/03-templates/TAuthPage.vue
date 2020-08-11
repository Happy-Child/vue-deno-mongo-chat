<template>
  <div class="t-auth-page page">
    <PNavbar />
    <section class="t-auth-page__content">
      <slot></slot>
    </section>
  </div>
</template>

<script>
import PNavbar from "@/components/02-patterns/PNavbar";

export default {
  name: "TAuthPage",

  components: {
    PNavbar
  },

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
.t-auth-page {
  display: flex;
  align-items: stretch;
}
</style>
