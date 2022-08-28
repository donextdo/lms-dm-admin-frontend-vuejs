import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import RegisterView from "./views/student/RegisterView.vue"
import AdminSignInView from "./views/admin/AdminSignInView.vue"
import DashBoardView from "./views/admin/DashBoardView.vue"


Vue.use(VueRouter);
Vue.prototype.$hostname = 'http://localhost:8080/'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AdminSignInView,
      name: 'AdminSignIn',
    }, 
    {
      path: '/register',
      component: RegisterView,
      name: 'RegisterScreen'
    },
    {
      path: '/admin',
      component: AdminSignInView,
      name: 'AdminSignIn'
    },
    {
      path: '/dashboard',
      component: DashBoardView,
      name: 'Dashboard'
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')