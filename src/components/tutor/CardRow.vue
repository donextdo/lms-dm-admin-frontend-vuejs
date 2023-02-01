<template>
  <v-card :height="laptop ? '80px' : '110px'" width="100%" flat class="d-flex align-center justify-space-between card">

    <div class="main-content d-flex flex-column">
        <h2 class="title">{{ item.title }}</h2>
        <div class="meta d-flex align-center">
            <p>{{ item.studentsCount }} students enrolled</p>
            <div class="spacer" ></div>
            <p>{{ item.sessionsCount }} sessions in total</p>
        </div>
    </div>

    <div class="actions">
        <div  to="session" @click="addTitleSession " class="link d-flex">
            <span>View all Sessions</span> 
            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12.5L5 7.5L0 2.5L1 0.5L8 7.5L1 14.5L0 12.5Z" fill="#FE3F49"/>
            </svg>
        </div>
    </div>

  </v-card>
</template>

<script>
import axios from 'axios'
import {className,upcomingSession,pastSession,studentSession,tutorSession } from '../../store/store.js'
export default {
    name: 'cardrow-vue',

    props: ['item'],

    data() {
      return {
          laptop: null,
          upcoming:[],
          past:[],
          all:[],
      }
    },

    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
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
        showForm(item) {
            this.$emit('show-form',item, true,'class')
        },

       async getSessions(id)
        {
              const {data} = await axios.get(`${this.$hostname}/api/tutor/sessionClass/${id}`)
               this.all = data.data.sessions
               sessionStorage.setItem('class_id',id)   

         },
        async addTitleSession() 
        {       
                await this.getSessions(this.item.id);
                className.commit('setClassName',this.item.title)    
                console.log(this.all)               
                this.all.forEach(session => {
                    var today=new Date()
                    if(Date.parse(session.date+' '+session.time) > today)
                    {
                    this.upcoming.push(session);
                    }else 
                    {
                    this.past.push(session);
                    }

                })
              

                upcomingSession.commit('setUpcomingSession',this.upcoming)
                pastSession.commit('setPastSession',this.past)
                studentSession.commit('setStudentSession',this.item.students)
                tutorSession.commit('setTutorSession',this.item.tutor.user.name)
                sessionStorage.setItem('sessionId',this.item.session)
                this.$router.push({name:'Session'}) 
          
        
        },
    },
}

</script>

<style scoped>


.link {
          display: flex;
          align-items: center;
          gap: 0;
          cursor: pointer;
      }
  
      .link > span{
          color: #FE3F49;
          font-size: 16px;
          font-weight: bold;
      }
  
      .link > svg {
          height: 16px;
          width: 16px;
          margin-bottom: 0;
      }
    .card {
        padding: 26px 48px;
        margin-bottom:20px;
    }

    .main-content {
        height: 100%;
    }

    .title {
        font-size: 18px !important;
        line-height: 32px;
        font-weight: 500;
        margin-bottom: 8px;
        text-align: left;
    }

    .meta > p {
        font-size: 16px;
        color: #492801;
        opacity: 0.5;
        margin-bottom: 0;
        font-weight: 500;
        letter-spacing: 1px;
    }

    .spacer {
        width: 5px;
        height: 5px;
        margin-inline: 10px;
        background-color: #492801;
        opacity: 0.5;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 40px;
    }
    
    .link {
        display: flex;
        align-items: center;
        gap: 0;
    }

    .link > span{
        color: #FE3F49;
        font-size: 16px;
        font-weight: bold;
    }

    .link > svg {
        height: 16px;
        width: 16px;
        margin-bottom: 0;
    }

    @media (max-width: 1400px) {
        .card {
            padding: 15px 26px;
        }

        .main-content {
            height: 100%;
        }

        .title {
            font-size: 16px !important;
            line-height: 24px;
            font-weight: 500;
            margin-bottom: 6px;
        }

        .meta > p {
            font-size: 12px;
        }

        .actions {
            gap: 20px;
        }

        .link > span{
            font-size: 12px;
        }

        .link > svg {
            height: 14px;
            width: 14px;
        }
    }
</style>
