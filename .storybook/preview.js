export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import Vue from "vue";
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);
