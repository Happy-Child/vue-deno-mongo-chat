<template>
  <TDefault class="page-home-guest">
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

    <transition-group
      tag="div"
      class="wrap-forms"
      :enter-active-class="durationEnter"
      :leave-active-class="durationLeave"
    >
      <div
        v-if="curTab === 'registration'"
        key="form-registration"
        class="wrap-form"
      >
        <form class="form mx-auto">
          <ElField
            v-model="formData.username"
            :placeholder="$t('labels.username')"
          />

          <ElField v-model="formData.email" :placeholder="$t('labels.email')" />

          <ElField
            v-model="formData.password"
            :placeholder="$t('labels.password')"
          />

          <ElField
            v-model="formData.password_conformation"
            :placeholder="$t('labels.password_conformation')"
          />

          <ElButton>
            {{ $t("actions.confirm") }}
          </ElButton>
        </form>
      </div>

      <div v-else-if="curTab === 'login'" key="form-login" class="wrap-form">
        <form class="form mx-auto">
          <ElField v-model="formData.email" :placeholder="$t('labels.email')" />

          <ElField
            v-model="formData.password"
            :placeholder="$t('labels.password')"
          />

          <ElButton>
            {{ $t("actions.confirm") }}
          </ElButton>
        </form>
      </div>
    </transition-group>
  </TDefault>
</template>

<script>
import TDefault from "@/components/03-templates/TDefault";
import ElTab from "@/components/01-elements/ElTab";
import ElField from "@/components/01-elements/ElField";
import ElButton from "@/components/01-elements/ElButton";

export default {
  name: "VHomeGuest",

  components: {
    ElTab,
    ElField,
    ElButton,
    TDefault
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
      ],
      formData: {
        username: null,
        email: null,
        password: null,
        password_conformation: null
      },
      durationEnter: null,
      durationLeave: null
    };
  },

  watch: {
    curTab(cur, old) {
      const curIndex = this.tabs.findIndex(({ slug }) => slug === cur);
      const oldIndex = this.tabs.findIndex(({ slug }) => slug === old);

      this.durationEnter = curIndex >= oldIndex ? "fadeInRight" : "fadeInLeft";
      this.durationLeave =
        curIndex >= oldIndex ? "fadeOutLeft" : "fadeOutRight";
    }
  },

  methods: {},

  computed: {}
};
</script>

<style lang="scss">
.page-home-guest {
  display: flex;
  flex-direction: column;

  .wrap-forms {
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .wrap-form {
    padding: 26vh 16px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .form {
    width: 100%;
    max-width: 630px;
  }
}

.tabs {
  display: flex;
  align-items: stretch;
  max-width: 100%;
  overflow-y: auto;

  .el-tab {
    width: 100%;
    max-width: 50%;
  }
}
</style>
