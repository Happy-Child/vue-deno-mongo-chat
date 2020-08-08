import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "./messages";

Vue.use(VueI18n);

let locale = "en";

if (typeof window !== "undefined" && window.localStorage) {
  locale = window.localStorage.getItem("lang") || locale;
}

export default new VueI18n({
  locale,
  messages
});
