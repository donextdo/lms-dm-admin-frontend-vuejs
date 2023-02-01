<template>
  <div> <br>
         <h3>Upcoming Sessions</h3>
         <br>
         <section class="hero d-flex flex-column">
           <CommingSessionRow v-for="(item, index) in upcomingSession.getters.session" :tutor="tutorSession.getters.tutor" :item="item" :key="index" @one_session="one_session"  @show-form="toggleForm"/>
         </section> 
         <br>
         <h3>Past Sessions</h3>
         <br>
         <section class="hero d-flex flex-column">
           <PastSessionRow v-for="(item, index) in pastSession.getters.session" :tutor="tutorSession.getters.tutor" :item="item" :key="index"  @one_session="one_session" />   
        </section>
        
        <SessionForm :item="items" :type="type" v-if="form" @close-form="toggleForm"></SessionForm>
        <div class="row">
        <div class="col-10">

        </div>
        <!-- <div class="col-2 my-2">
          <Button  text="Back" :transparent="true"  @click="$router.go(-1)"/>
        </div> -->
      </div>
  </div> 
</template>

<script>
// import Button from '@/components/shared/Button.vue'
import {upcomingSession,tutorSession,pastSession,singleSession} from '../../store/store.js'
import SessionForm from '@/components/shared/SessionForm.vue'
import CommingSessionRow from '@/components/shared/CommingSessionRow.vue'
import PastSessionRow from '@/components/shared/PastSessionRow.vue'

export default {
    name: 'sessionRow-vue',
    components: {
    CommingSessionRow,
    PastSessionRow,
    SessionForm,
    // Button
},
    props: ['item'],

    data() {
      return {
          type:null,
          items:null,
          laptop: null,
          upcomingSession,
          tutorSession,
          pastSession,
          form:null,
      }
    },

    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
        if(pastSession.getters.session=="")
        {
            upcomingSession.commit('setUpcomingSession',JSON.parse(sessionStorage.getItem('upcoming')))
            pastSession.commit('setPastSession',JSON.parse(sessionStorage.getItem('past')))

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
        one_session(one){
          singleSession.commit('setSingleSession',one)  
        },
        toggleForm(type,item) {
          this.form = !this.form
          this.type=type
          this.items=item
          
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
    .hero {
    overflow-y: scroll;
    height: min-content;
    gap: 35px;
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
