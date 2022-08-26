import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import LoginScreen from "./components/LoginScreen.vue";




Vue.use(VueRouter);
Vue.prototype.$hostname = 'http://localhost:8080/'

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: LoginScreen,
    name: 'LoginScreen',
  }, ]
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')