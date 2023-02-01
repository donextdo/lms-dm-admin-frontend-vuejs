<template>
  <div class="gridd">
    <ClassCardVue v-for="(item,index) in sessions" :key="index" :item="item"  ></ClassCardVue>
    
  </div>
</template>

<script>
import axios from 'axios';
import ClassCardVue from './ClassCard.vue';
export default {
    name:'classes-vue',
    components:{
      ClassCardVue,
    },

    data(){
         return {
           sessions:{}
         }
    },
    created()
    {
    this.get_classes()
    },
    methods:{
     async  get_classes()
       {
       await axios.get(this.$hostname+'/api/student/classes')
        .then(response => {
                    if (response.status == 200) {
                        this.sessions=response.data.data.sessions;
                    }

                })
                .catch(error => {
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