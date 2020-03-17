import Vue from "vue";
import router from "../../router";
import store from "../../store";
import contextMenu from "#/ContextMenu";

let elCache = null;
let domCache = null;
let coordinate = {
  x: 0,
  y: 0,
  windowW: 0,
  windowH: 0,
};

let vm;
export const menu = {
  inserted(el, binding) {
    el.addEventListener("contextmenu", e => {
      if (!binding.value.imageData) {
        throw new Error("imageData is required params !!!");
      } else {
        const { src, smallSrc } = binding.value.imageData;
        if (!src || !smallSrc) {
          throw new Error("src & smallSrc is required params !!!");
        }
      }
      
      e.preventDefault();

      if (elCache && domCache) {
        document.body.removeChild(domCache);
        vm.$destroy();
      }

      document.addEventListener("click", handleRemove, true);
      window.addEventListener("scroll", handleRemove, true);
      window.addEventListener("dragstart", handleRemove, true);

      coordinate = {
        x: e.clientX,
        y: e.clientY,
        windowW: window.innerWidth,
        windowH: window.innerHeight,
      };

      vm = new Vue({
        router,
        store,
        render(h) {
          return h(contextMenu, {
            props: {
              coordinate,
              data: binding.value,
            },
          });
        },
      });

      const dom = vm.$mount().$el;
      document.body.appendChild(dom);

      elCache = el;
      domCache = dom;
    });
  },
  // unbind() {
  //   document.body.removeEventListener("click", handleRemove);
  //   window.addEventListener("scroll", handleRemove, true);

  //   if (elCache && domCache) {
  //     document.body.removeChild(domCache);
  //   }
  //   domCache = null;
  //   elCache = null;
  // },
};

function handleRemove() {
  if (elCache && domCache) {
    document.body.removeChild(domCache);
    vm.$destroy();
  }
  elCache = null;
  domCache = null;
}
