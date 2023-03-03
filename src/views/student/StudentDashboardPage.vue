<template>
  <div class="dashboard-wrapper ">
     <div class="root ">
     <div>
      <div class="withH">
        <div>
          <h2 style="font-size: large; position:absolute">Upcoming Classes</h2>
          <div>
            <a  @click="$router.push({name:'Class'})" style="float:right; align:right;padding-bottom:3px; border-bottom-width:1px;border-bottom-style:solid;  position: relative; right:3%; color:red;">View all upcoming classes </a>
          </div>
        </div>
        
         <div class="analytics d-flex flex-row" >
          <ClassCard v-for="(item,index) in classes" :key="index" :item="item"  />
         </div>
      </div>   
      <div class="withH">
        <div style="margin-top:5%">
          <h2 style="font-size: large; position:absolute">Watch Recordings</h2>
          <a @click="$router.push({name:'pastRecordings'})" style="float:right; align:right;padding-bottom:3px; border-bottom-width:1px;border-bottom-style:solid;  position: relative; right:3%; color:red;">View all Recordings </a>
        </div>
        
         <div class="analytics d-flex flex-row" >
          <RecordingCard v-for="(item, key) in recordings" :item="item" :key="key"/>
         </div>
      </div>   
    
    </div> 
          <div class="rest">
            <v-card style=" padding-top:10px;padding-left:10px;margin-left:10px; " :height="laptop ? '580px' : '536px'" flat :width="laptop ? '360px' : '450px'" class="border rounded bg-light">
              <a style="color:red; font-weight:bold; float:right; margin-right:40px; margin-top:20px;" >clear all</a>
                <MessagesVue v-for="(item, key) in messages" :item="item" :key="key" />
            </v-card>
          </div>  
        </div>  
        <loader v-if="loader"/>   
    </div>
</template>

<script>
import {toLocal} from './../../time'
import loader from '@/components/shared/loader.vue';
import RecordingCard from './RecordingCard.vue';
import MessagesVue from './Messages.vue';
import axios from 'axios';
import ClassCard from './ClassCard.vue';
export default {
 name:'student-dashboard-vue',
 data(){
  return{
    laptop:null,
    recordings:null,
    classes:null,
    messages:null,
    loader:false
  }
 },
 created(){
  this.dashboard_data()
 },
 methods:{
  async dashboard_data(){
            this.loader=true
            const {data} = await axios.get(`${this.$hostname}/api/student/dashboard`)
            this.recordings =data.data.recordings.sessions
            this.classes =data.data.classes.sessions
            this.messages=data.data.messages.inbox
            this.recordings.forEach(session=>{
              session.time=toLocal(session.time)
            })
            this.classes.forEach(session=>{
              session.time=toLocal(session.time)
            })
            this.recordings.forEach(session=>{
              session.time=toLocal(session.time)
            })
            this.loader=false
          }
},
 components:{
    MessagesVue,
    ClassCard,
    RecordingCard,
    loader
}
}
</script>

<style scoped>

.v {
    width: 100%;
    height:100%;
    padding-left: 70px;
    padding-right: 157px;
    padding-top:40px;
    z-index: -9999;
    overflow: hidden;
}

.circle {
  height: 5px;
  width: 5px;
  background-color: black;
  border-radius: 50%;
}
.dashboard-wrapper {
  padding: 4rem;
  width: 100%;
 

 
}
.withH{
  display: grid;
  grid-template-rows:20% 80%;
}
.analytics {
  gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
.border{
  border:1px solid #E1E1E1
 
}
.root{
  display:grid;
  grid-template-columns:70% 30%;
}

</style>