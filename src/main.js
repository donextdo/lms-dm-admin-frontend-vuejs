import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
// import RegisterView from "./views/student/RegisterView.vue"
// import AdminSignInView from "./views/admin/AdminSignInView.vue"
// import DashBoardView from "./views/admin/DashBoardView.vue"
// import DashBoardPage from "./views/admin/DashBoardPage.vue"
// import ClassesPage from "./views/admin/ClassesPage.vue"
// import StudentsPage from "./views/admin/StudentsPage.vue"
// import TutorsPage from "./views/admin/TutorsPage.vue"
// import PaymentsPage from "./views/admin/PaymentsPage.vue"
// import SettingsPage from "./views/admin/SettingsPage.vue"
// import Dancing from "./components/admin/classes/Dancing.vue"
// import Music from "./components/admin/classes/Music.vue"

import commonRouter from "./router/commonRoutes.js"

Vue.use(VueRouter);
Vue.prototype.$hostname = 'http://127.0.0.1:8000'
sessionStorage.setItem('url',' http://localhost:8080')

// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       component: AdminSignInView,
//       name: 'AdminSignIn',
//     }, 
//     {
//       path: '/register',
//       component: RegisterView,
//       name: 'RegisterScreen'
//     },
//     // {
//     //   path: '/admin',
//     //   component: AdminSignInView,
//     //   name: 'AdminSignIn'
//     // },
//     {
//       path: '/dashboard',
//       component: DashBoardView,
//       name: 'DashboardView',
//       redirect: {
//         name: 'Dashboard'
//       },
//       children: [
//         {
//           path: '/',
//           component: DashBoardPage,
//           name: 'Dashboard'
//         },
//         {
//           path: '/classes',
//           component: ClassesPage,
//           name: 'Classes',
//           redirect: {
//             name: 'Music'
//           },
//           children: [
//             {
//               path: '/',
//               component: Music,
//               name: 'Music'
//             },
//             {
//               path: '/dancing',
//               component: Dancing,
//               name: 'Dancing'
//             }
//           ]
//         },
//         {
//           path: '/students',
//           component: StudentsPage,
//           name: 'Students'
//         },
//         {
//           path: '/tutors',
//           component: TutorsPage,
//           name: 'Tutors'
//         },
//         {
//           path: '/payments',
//           component: PaymentsPage,
//           name: 'Payments'
//         },
//         {
//           path: '/settings',
//           component: SettingsPage,
//           name: 'Settings'
//         },
//       ]
//     }
//   ]
// });



Vue.config.productionTip = false;

  new Vue({
    vuetify,
    router:commonRouter,
    render: h => h(App)
  }).$mount('#app')


