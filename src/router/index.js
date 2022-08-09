import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layout/Layout.vue"),
    children: [
      {
        path: "/home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/about",
        component: () => import("../views/About.vue"),
      },
      {
        path: "/history",
        component: () => import("../views/Historial.vue")
      },
      {
        path: "/purchases",
        component: () => import("../views/Purchases.vue"),
        children: [
          {
            path: "/purchases/new",
            component: () => import("../views/purchases/NewPurchase.vue"),
          },
        ],
      },
      {
        path: "/sales",
        component: () => import("../views/Sale.vue"),
        children: [
          {
            path: "/sales/new",
            component: () => import("../views/sales/NewSales.vue"),
          },
        ],
      },

    ],
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
