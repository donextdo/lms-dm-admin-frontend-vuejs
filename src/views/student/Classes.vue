<template>
  <div class="gridd">
    <ClassCardVue v-for="(item,index) in sessions" :key="index" :item="item"  ></ClassCardVue>
    <loader v-if="loader"/>
  </div>
</template>

<script>
import loader from '@/components/shared/loader.vue';
import axios from 'axios';
import ClassCardVue from './ClassCard.vue';
export default {
    name:'classes-vue',
    components:{
      ClassCardVue,
      loader
    },

    data(){
         return {
           sessions:{},
           loader:false
         }
    },
    created()
    {
    this.get_classes()
    },
    methods:{
     async  get_classes()
       {
        this.loader=true
       await axios.get(this.$hostname+'/api/student/classes')
        .then(response => {
                    if (response.status == 200) {
                      this.loader=false
                        this.sessions=response.data.data.sessions;
                    }

                })
                .catch(error => {
                  this.loader=false
                    console.log(error);
                });
       }
    }

}
</script>

<style scoped>
.gridd{
 display:grid;
 grid-template-columns:30% 30% 30%;
 grid-template-rows:(2,1fr);
 row-gap:5%;
 column-gap:3%;
 margin-left:3%;

}
</style>