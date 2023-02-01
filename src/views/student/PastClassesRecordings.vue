<template>
  <div>
  <div class="rowws">
    <h2 style="margin-left:3%; margin-top:3%;">This month</h2>
    <div v-if="currentMonth" class="gridd" >
      <RecordingCardVue v-for="(item, key) in currentMonth" :item="item" :key="key"/>
    </div>  

    </div>
    <div v-if="previousMonth" class="rowws">
    <h2 style=" margin-left:3%; margin-top:3%;">Previous  month</h2>
    <div class="gridd">
      <RecordingCardVue v-for="(item, key) in previousMonth" :item="item" :key="key"/>
    </div>
  </div>

    </div>
    
  </template>
  
  <script>
  import RecordingCardVue from './RecordingCard.vue';
  import axios from 'axios';

  export default {
      name:'classes-recordings-vue',
      components:{
        RecordingCardVue,
      },
      
    data(){
         return {
           sessions:[],
           currentMonth:[],
           previousMonth:[],
         }
    },
    async created()
    {
      await this.get_classes()
      this.devide_Classes()
    },
    methods:{
              async get_classes()
              {
                const {data} = await axios.get(this.$hostname+'/api/student/pastClasses')
                this.sessions = data.data.sessions

               },

        devide_Classes(){
          this.currentMonth=[];
          this.previousMonth=[];
          if(this.sessions)
           {
            this.sessions.forEach(session => {
          

                    var today=new Date()
                    var day=new Date(session.date)
                    if(day.getMonth() == today.getMonth())
                    {
                    this.currentMonth.push(session);
                    }else 
                    {
                    this.previousMonth.push(session);
                    }

                })
             } 
        }
    }


  
  }
  </script>
  
  <style scoped>
  .gridd{

   display:grid;
   grid-template-columns:30% 30% 30%;
   grid-template-rows:(2,1fr);
   row-gap:3%;
   column-gap:3%;
   margin-left:3%;
  
  }
  .rowws{
    display:grid;
    grid-template-rows:8% 92% ;
    margin-bottom:3%;
  }

  </style>