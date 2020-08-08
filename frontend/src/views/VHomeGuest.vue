<template>
  <div class="page page-home-guest">
    <div v-if="tabs.length" class="tabs">
      <ElTab
        v-for="tab in tabs"
        :key="tab.slug"
        :class="{ 'el-tab_active': curTab === tab.slug }"
        @click.prevent="curTab = tab.slug"
      >
        {{ $t(`actions.${tab.slug}`) }}
      </ElTab>
    </div>
  </div>
</template>

<script>
import ElTab from "@/components/01-elements/ElTab";

export default {
  name: "VHomeGuest",

  components: {
    ElTab
  },

  props: {
    prop: String
  },

  data() {
    return {
      curTab: "registration",
      tabs: [
        {
          slug: "registration"
        },
        {
          slug: "login"
        }
      ]
    };
  },

  methods: {},

  computed: {}
};
</script>

<style lang="scss">
.tabs {
  display: flex;
  align-items: stretch;
  max-width: 100%;
  overflow-y: auto;

  .el-tab {
    flex-grow: 1;

    @include media-min(md) {
      width: 100%;
      max-width: 50%;
      flex-grow: 0;
    }
  }
}
</style>
