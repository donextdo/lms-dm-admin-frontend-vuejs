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
        <div class="link link-icon" @click="showForm(item,type)">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.474 3.40783L15.592 5.52483M14.836 1.54283L9.109 7.26983C8.81309 7.56533 8.61128 7.94181 8.529 8.35183L8 10.9998L10.648 10.4698C11.058 10.3878 11.434 10.1868 11.73 9.89083L17.457 4.16383C17.6291 3.99173 17.7656 3.78742 17.8588 3.56256C17.9519 3.33771 17.9998 3.09671 17.9998 2.85333C17.9998 2.60994 17.9519 2.36895 17.8588 2.14409C17.7656 1.91923 17.6291 1.71492 17.457 1.54283C17.2849 1.37073 17.0806 1.23421 16.8557 1.14108C16.6309 1.04794 16.3899 1 16.1465 1C15.9031 1 15.6621 1.04794 15.4373 1.14108C15.2124 1.23421 15.0081 1.37073 14.836 1.54283V1.54283Z" stroke="#492801" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 13V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3H6" stroke="#492801" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
            <div class="link delete-icon" @click="$emit('delete', item.id)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>

    </div>

  </v-card>
</template>

<script>
import {toLocal} from './../../time'
import axios from 'axios'
import {className,upcomingSession,pastSession,studentSession,tutorSession } from '../../store/store.js'
export default {
    name: 'cardrow-vue',

    props: ['item','type'],

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
              sessionStorage.setItem('class_id',id)
              const {data} = await axios.get(`${this.$hostname}/api/admin/sessionClass/${id}`)
               this.all = data.data.sessions
         },
        async addTitleSession() 
        {       
                await this.getSessions(this.item.id);
                className.commit('setClassName',this.item.title)    
                console.log(this.all)               
                this.all.forEach(session => {
                    session.time=toLocal(session.time)
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
                this.$router.push('session') 
          
        
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
