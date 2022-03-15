import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://cuxmhwoinodczltpzgcz.supabase.co",
  supabaseKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1eG1od29pbm9kY3psdHB6Z2N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcyMzk2NjYsImV4cCI6MTk2MjgxNTY2Nn0.mia3SMiszGzYgi6jKeyMAUO9nvVS6t2xxgUkUbPOAjU",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
