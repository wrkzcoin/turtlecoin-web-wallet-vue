import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "f" */ "./views/Login.vue")
    },
    {
      path: "/create",
      name: "create",
      component: () =>
        import(/* webpackChunkName: "create" */ "./views/createWallet.vue")
    },
    {
      path: "/import",
      name: "import",
      component: () =>
        import(/* webpackChunkName: "import" */ "./views/importWallet.vue")
    }
  ]
});
