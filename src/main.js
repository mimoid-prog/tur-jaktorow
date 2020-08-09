import "~/assets/globalStyles.scss";
import DefaultLayout from "~/layouts/Default.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function(Vue, { router }) {
  Vue.component("Layout", DefaultLayout);
  router.beforeEach((to, from, next) => {
    if (!to.hash && typeof document !== "undefined") {
      NProgress.start();
    }
    next();
  });

  router.afterEach((to, from) => {
    if (!to.hash && typeof document !== "undefined") {
      NProgress.done();
    }
  });
}
