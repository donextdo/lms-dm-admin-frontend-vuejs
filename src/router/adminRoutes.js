import VueRouter from 'vue-router';

import AdminSignInView from "../views/shared/UserSignInView.vue"
import DashBoardView from "../views/shared/DashBoardView.vue"
import DashBoardPage from "../views/admin/DashBoardPage.vue"
import ClassesPage from "../views/admin/ClassesPage.vue"
import StudentsPage from "../views/shared/StudentsPage.vue"
import TutorsPage from "../views/admin/TutorsPage.vue"
import PaymentsPage from "../views/admin/PaymentsPage.vue"
import Profile from "../views/shared/Profile.vue"
import SessionPage from "../views/shared/SessionPage.vue"
import ClassView from "../views/admin/ClassView.vue"
import SessionRow from "../views/shared/SessionRow.vue"
import SessionDetail from "../components/shared/SessionDetail.vue"
import StudentSessionPage from "../views/shared/StudentSessionPage.vue"
import AddorEditSession from "../components/shared/AddorEditSession.vue"
import AddRecordingLinkSession from "../components/shared/AddRecordingLinkSession.vue"
import TotalPayments from "../views/admin/TotalPayments.vue"
import PaymentsDue from "../views/admin/PaymentsDue.vue"
import PaymentsHistory from "../views/admin/PaymentsHistory.vue"
import ResetForm from "../components/student/ResetForm.vue"
import RegisterView from "../views/student/RegisterView.vue"
import PaymentRecipt from "../views/admin/PaymentRecipt.vue"
const routes = [
    {
      path: '/',
      component: AdminSignInView,
      name: 'AdminSignIn',
    }, 
    {
      path: '/student',
      component: RegisterView,
      name: 'RegisterScreen',
      redirect:{
        name:'Register'
      },
      children:[
         {
          path: '/reset',
          component: ResetForm,
          name: 'reset',
         },
      ]
    },
    {
      path: '/dashboard',
      component: DashBoardView,
      name: 'DashboardView',
      redirect: {
        name: 'Dashboard Page'
      },
      children: [
        {
          path: '/',
          component: DashBoardPage,
          name: 'Dashboard Page'
        },
        {
          path: '/classes',
          component: ClassView,
          name: 'Class',
           redirect: {
            name: 'ClassPage'
           },
            children: [
            {
              path: '/',
              component:ClassesPage,
              name: 'ClassPage'
            },
            {
              path: '/classes/session',
              component:SessionPage,
              name: 'Session',
              redirect:{
                name:'AllSessions',
              },
              children:[{
                path: '/',
                component:SessionRow,
                name: 'AllSessions'
              },
              {
                path: '/classes/student',
                component:StudentSessionPage,
                name: 'StudentSession'
              }, ]
            },
            {
              path: '/classes/sessionDetail',
              component:SessionDetail,
              name: 'SessionDetail', 
            },
            {
              path: '/classes/editSession',
              component:AddorEditSession,
              name: 'EditSession', 
              props:{edit:true},
            },
            {
              path: '/newSession',
              component:AddorEditSession,
              name: 'NewSession', 
              props:{edit:false},
            },
            {
              path: '/addRecordingLinkSession',
              component:AddRecordingLinkSession,
              name: 'AddRecordingLinkSession', 
              props:{edit:true},
            }
           ]
        },
        {
          path: '/settings',
          component: Profile,
          name: 'Settings'
        },
        {
          path: '/students',
          component: StudentsPage,
          name: 'Students Page'
        },
        {
          path: '/tutors',
          component: TutorsPage,
          name: 'Tutors'
        },
        {
          path: '/payments',
          component: PaymentsPage,
          name: 'Payments',
          redirect:{
            name:'Total Payments'
          },
          children:[
            {
              path: '/payments/totalPayments',
              component: TotalPayments,
              name: 'Total Payments'
            },
            {
              path: '/payments/paymentsDue',
              component: PaymentsDue,
              name: 'Payments Due'
            },
            {
              path: '/payments/paymentsHistory',
              component: PaymentsHistory,
              name: 'Payments History'
            },
            {
              path: '/payments/paymentsRecipts',
              component: PaymentRecipt,
              name: 'Payments Recipts'
            },
          ]
        },
   
   
      ]
    }
]

const adminRouter = new VueRouter({
    mode: 'history',
    routes
})

adminRouter.beforeEach((to,from,next) => {
  if(sessionStorage.getItem('token'))
  {
    next()
  }
  else
  {
    {
      if(from.path!=='/')
      {
        next({name:'AdminSignIn'})
      }
      else if(to.name=='AdminSignIn')
      {
        next()
  
      }else if(from.name!=='AdminSignIn')
      {
        next({name:'AdminSignIn'})
      }
    }
  }
})

export default adminRouter