<template>
  <section class="p-navbar">
    <div class="p-navbar__header">
      <router-link :to="{ name: 'home' }" class="p-navbar__header-link">
        <ElImage />
      </router-link>
    </div>

    <nav class="p-navbar__menu">
      <ul class="p-navbar__menu-list">
        <li
          v-for="link in navbarLinks"
          :key="link.slug"
          class="p-navbar__menu-list-item"
        >
          <router-link
            :to="{ name: link.slug }"
            class="p-navbar__menu-list-link mx-auto"
          >
            <ElIcon>
              <component :is="`Icon${toUpper(link.slug)}`" />
              <ElCount v-if="link.slug === 'chat'">
                12
              </ElCount>
            </ElIcon>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="p-navbar__footer">
      <ul class="p-navbar__menu-list">
        <li class="p-navbar__menu-list-item">
          <router-link
            :to="{ name: 'settings' }"
            class="p-navbar__menu-list-link mx-auto"
          >
            <ElIcon>
              <IconSettings />
            </ElIcon>
          </router-link>
        </li>

        <li class="p-navbar__menu-list-item">
          <button
            @click.prevent="() => {}"
            class="p-navbar__menu-list-link mx-auto"
          >
            <ElIcon>
              <IconLogout />
            </ElIcon>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ElImage from "@/components/01-elements/ElImage";
import ElIcon from "@/components/01-elements/ElIcon";
import ElCount from "@/components/01-elements/ElCount";
import IconHome from "@/assets/images/svg/icon-home.svg";
import IconChat from "@/assets/images/svg/icon-chat.svg";
import IconSettings from "@/assets/images/svg/icon-settings.svg";
import IconLogout from "@/assets/images/svg/icon-logout.svg";

export default {
  name: "PNavbar",

  components: {
    ElImage,
    ElIcon,
    ElCount,
    IconHome,
    IconChat,
    IconSettings,
    IconLogout
  },

  props: {
    prop: String
  },

  data() {
    return {
      navbarLinks: [
        {
          slug: "home"
        },
        {
          slug: "chat"
        }
      ]
    };
  },

  methods: {},

  computed: {}
};
</script>

<style lang="scss">
.p-navbar {
  $block: &;
  flex-shrink: 0;
  width: 100px;
  background-color: $color-dark;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0px 16px rgba(24, 31, 46, 0.28);
  z-index: 10;

  > * {
    border-bottom: 1px solid rgba(#fff, 0.1);

    &:last-child {
      border-bottom: none;
    }
  }

  &__header {
    height: 120px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .el-image {
      width: 60px;
    }
  }

  &__menu {
    flex-grow: 1;
    background-color: $color-dark-1;
    padding: px-to-rem(25px) 0;

    &-list {
      &-link {
        display: block;
        padding: px-to-rem(25px) 0;
        text-align: center;

        &:hover {
          .el-icon {
            path {
              fill: $color-red;
            }
          }
        }

        .el-icon {
          position: relative;

          .el-count {
            position: absolute;
            top: -10px;
            right: -10px;
          }
        }
      }
    }
  }

  &__footer {
    margin-top: auto;
    flex-shrink: 0;
    background-color: $color-dark-2;
    padding: px-to-rem(25px) 0;
  }
}
</style>
