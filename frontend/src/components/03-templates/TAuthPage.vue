<template>
  <div class="t-auth-page page">
    <PMobileHeader v-if="$breakpoints.isMaxLG" />
    <PNavbar v-else />

    <section class="t-auth-page__content">
      <slot></slot>
      <div v-if="!$breakpoints.isMaxLG" class="t-auth-page__content-inner">
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
import PMobileHeader from "@/components/02-patterns/PMobileHeader";

export default {
  name: "TAuthPage",

  components: {
    PNavbar,
    PMobileHeader
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

  @include media-max(lg) {
    display: block;
    overflow-y: hidden;
  }

  &__content {
    flex-grow: 1;
    display: flex;
    align-items: stretch;

    @include media-max(lg) {
      overflow-y: auto;
      height: calc(100vh - 70px);
      max-height: calc(100vh - 70px);
    }

    &-inner {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &-text {
        color: $color-gray-2;
        font-size: px-to-rem(26px);
        user-select: none;
      }
    }
  }
}
</style>
