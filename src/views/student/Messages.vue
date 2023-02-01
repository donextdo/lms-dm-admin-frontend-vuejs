<template>
  <div class="grid">
    <div id="day" style="color:#FFA500;font-weight:bold; display:grid;grid-template-rows:20% 80%"><p style="font-size:16px ;">{{month}}</p><p style="font-size:40px ;">{{weekDay}}</p></div>
    <p id="message" style="padding-left:10%;font-weight:bold;">{{this.item.message}}</p>
  </div>
</template>

<script>
export default {
name:'meassages-vue',
props:['item'],
created(){
    this.arrangeFormat()
},
data(){
 return {
  weekDay:null,
  month:null,
 }
},
methods:{
  arrangeFormat(){
     this.weekDay = new Date(this.item.created_at).toLocaleDateString('en-us', { day:"numeric"});
     this.month = new Date(this.item.created_at).toLocaleDateString('en-us', { month:"long"});

  }
}
}
</script>

<style>
.grid{
  display: grid;
  grid-template-columns:20% 80%;  
  margin-top:30%;
  margin-left:5%;
}
</style>