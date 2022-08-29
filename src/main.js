import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import RegisterView from "./views/student/RegisterView.vue"
import AdminSignInView from "./views/admin/AdminSignInView.vue"
import DashBoardView from "./views/admin/DashBoardView.vue"
import DashBoardPage from "./views/admin/DashBoardPage.vue"
import ClassesPage from "./views/admin/ClassesPage.vue"
import StudentsPage from "./views/admin/StudentsPage.vue"
import TutorsPage from "./views/admin/TutorsPage.vue"
import PaymentsPage from "./views/admin/PaymentsPage.vue"
import SettingsPage from "./views/admin/SettingsPage.vue"


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
      name: 'DashboardView',
      children: [
        {
          path: '/',
          component: DashBoardPage,
          name: 'Dashboard'
        },
        {
          path: '/classes',
          component: ClassesPage,
          name: 'Classes'
        },
        {
          path: '/students',
          component: StudentsPage,
          name: 'Students'
        },
        {
          path: '/tutors',
          component: TutorsPage,
          name: 'Tutors'
        },
        {
          path: '/payments',
          component: PaymentsPage,
          name: 'Payments'
        },
        {
          path: '/settings',
          component: SettingsPage,
          name: 'Settings'
        },
      ]
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')