<template>
  <TAuthPage class="page-home-user">
    <PUsersList />
  </TAuthPage>
</template>

<script>
import TAuthPage from "@/components/03-templates/TAuthPage";
import PUsersList from "../components/02-patterns/PUsersList";

export default {
  name: "VHomeUser",

  components: {
    TAuthPage,
    PUsersList
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

<style lang="scss"></style>
