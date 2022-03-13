import renderless from "./renderless";

renderless.install = function(Vue) {
  Vue.component(renderless.name, renderless);
};

export default renderless;
