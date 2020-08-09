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

    <ElField
      v-model="formData.username"
      :placeholder="'test'"
    />

    <ElField
      v-model="formData.username"
      :placeholder="'test'"
      :errors="'errors errors errors errors errors errors errors errorserrors '"
    />

    <div class="buttons">
      <ElButton theme="green">
        test text
      </ElButton>

      <ElButton :loading="btnLoading">
        test text
      </ElButton>

      <ElButton :disabled="true" theme="green">
        test text
      </ElButton>

      <ElButton :to="{name: 'chat'}">
        test text
      </ElButton>

      <ElButton href="https://www.google.com/">
        test text
      </ElButton>
    </div>
  </div>
</template>

<script>
import ElTab from "@/components/01-elements/ElTab";
import ElField from "@/components/01-elements/ElField";
import ElButton from "@/components/01-elements/ElButton";

export default {
  name: "VHomeGuest",

  components: {
    ElTab,
    ElField,
    ElButton
  },

  props: {
    prop: String
  },

  data() {
    return {
      btnLoading: false,
      curTab: "registration",
      tabs: [
        {
          slug: "registration"
        },
        {
          slug: "login"
        }
      ],
      formData: {
        username: null,
        email: null,
        password: null,
        password_conformation: null
      }
    };
  },

  methods: {},

  computed: {},

  mounted() {
    setTimeout(() => {
      this.btnLoading = true
    }, 2000)
  }
};
</script>

<style lang="scss">
.buttons {
  padding: 40px;
  .el-button {
    width: 100%;
    margin-bottom: 40px;
  }
}

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
