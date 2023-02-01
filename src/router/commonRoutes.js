import VueRouter from 'vue-router';
import AdminSignInView from "../views/shared/UserSignInView.vue"
import adminRouter from './adminRoutes';
import studentRouter from './studentRoutes';
import tutorRouter from './tutorRoutes';

const routes = [
    {
      path: '/',
      component: AdminSignInView,
      name: 'AdminSignIn',
    } ]
    var commonRouter=new VueRouter({
        mode: 'history',
        routes
    })
    
     if(sessionStorage.getItem('token'))
     {
        if(sessionStorage.getItem('role')==1)
        {
          commonRouter=adminRouter
        }else if(sessionStorage.getItem('role')==2)
        {
          commonRouter=tutorRouter
        }else
        {
          commonRouter=studentRouter   
        }
     }else
     {
       commonRouter=studentRouter   
     }

     commonRouter.beforeEach((to,from,next) => {
      if(to.path=='/student')
      {
        next()
      }
      else if(from.name=='AdminSignIn')
      {  if(sessionStorage.getItem('token'))
          {
            window.location.replace(sessionStorage.getItem('url')+'/dashboard')
          } 
          else
          {
            next({name:'AdminSignIn'})
          }
      }
      else
      { 
         if(!sessionStorage.getItem('token'))
          {
            if(!sessionStorage.getItem('first'))
             {
              sessionStorage.setItem('first',true)
              next({name:'AdminSignIn'})

             }
             sessionStorage.setItem('first',false)

          }
          next()
      }
    })
export default commonRouter