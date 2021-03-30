// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "./zh";
import en from "./en";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"// element-ui lang
import elementEnLocale from "element-ui/lib/locale/lang/en" // element-ui lang

// let lang = { ...globalLang };

// TODO 后面这个需要动态获取
const locale = "zh";
const messages = {
  zh: {
    ...zh,
    ...elementZhLocale
  },
  en: {
    ...en,
    ...elementEnLocale
  },
}

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale,
  messages
  // messages: {
  //   [locale]: lang,
  // },
});
export default i18n;
