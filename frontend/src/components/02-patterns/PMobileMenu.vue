<template>
  <nav class="p-mobile-menu">
    <ul class="p-mobile-menu__list">
      <li
        v-for="link in links"
        :key="link.slug"
        class="p-mobile-menu__item"
        :class="{
          'p-mobile-menu__item_active': link.slug === $route.params.slug
        }"
      >
        <router-link :to="{ name: link.slug }" class="p-mobile-menu__item-link">
          <span class="p-mobile-menu__item-link-text">
            {{ $t(`pages.${link.slug}`) }}
          </span>
        </router-link>
      </li>

      <li class="p-mobile-menu__item">
        <button @click.prevent="() => {}" class="p-mobile-menu__item-link">
          <span class="p-mobile-menu__item-link-text">
            {{ $t("actions.logout") }}
          </span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PMobileMenu",

  components: {},

  props: {
    prop: String
  },

  data() {
    return {
      links: [
        {
          slug: "home"
        },
        {
          slug: "chat"
        },
        {
          slug: "settings"
        }
      ]
    };
  },

  methods: {},

  computed: {}
};
</script>

<style lang="scss"></style>
