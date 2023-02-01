<template>
    <div class="shape" :style="styles" :class="color">  
        <h2 class="text">{{char}}</h2>
    </div>
</template>
<script>
export default{
name:'avatar-vue',
props:['char','styles'],
methods:{
 click(){
    this.$emit('click')
 }

},
data(){
return {
    laptop:null,
    count:Math.floor(Math.random() * 4),
    colors:['blue','red','green','yellow'],
    color:null,

}
},
mounted(){
  this.color=this.colors[this.count]  
}
}
</script>
<style scoped>
 .blue{
    background-color: blue;
 }
 
 .red{
    background-color: red;
 }
 .green{
    background-color: green;
 }
 .yellow{
    background-color: yellow;
 }

 .shape {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.text{
    position:relative;
    margin-top:10px;
    color: white;
    text-transform: uppercase;

}
</style>