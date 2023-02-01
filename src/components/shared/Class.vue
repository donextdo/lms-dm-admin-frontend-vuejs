<template>
    <v-card :height="laptop ? '140px' : '168px'" width="100%" flat class="card rounded-xl" >
        <h2 v-if="type" class="class-title">{{ classs.grade.name +' '+classs.subject.name+' '+classs.country.name }}</h2>
        <h2 v-else class="class-title">{{ upcomingClass.grade.name +' '+upcomingClass.subject.name+' '+upcomingClass.country.name }}</h2>

        <div class="time">

            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.74984 0.728516C4.46504 0.728516 0.979126 4.21454 0.979126 8.49923C0.979126 12.7839 4.46515 16.2699 8.74984 16.2699C13.0345 16.2699 16.5206 12.7839 16.5206 8.49923C16.5206 4.21454 13.0345 0.728516 8.74984 0.728516ZM8.74984 14.7466C5.30515 14.7466 2.50247 11.9441 2.50247 8.49923C2.50247 5.05434 5.30495 2.25186 8.74984 2.25186C12.1947 2.25186 14.9972 5.05434 14.9972 8.49923C14.9972 11.9441 12.1947 14.7466 8.74984 14.7466Z" fill="#FE3F49"/>
            <path d="M12.0262 8.36839H9.5119V5.18374C9.5119 4.76302 9.1709 4.42188 8.75003 4.42188C8.3293 4.42188 7.98816 4.76287 7.98816 5.18374V9.13003C7.98816 9.55075 8.32915 9.8919 8.75003 9.8919H12.0262C12.4469 9.8919 12.7881 9.5509 12.7881 9.13003C12.7881 8.70931 12.4471 8.36832 12.0262 8.36832V8.36839Z" fill="#FE3F49"/>
            </svg>

            <span>{{ upcomingClass.time }}</span>

        </div>

        <p class="desc">
            {{ upcomingClass.description }}
        </p>
    </v-card>
    
  </template>
  
  <script>
  import axios from 'axios'
  export default {
      name: 'class-vue',
  
      props: ['upcomingClass'],
  
      data() {
        return {
            laptop: null,
            classs:null,
            type:true,
        }
      },
  
      created() {
          window.addEventListener('resize', this.checkScreen)
          this.checkScreen()
          if(sessionStorage.getItem('role')==1)
          {
            this.getClass()

          }
          else{
            this.type=false
          }
      },
  
      methods: {
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
         async getClass(){
            const {data} = await axios.get(`${this.$hostname}/api/admin/class/${this.upcomingClass.class1_id}`)
            this.classs=data.data
          }
      },
  }
  
  </script>
  
  <style scoped>
  
      .card {
          padding: 25px 30px;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          flex-direction: column;      
          border-left: 20px solid #FFA500;
          align-items: center;
          row-gap: 1rem;
      }

      .class-title {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 1px;
        grid-column: 1/9;
        text-align: left;
        margin-bottom: 0;
      }

      .time {
        grid-column: 9/-1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: .5rem;
      }

      .time > svg {
        width: 20px;
        height: 20px;
      }

      .time > span {
        font-size: 20px;
        font-weight: 700;
        color: #FE3F49;
      }

      .desc {
        grid-column: 1/-1;
        margin-bottom: 0;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: .5px;
      }
  
      @media (max-width: 1600px) {
        .card {
            padding: 16px 20px;
            border-left: 12px solid #FFA500;
            row-gap: 0;
        }

        .class-title {
            font-size: 16px;
        }

        .time {
            gap: .2rem;
        }

        .time > svg {
            width: 16px;
            height: 16px;
        }

        .time > span {
            font-size: 16px;
            font-weight: 700;
        }

        .desc {
            font-size: 14px;
            line-height: 16px;
        }
      }
  </style>
  