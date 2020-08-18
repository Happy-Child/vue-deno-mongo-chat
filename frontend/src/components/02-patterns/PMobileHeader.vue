<template>
  <header class="p-mobile-header">
    <div class="p-mobile-header__inner">
      <button class="p-mobile-header__toggle-menu">
        <ElImage />
        <span class="p-mobile-header__toggle-menu-title">
          {{ $t(`pages.${ $route.name }`) }}
        </span>
      </button>

      <button @click.prevent="() => {}" class="p-mobile-header__search-button">
        <ElIcon>
          <IconHSearch />
        </ElIcon>
      </button>
    </div>


  </header>
</template>

<script>
import ElImage from "@/components/01-elements/ElImage";
import ElIcon from "@/components/01-elements/ElIcon";
import IconHSearch from "@/assets/images/svg/icon-search.svg";

export default {
  name: "PMobileHeader",

  components: {
    ElImage,
    ElIcon,
    IconHSearch
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
.p-mobile-header {
  $block: &;

  &__inner {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $color-dark-1;
    padding: 8px 16px;
  }

  &__toggle-menu {
    display: flex;
    align-items: center;

    .el-image {
      flex-shrink: 0;
      margin-right: 24px;
      width: 46px;
    }

    &-title {
      font-size: 18px;
      color: #fff;
    }
  }

  &__search {
    &-button {
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      path {
        fill: $color-gray;
      }
    }
  }
}
</style>
