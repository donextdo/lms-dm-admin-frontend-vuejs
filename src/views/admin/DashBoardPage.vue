<template>
  <div class="dashboard-wrapper">
    <div class="analytics d-flex flex-column">

      <v-card :height="laptop ? '180px' : '236px'" :width="laptop ? '360px' : '450px'" flat class="card-lg rounded-xl" >
        <div class="combo-box">
          <v-combobox
              loading="false"
              color="#FFA500"
              background-color="rgba(255, 165, 0, 0.2)"
              :items="paymentTypes"
              rounded
              v-model="paymentType"
          ></v-combobox>
        </div>
        
        <h4 class="card-title">{{ paymentType }}</h4>
        <h2 class="data">LKR 250,000</h2>

        <router-link :to="{name: 'Payments'}" class="link d-flex">
            <span>Payment Statistics</span> 
            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12.5L5 7.5L0 2.5L1 0.5L8 7.5L1 14.5L0 12.5Z" fill="#FE3F49"/>
            </svg>
        </router-link>
      </v-card>

      <v-card :height="laptop ? '180px' : '236px'" :width="laptop ? '360px' : '450px'" flat class="card-lg rounded-xl" >
        <div class="combo-box">
          <v-combobox
              loading="false"
              color="#FFA500"
              background-color="rgba(255, 165, 0, 0.2)"
              :items="studentTypes"
              rounded
              v-model="studentType"
          ></v-combobox>
        </div>
        
        <h4 class="card-title">{{ studentType }}</h4>
        <h2 class="data">{{studentType=='Local'? studentCount.local:studentType=='International'?studentCount.global:studentCount.local+studentCount.global}}</h2>

      </v-card>


      <v-card :height="laptop ? '180px' : '236px'" :width="laptop ? '360px' : '450px'" flat class="card-lg rounded-xl" >
        <div class="combo-box">
          <v-combobox
              loading="false"
              color="#FFA500"
              background-color="rgba(255, 165, 0, 0.2)"
              :items="classTypes"
              rounded
              v-model="classType"
          ></v-combobox>
        </div>
        
        <h4 class="card-title">{{ classType }}</h4>
        <h2 class="data">{{classType=='Local'? classesCount.local:classType=='International'?classesCount.global:classesCount.local+classesCount.global}}</h2>


      </v-card>

    </div>

    <div class="classes">

      <h2>Upcoming Classes Today</h2>

      <div class="classes-wrapper d-flex flex-column">
        <Class v-for="(upcomingClass, index) in upcomingClasses" :upcomingClass="upcomingClass" :key="index" />
      </div>

    </div>

    <div class="requests">

      <h2>New Student Requests</h2>

      <header class="header">
        <div class="th">
            <span>Students</span>
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.50765 8H1.49235C1.21539 8.00043 0.943985 7.9164 0.70954 7.75763C0.475096 7.59886 0.287202 7.37185 0.167607 7.10287C0.0276073 6.78372 -0.0263148 6.42864 0.0119851 6.0781C0.0502851 5.72756 0.179267 5.39565 0.384232 5.12021L3.89188 0.544835C4.02954 0.373815 4.19972 0.236656 4.39091 0.142653C4.5821 0.04865 4.78982 0 5 0C5.21018 0 5.4179 0.04865 5.60909 0.142653C5.80028 0.236656 5.97046 0.373815 6.10812 0.544835L9.61577 5.12021C9.82073 5.39565 9.94972 5.72756 9.98802 6.0781C10.0263 6.42864 9.97239 6.78372 9.83239 7.10287C9.7128 7.37185 9.5249 7.59886 9.29046 7.75763C9.05602 7.9164 8.78461 8.00043 8.50765 8Z" fill="black"/>
            <path d="M1.49235 12H8.50765C8.78461 11.9996 9.05602 12.0836 9.29046 12.2424C9.5249 12.4011 9.7128 12.6282 9.83239 12.8971C9.97239 13.2163 10.0263 13.5714 9.98801 13.9219C9.94971 14.2724 9.82073 14.6043 9.61577 14.8798L6.10812 19.4552C5.97046 19.6262 5.80028 19.7633 5.60909 19.8573C5.4179 19.9514 5.21018 20 5 20C4.78982 20 4.5821 19.9514 4.39091 19.8573C4.19972 19.7633 4.02954 19.6262 3.89188 19.4552L0.384231 14.8798C0.179266 14.6043 0.0502844 14.2724 0.0119839 13.9219C-0.0263157 13.5714 0.0276079 13.2163 0.167608 12.8971C0.287203 12.6282 0.475097 12.4011 0.70954 12.2424C0.943985 12.0836 1.21539 11.9996 1.49235 12Z" fill="black"/>
            </svg>
        </div>

        <div class="th">
            <span>Registered Date</span>
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.50765 8H1.49235C1.21539 8.00043 0.943985 7.9164 0.70954 7.75763C0.475096 7.59886 0.287202 7.37185 0.167607 7.10287C0.0276073 6.78372 -0.0263148 6.42864 0.0119851 6.0781C0.0502851 5.72756 0.179267 5.39565 0.384232 5.12021L3.89188 0.544835C4.02954 0.373815 4.19972 0.236656 4.39091 0.142653C4.5821 0.04865 4.78982 0 5 0C5.21018 0 5.4179 0.04865 5.60909 0.142653C5.80028 0.236656 5.97046 0.373815 6.10812 0.544835L9.61577 5.12021C9.82073 5.39565 9.94972 5.72756 9.98802 6.0781C10.0263 6.42864 9.97239 6.78372 9.83239 7.10287C9.7128 7.37185 9.5249 7.59886 9.29046 7.75763C9.05602 7.9164 8.78461 8.00043 8.50765 8Z" fill="black"/>
            <path d="M1.49235 12H8.50765C8.78461 11.9996 9.05602 12.0836 9.29046 12.2424C9.5249 12.4011 9.7128 12.6282 9.83239 12.8971C9.97239 13.2163 10.0263 13.5714 9.98801 13.9219C9.94971 14.2724 9.82073 14.6043 9.61577 14.8798L6.10812 19.4552C5.97046 19.6262 5.80028 19.7633 5.60909 19.8573C5.4179 19.9514 5.21018 20 5 20C4.78982 20 4.5821 19.9514 4.39091 19.8573C4.19972 19.7633 4.02954 19.6262 3.89188 19.4552L0.384231 14.8798C0.179266 14.6043 0.0502844 14.2724 0.0119839 13.9219C-0.0263157 13.5714 0.0276079 13.2163 0.167608 12.8971C0.287203 12.6282 0.475097 12.4011 0.70954 12.2424C0.943985 12.0836 1.21539 11.9996 1.49235 12Z" fill="black"/>
            </svg>
        </div>

      </header>

      <div class="requests-wrapper d-flex flex-column">
        <Request v-for="(student, index) in joinRequests" @showProfile="showProfile" :student="student" :key="index"/>
      </div>
    </div>
    <StudentRequestProcess @refreshRequests="refreshRequests" v-if="form"  @closeProfile="closeProfile" :student="student" />
  </div>
</template>

<script>
import utilizeTime from '../../time';
import Class from '@/components/shared/Class.vue'
import Request from '@/components/admin/Request.vue'
import StudentRequestProcess from '@/components/shared/StudentRequestProcess.vue'
import axios from 'axios'
export default {
    name: 'dashboard-vue',

    components: {
      Class,
      Request,
      StudentRequestProcess

    },

    data() {
      return {
        laptop:null,
        student:null,
        paymentType: 'All Payments',
        studentType: 'All Students',
        classType: 'All Classes',
        studentCount:{local:0,global:0},
        classesCount:{local:0,global:0},
        paymentTypes: ['All Payments', 'Local', 'International'],
        studentTypes: ['All Students', 'Local', 'International'],
        classTypes: ['All Classes', 'Local', 'International'],
        form:false,
        upcomingClasses: [
          
        ],

        joinRequests: [
 
        ]
      }
    },

    created() {
          window.addEventListener('resize', this.checkScreen)
          this.checkScreen()
          this.dashboard_data()
          utilizeTime('9:30PM')
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
          showProfile(student){
            this.student=student
            this.form=true
          },
          closeProfile(){
            this.form=false
          },
          async dashboard_data(){
            const {data} = await axios.get(`${this.$hostname}/api/admin/dashboard`)
               this.upcomingClasses = data.data.upcoming.sessions
               this.joinRequests = data.data.requests.student
               this.studentCount = data.data.students
               this.classesCount = data.data.classes
          },
          async refreshRequests(){
            const {data} = await axios.get(`${this.$hostname}/api/admin/refreshRequests`)
               this.joinRequests = data.data.requests.student
               this.closeProfile()
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