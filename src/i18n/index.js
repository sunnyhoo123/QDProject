// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueI18n from "vue-i18n";

import globalLang from "./lang";
let lang = { ...globalLang };


// TODO 后面这个需要动态获取
const locale = "zh_CN";

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale,
  messages: {
    [locale]: lang,
  },
});
export default i18n;
