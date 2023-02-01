<template>
    <div class="session d-flex flex-column">
      <header class="header d-flex align-end justify-space-between">
        <nav class="nav d-flex">
        <span :aria-selected="ariaSessions" @click="toggle('session')" id="sessions" class="link">All Sessions</span>
        <span  :aria-selected="ariaStudents" class="link" @click="toggle('student')" id="students" >Enroled Students</span>

      </nav> 
        <ButtonVue @click="newsession" text="New Session"/> 
    
      </header>
      <router-view></router-view>
     
     
    </div>
  </template>
  
  <script>
import ButtonVue from '../../components/shared/Button.vue'
  export default {
    
      name: 'session-vue',
      data() {
        return {
          ariaStudents:false,
          ariaSessions:true,
          laptop:null

        }
      },
      components:{
        ButtonVue
      },
      
      created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },
      methods:{
        checkScreen() {
            this.windowWidth = window.innerWidth;

            if(this.windowWidth < 1400) {
                this.laptop = true
                return
            }
            else {
                this.laptop = false
            }
        },
        toggle(type){
          if(type=='student')
          {
            this.ariaSessions = false
            this.ariaStudents = true
          }
          else
          {
            this.ariaSessions = true
            this.ariaStudents = false
          }
          
          this.$router.push(type)
        },
        newsession(){
          this.$router.push({name:'NewSession'})

        }
      }
  
  }
  </script>
  
  <style scoped>
    .session {
      gap: 35px;
    width: 100%;
    padding-left: 70px;
    padding-right: 157px;
    padding-bottom:3%;
    z-index: -9999;
    overflow: hidden;

    }

    .nav {
    gap: 67px;
    margin-left: 56px;
  }
    .header {
    height: 145px;
    width: 100%;
    border-bottom: 1px solid rgba(130, 130, 135, 0.3);
  }
  
  .btn {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 34px;
  }
  .link {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 6px;
    position: relative;
  }

  .link::before {
    content: '';
    position: absolute;
    width: 70%;
    background-color: #FFA500;
    height: 3px;
    bottom: -6px;
    left: 15%;
    right: 15%;
    transform: scaleX(0);
    transition: transform .3s ease-in;
  }

  .link:hover {
    font-weight: bold;
  }

  .link:hover::before {
    transform: scaleX(1)
  }

  .link[aria-selected=true] {
    font-weight: bold
  }

  .link[aria-selected=true]::before {
    transform: scaleX(1);
  }


    @media (max-width: 1400px) {
      .session {
        padding-bottom:3%;
        gap: 25px;
        padding-left: 35px;
        padding-right: 95px;
      }
      .header {
      height: 100px;
    }

    .btn {
      font-size: 12px;
      margin-bottom: 22px;
    }
    .link {
      font-size: 14px;
      line-height: 24px;
    }

    .nav {
      gap: 30px;
      margin-left: 36px;
    }
    }
  
  </style>
  
  
  