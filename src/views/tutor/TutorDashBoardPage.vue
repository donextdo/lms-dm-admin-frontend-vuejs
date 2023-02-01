<template>
  <div class="dashboard-wrapper">
    <div class="analytics d-flex flex-column">

      <v-card :height="laptop ? '180px' : '236px'" :width="laptop ? '360px' : '450px'" flat class="card-lg rounded-xl" >
        <div class="combo-box">
        </div>
        
        <h4 class="card-title">studentCount</h4>
        <h2 class="data">{{studentCount}}</h2>

      </v-card>


      <v-card :height="laptop ? '180px' : '236px'" :width="laptop ? '360px' : '450px'" flat class="card-lg rounded-xl" >
        <div class="combo-box">
        </div>
        
        <h4 class="card-title">SessionCount</h4>
        <h2 class="data">{{classCount}}</h2>

      </v-card>

    </div>

    <div class="classes">

      <h2>Upcoming Classes Today</h2>

      <div class="classes-wrapper d-flex flex-column">
        <Class v-for="(upcomingd, index) in upcoming" :upcomingClass="upcomingd" :key="index" />
      </div>

    </div>    
  </div>
</template>

<script>

import Class from '@/components/shared/Class.vue'
import axios from 'axios'
export default {
    name: 'tutordashboard-vue',

    components: {
      Class,
    },

    data() {
      return {
        laptop:null,
        paymentType: 'All Payments',
        studentType: 'All Students',
        classType: 'All Classes',
        studentCount:null,
        classCount:null,
        upcoming:null,
        paymentTypes: ['All Payments', 'Local', 'International'],
        studentTypes: ['All Students', 'Local', 'International'],
        classTypes: ['All Classes', 'Local', 'International'],
        
        upcomingClasses: [
          {
            title: 'Grade 7 Music - Canada',
            time: '1:00 PM',
            desc: 'Session 12 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            title: 'Grade 6 Dancing - Canada',
            time: '6:00 PM',
            desc: 'Session 12 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            title: 'Grade 8 Music - Canada',
            time: '7:00 PM',
            desc: 'Session 12 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        ],

        joinRequests: [
          {
            name: 'Freya Allan',
            regDate: '07th May 2022'
          },
          {
            name: 'Millie Bobby Brown',
            regDate: '05th June 2022'
          },
          {
            name: 'Aroshi Kuruppu',
            regDate: '05th August 2022'
          },
          {
            name: 'Shanaya Jayakodi',
            regDate: '05th October 2022'
          }
        ]
      }
    },

    created() {
          window.addEventListener('resize', this.checkScreen)
          this.checkScreen()
          this.dashboard_data()
      },
  
      methods: {
          checkScreen() {
              this.windowWidth = window.innerWidth;
  
              if(this.windowWidth < 1600) {
                  this.laptop = true
                  return
              }
              else {
                  this.laptop = false
              }
          },
         async dashboard_data(){
            const {data} = await axios.get(`${this.$hostname}/api/tutor/dashboard`)
            this.studentCount =data.data.studentCount
            this.classCount =data.data.classCount
            this.upcoming =data.data.upcoming
          }
      },
}

</script>

<style scoped>

.dashboard-wrapper {
  padding: 8rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr)
}

.analytics {
  gap: 1.5rem;
}

.card-lg {
  border: 1px solid #FFA500;
  position: relative;
  padding: 32px 25px;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
}

.v-input {
  width: 200px;
}

.combo-box {
  position: absolute;
  top: .6rem;
  right: 1.2rem;
}

.card-title {
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.data {
  font-size: 3rem;
  color: #492801;
  line-height: 2rem;
  font-weight: bold;
}

.link {
    display: flex;
    align-items: center;
    gap: 0;
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    right: 1.2rem;
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



.classes > h2 {
    color: #000;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1px;
    margin-bottom: 3rem;
}

.classes-wrapper {
  gap: 2rem;
}

.requests {
  grid-column: 1/-1;
  margin-top: 3rem;
}

.requests > h2 {
  color: #000;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 1px;
  margin-bottom: 3rem;
}

.header {
    padding-inline: 1.5rem;
    width: 100%;
    height: 2.5rem;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin-bottom: 1rem;
  }

  .th {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 13px;
    opacity: 0.5;
  }

  .th:first-child {
    grid-column: 1/4;
  }

  .th:last-child {
    grid-column: 4/-1;
  }

  .th > span {
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
  }

  .th > svg {
    height: 16px;
  }

  .requests-wrapper {
    gap: 2rem;
  }


@media (max-width: 1600px) {
  .dashboard-wrapper {
    padding: 4rem 4rem 4rem 5rem;
  }

  .analytics {
    gap: 1rem;
  }

  .card-lg {
    padding: 24px 16px;
    padding-left: 2rem;
  }

  .v-input {
    width: 160px;
    font-size: .8rem !important;
    font-weight: 500 !important;
  }

  .combo-box {
    top: .4rem;
    right: .8rem;
  }

  .card-title {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .data {
    font-size: 2rem;
  }

  .link {
      bottom: .8rem;
      right: .8rem;
  }

  .link > span{
      font-size: 12px;
  }

  .link > svg {
      height: 14px;
      width: 14px;
  }


  .classes > h2 {
      font-size: 18px;
      margin-bottom: 2rem;
  }

  .classes-wrapper {
    gap: 1rem;
  }


  .requests > h2 {
      font-size: 18px;
      margin-bottom: 2rem;
  }


  .th > span {
    font-size: 16px;
    font-weight: 700;
    line-height: 32px;
  }

  .th > svg {
    height: 16px;
  }

  .requests-wrapper {
    gap: 1rem;
  }
}
</style>