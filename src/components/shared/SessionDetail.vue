<template>
  <div>
    <h2 class="head" >Session Details</h2>
    <br><br>
          <TextInputVue type="text" label="Title" size="full" readonly labelType="side" :modelValue="session.title" @update:modelValue="newValue => session.title = newValue"/>
          <TextInputVue style="height:200px;" type="textArea" size="full" readonly label="Description" labelType="side" :modelValue="session.description" @update:modelValue="newValue => session.description = newValue"/>

          <TextInputVue  type="text" label1="Date of session:" label2="Time of session:" size="half" readonly labelType="side" 
          :modelValue1="session.date" :modelValue2="session.time" 
           @update:modelValue2="newValue2 => session.date = newValue2" @update:modelValue1="newValue1 => session.date = newValue1"/>

    <div class="row rows">
        <div class="col-2 ">
            <br>
          <h3 >Class notes:</h3>
        </div>
        <div class="col-4 "><br>
          <a :href="fileURL" download="file.zip">
           Download PDF
     </a>
        </div>
    </div>

    <div class="row rows">
   
      <div class="col-8"></div>
        <a href="" class="col-2 a btn "> Delete session</a>
      <div class="col-2">
        <ButtonVue @click="$router.go(-1)" text="Back"/>
      </div> 
   </div>
  </div>
  

</template>

<script>
import TextInputVue from './TextInput.vue';
import {singleSession } from '../../store/store.js'
import { Form, } from 'vform';
import ButtonVue from '@/components/shared/Button.vue';
import axios from 'axios';
export default {
  name: 'session-detail-vue',



data() {
  return {
    session: new Form({
                title: '',
                description: '',
                date: '',
                time: '',
                notes:null,
            }),
            laptop:null,
            fileURL:null,
            proxyUrl:null,
            url:null,
          }
},

components:{
  ButtonVue,
  TextInputVue
},
created() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
    this.setInfo()
},
methods:{
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
          setInfo(){
            this.session.title=singleSession.getters.session.title
            this.session.date=singleSession.getters.session.date
            this.session.time=singleSession.getters.session.time
            this.session.description=singleSession.getters.session.description
            this.session.id=singleSession.getters.session.id
            this.getNotes()
          },
         async getNotes(){
               const {data}= await axios({url:this.$hostname+'/api/getSessionNotes/'+this.session.id,method:'get',responseType:'blob'})
               this.fileURL = data
                this.fileURL = window.URL.createObjectURL(new Blob([ this.fileURL]));
          }
}
}
</script>

<style scoped>
.c{
 opacity:0.5;   
 width:80%;   
 height:45px;
 color:#251605;
 background-color:white;   
 margin-right: 10%;
 padding-left:3%;

 padding-right:20%;
}
.rows{
  margin-left:3%;
  padding-top:0%;
  padding-top:1%;
  width:auto;

}
.btn {
    bottom: 25px;
    right: 30px;
  }

.head{
  margin-left:3%;
  margin-top:3%;  
}


.custom.v-text-field>.v-input__control>.v-input__slot:before {
    border-style: none;
}
.custom.v-text-field>.v-input__control>.v-input__slot:after {
    border-style: none;
}
.custom2.v-file-input>.v-input__control>.v-input__slot:before {
    border-style: none;
}
.custom2.v-file-input>.v-input__control>.v-input__slot:after {
    border-style: none;
}
.custom{
    background-color:white;
    height:50%;
    margin-top:1.5%;
    margin-left:8%;
}
.custom2{
    height:50%;
    margin-top:1.5%;
    margin-left:8%;
}
.custom.v-textarea>.v-input__control>.v-input__slot:before {
    border-style: none;
}
.custom.v-textarea>.v-input__control>.v-input__slot:after {
    border-style: none;
}
.lbl{
    height:70%;
    margin-top:1.5%;
    margin-left:35%;
}
.lbl.v-text-field>.v-input__control>.v-input__slot:before {
    border-style: none;
}
.lbl.v-text-field>.v-input__control>.v-input__slot:after {
    border-style:none;
}
.c2{
  margin-bottom:0;
}
/* unvisited link */
.a:link {
  color: red;
}

/* visited link */
.a:visited {
  color: red;
}

/* mouse over link */
.a:hover {
  color: red;
}

/* selected link */
.a:active {
  color: red;
}
.a{
  font-weight:bold;
  text-decoration:underline;
}
</style>