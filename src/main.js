import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import RegisterView from "./views/student/RegisterView.vue"
import AdminSignInView from "./views/admin/AdminSignInView.vue"


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
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')