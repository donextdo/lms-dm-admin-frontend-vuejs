<template>
    <div>
      <v-alert
      class="alert"
      :value="success"
      type="success"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >Session reset successfully</v-alert>

    <v-alert
      class="alert"
      :value="error"
      type="error"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >Something went wrong!</v-alert>
      <h2 class="head" >Session Details</h2>
      <br><br>
     <div class="row ">
      <TextInputVue label1="Date of Session" label2="Time of session" size="half" style="width:100%; --bgcol:#FEF3EC;" labelType="side" type="text" 
      :modelValue1="session.date" readonly @update:modelValue1="newValue => session.date = newValue"
      :modelValue2="session.time"  @update:modelValue2="newValue => session.time = newValue"/>

    </div>
    <div class="row ">
          <TextInputVue label="Recording Link" style="width:100%" labelType="side" type="text" :modelValue="session.recording_link" @update:modelValue="newValue => session.recording_link = newValue"/>
    </div>
    <div class="row " >
        <div  style="margin-left:3%" class="col-2">
            <br>
          <h3 >Class notes:</h3>
        </div>
        <div class="col-8 "><br>
          <a :href="$hostname+'/Student_status/img01162023144436.png'" download>
          Download PDF
          </a>
        </div>
    </div>
      <div class="row" style="margin-top:10%">
        <div class="col-6"></div>
        <div class="col-3">    
          <a href="" class="a"> Delete session</a>
        </div>
        <div class="col-3">
          <v-btn color="#ffa500" :width="laptop ? '100px' : '142px'" :height="laptop ? '40px' : '62px'" elevation="0" class="btn rounded-lg " @click="save">Save Changes</v-btn>
        </div>
       
      </div>
     
    
    </div>
  </template>
  
  <script>
  import TextInputVue from './TextInput.vue';
  import {singleSession } from '../../store/store.js'
  import { Form, } from 'vform';
    window.Form = Form;
  
  export default {
    name: 'add-or-edit-session-vue',
    props: ['edit'],
  
  
  
  data() {
    return {
        session: new Form({
                  recording_link:'',
                  date: '',
                  time: '',
                 // notes:null,
              }),
              sessionId:null,
              userType:null,
              laptop:null,
              success:null,
              error:null,

    }
  },
  components:{
    TextInputVue
  },
  created() {
      window.addEventListener('resize', this.checkScreen)
      this.checkScreen()
      if(this.edit==true)
      {
        this.setInfo()
      }

      if(sessionStorage.getItem('role')==1)
          {
            this.userType='admin'
          }else
          {
            this.userType='tutor'
          }
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
              this.session.notes=singleSession.getters.session.notes
              this.sessionId=singleSession.getters.session.id
  
  
            },
          
           async save()
            {
             await this.session
                  .put(this.$hostname+"/api/"+this.userType+"/recording/"+this.sessionId)
                  .then(response => {
                    console.log(response)
                    this.success = true
                        setTimeout(() => {
                          this.success = false
                        }, 2000)
                  })
  
                  .catch(error => {
                     console.log(error)
                     this.error = true
                        setTimeout(() => {
                          this.error = false
                        }, 2000)
                  });
            },
   
  }
  
  }
  </script>
  
  <style scoped>
  
  .inputtype{
        height:45px;
        background-color:white;
        outline:0px !important;
      box-shadow: none !important;
      width:100%;
  
      }
  
  .btn {
      font-size: 18px;
      text-transform: capitalize;
      font-weight: bold;
      bottom: 25px;
      right: 100;
    }
  
  .head{
    margin-left:3%;
    margin-top:3%;  
  }
  .row{
    margin-left:3%;
    padding-top:0%;
    padding-top:0%;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .c{
   margin:0;
   padding-left:0;
   padding-right:20%;
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
      background-color:white;
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
      padding-left:4%;
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