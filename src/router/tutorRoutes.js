import VueRouter from 'vue-router';

import TutorDashBoardPage from "../views/tutor/TutorDashBoardPage.vue"
import DashBoardView from "../views/shared/DashBoardView.vue"
import AdminSignInView from "../views/shared/UserSignInView.vue"
import ClassesPage from "../views/tutor/ClassesPage.vue"
import SessionRow from "../views/shared/SessionRow.vue"
import SessionDetail from "../components/shared/SessionDetail.vue"
import StudentSessionPage from "../views/shared/StudentSessionPage.vue"
import AddorEditSession from "../components/shared/AddorEditSession.vue"
import AddRecordingLinkSession from "../components/shared/AddRecordingLinkSession.vue"
import SessionPage from "../views/shared/SessionPage.vue"
import StudentsPage from "../views/shared/StudentsPage.vue"
import Profile from "../views/shared/Profile.vue"
import ResetForm from "../components/student/ResetForm.vue"
import RegisterView from "../views/student/RegisterView.vue"

const routes=[ 
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
          name: 'Dashboard'
        },
        children: [
          {
            path: '/',
            component: TutorDashBoardPage,
            name: 'Dashboard'
          }, 
         
          {
            path: '/classes',
            component: ClassesPage,
            name: 'Class',
          },
          {
            path: '/students',
            component: StudentsPage,
            name: 'Students Page'
          },
          {
            path: '/settings',
            component: Profile,
            name: 'Settings'
          },
            {
              path: '/classes/session',
              component:SessionPage,
              name: 'Session',
              redirect:{
                name:'AllSessions',
              },
              children:[{
                path: '/classes/session',
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
              path: '/classes/newSession',
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
           
        ],
        }


]

const tutorRouter = new VueRouter({
    mode: 'history',
    routes
})



tutorRouter.beforeEach((to,from,next) => {
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

export default tutorRouter