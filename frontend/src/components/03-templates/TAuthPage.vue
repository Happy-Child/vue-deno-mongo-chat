<template>
  <div class="t-auth-page page">
    <PNavbar />
    <section class="t-auth-page__content">
      <slot></slot>

      <div class="t-auth-page__content-inner">
        <slot name="main">
          <span class="t-auth-page__content-inner-text">
            {{ $t("actions.select_chat") }}
          </span>
        </slot>
      </div>
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

  &__content {
    flex-grow: 1;
    display: flex;
    align-items: stretch;

    &-inner {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &-text {
        color: $color-gray-2;
        font-size: px-to-rem(26px);
      }
    }
  }
}
</style>
