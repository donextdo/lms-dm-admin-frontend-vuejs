<template>
    <div>
            <label class="label">{{label}}</label>
            <textarea v-if="type=='textArea'" rows="8" style="height:140px; padding-top:3%;" :value="modelValue"
                    @input="$emit('update:modelValue2', $event.target.value)" @change="$emit('change')" v-bind="$attrs"    class="form-control"   cols="50">
                    </textarea>
            <input v-else-if="type!='select'" :type="type"
              class="form-control"             
              :placeholder="placeholder"
              :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"  v-bind="$attrs"
            >
            <div v-else style="position:relative">
               <div v-if="full" class="form-control griditfull"  @click="shift">
                 <div v-if="initial" class="item" >{{initial}}</div>
                 <div ref="img" class="item-img">&#9660;</div>
               </div> 
               <div v-else class="form-control gridit"  @click="shift">
                 <div v-if="initial" class="item" >{{initial}}</div>
                 <div ref="img" class="item-img">&#9660;</div>
               </div> 
               <div v-if="user" ref="outer" class="outer">
                  <div v-for="(item, index) in items" :key="index"
                  @click="apply(item)"  class="rows">{{item.user.name}}</div>   
               </div>
               <div v-else ref="outer" class="outer">
                  <div v-for="(item, index) in items" :key="index"
                  @click="apply(item)"  class="rows">{{item.name}}</div>   
               </div>
            </div>
    </div>  
 </template>
 <script>
 
 export default{
 props:{modelValue:{
         type:[String,Number,Object],
         default:""
      },
      initialValue:{
         type:[String,Object],
         default:null,
      },
      placeholder:{
         type:String,
         default:""
      },
      label:{
       type:[String ,Boolean],
       default:false  
     },
     type:{
         type:String,
         default:'text'
     },
      items:{
         type:Array,
         default:null
      },
      user:{
         type:Boolean,
         default:false
      },
      full:{
         type:Boolean,
         default:false
      }
 },
 data(){return{
     initial:null
 }},
 mounted(){
  if(this.type && this.type=='select')
  {
   this.initialValue ? this.user ? this.initial=this.initialValue.user.name : this.initial= this.initialValue.name : null
   this.initialValue ?  this.$emit('update:modelValue',this.initialValue.id): null
  
  } 
  else{
   this.initialValue ?  this.$emit('update:modelValue',this.initialValue): null

  }  
 

 },
 
 methods:{
   shift(){
    if(   this.$refs.outer.style.display=='block')
    {
      this.$refs.outer.style.display='none'
      this.$refs.img.removeAttribute("class", "rotated-image");
      this.$refs.img.setAttribute("class", "item-img");



    } 
    else
    {
      this.$refs.img.setAttribute("class", "rotated-image");
      this.$refs.outer.style.display='block'

    } 
   },
   apply(item)
   {
     this.shift() 
     this.user  ? this.initial = item.user.name : this.initial = item.name
     this.$emit('update:modelValue', item.id)
   },
 }
 
 }
 </script>
 <style scoped>
 .form-control {
    width: 100%;
    gap: 20px;
    background-color:#FEF3EC;
    height:45px;
    color:rgba(100,100,100,0.5);
    padding-left:13px;
    font-size: 12px !important;
    border-radius: var(--brd,5px);
    cursor: pointer;
  }
  textarea:focus, select:focus, input:focus{
    outline: none;
}
.gridit{
  display: grid;
  grid-template-columns:75% 25%; 
}
.griditfull{
  display: grid;
  grid-template-columns:89% 11%; 
}
.label {
    font-size: 12px !important;
    font-weight: 500;
    line-height: 12px;
    color: #251605;
    margin: 0;
  }
  .rows{
    width: 100%;
    gap: 12px;
    background-color:#fff;
    height:45px;
    padding-left:5%;
    font-size: 12px !important;
    z-index: 99;
    padding-top: 12px;
    position: relative;
    cursor:pointer;
   }
   .rows:hover{
      background-color:lightblue;
      color: gray;
   }
   .item{
      color:black;
      font-size: 12px;
      padding-top:12px;
      opacity: 0.5;
   }
   .item-img{
      font-size: 12px;
      padding-top:12px;
     color:#FFA500;
   }
   .outer{
      position:absolute; 
      border-left:1px solid lightgray;
      border-right:1px solid lightgray ;
       border-bottom: 1px solid lightgray; 
       z-index: 99;
       display:none;
       width:100%;
       max-height:230px;
       overflow: auto;
   }
   .rotated-image {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
          transform-origin: 12.5% 50%;
          color:#FFA500;
      font-size: 12px;
      padding-top:12px;
      opacity: 0.5;
}
 </style>