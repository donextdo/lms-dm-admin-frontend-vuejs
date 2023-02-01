import VueRouter from 'vue-router';

import DashBoardView from "../views/shared/DashBoardView.vue"
import RegisterForm from "../components/student/RegisterForm.vue"
import LoginForm from "../components/student/LoginForm.vue"
import ResetForm from "../components/student/ResetForm.vue"
import RegisterView from "../views/student/RegisterView.vue"
import StudentDashboardPage from "../views/student/StudentDashboardPage.vue"
import PastClassesRecordings from "../views/student/PastClassesRecordings.vue"
import StudentPayment from "../views/student/StudentPayment.vue"
import Classes from "../views/student/Classes.vue"
import Recordings from "../views/student/Recordings.vue"
import AdminSignInView from "../views/shared/UserSignInView.vue"
import Profile from "../views/shared/Profile.vue"

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
       path: '/',
       component: RegisterForm,
       name: 'Register',
      },
      {
        path: '/login',
        component: LoginForm,
        name: 'login',
       },
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
        component: StudentDashboardPage,
        name: 'Dashboard'
      },  
    
      {
        path: '/pastRecordings',
        component: PastClassesRecordings,
        name: 'pastRecordings'
      },
      {
        path: '/studentPayment',
        component: StudentPayment,
        name: 'My Fees', 
      
      },
      {
        path: '/recordingsView',
        component: Recordings,
        name: 'Recordings',
        props: true 
      },
      {
        path: '/profile',
        component: Profile,
        name: 'Profile',
      },
      {
        path: '/Classes',
        component:Classes,
        name: 'Class',
      },
    
    ] 
   } 
   
   
]




const studentRouter = new VueRouter({
    mode: 'history',
    routes
})



studentRouter.beforeEach((to,from,next) => {
  if(to.path=='/student')
  {
   next()
  }
  else if(sessionStorage.getItem('token'))
  {
    next()
  }
  else
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
})

export default studentRouter