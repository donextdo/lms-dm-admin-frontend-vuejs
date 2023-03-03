<template>
  <div>
    <h2 class="head" >Session Details</h2>
    <br><br>
          <TextInputVue type="text" label="Title" size="full"  labelType="side" :modelValue="session.title" @update:modelValue="newValue => session.title = newValue"/>
          <TextInputVue style="height:200px" type="textArea" size="full"  label="Description" labelType="side" :modelValue="session.description" @update:modelValue="newValue => session.description = newValue"/>

          <TextInputVue  type1="date" type2="time" label1="Date of session:" label2="Time of session:" size="half"  labelType="side" 
          :modelValue1="session.date" :modelValue2="session.time" 
           @update:modelValue2="newValue2 => session.time = newValue2" @update:modelValue1="newValue1 => session.date = newValue1"/>

    <div class="row rows">
        <div class="col-2 ">
            <br>
          <h3 >Class notes:</h3>
        </div>
        <div class="col-4 "><br>
          <FileUpload @getFiles="getFiles" style="--bg:white" />
        </div>
    </div>
    <v-alert
      class="alert"
      :value="success"
      type="success"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >Session {{edit? 'reset':'set'}} successfully</v-alert>

    <v-alert
      class="alert"
      :value="error"
      type="error"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >Something went wrong!</v-alert>
    <div class="row rows">
   
      <div class="col-6"></div>
      <div class="col-2">
        <ButtonVue style="width:max-content" :transparent="true" text="Delete Session" @click="deleteSession" />
       </div>
      <div class="col-2">
        <ButtonVue @click="save" style="width:max-content" text="Save Changes"/>
      </div> 
      <!-- <div class="col-2">
        <ButtonVue @click="$router.go(-1)" text="Back"/>
      </div>  -->
   </div>
  

  </div>
</template>

<script>
import {upcomingSession,tutorSession,pastSession,studentSession} from '../../store/store.js'
import FileUpload from './FileUpload.vue';
import axios from 'axios';
import ButtonVue from '@/components/shared/Button.vue';
import TextInputVue from './TextInput.vue';
import {singleSession } from '../../store/store.js'
import { Form, } from 'vform';
import { toStandard,toLocal } from '@/time';
  window.Form = Form;

export default {
  name: 'add-or-edit-session-vue',
  props: ['edit'],



data() {
  return {
      session: new Form({
                title: '',
                class1_id:'',
                description: '',
                date: '',
                time: '',
            }),
            notes:[],
            sessionId:null,
            userType:null,
            laptop:null,
            error:null,
            success:null,
            sessionData: new FormData(),
            all:null,
            upcoming:[],
          past:[],
  }
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
components:{
  ButtonVue,
  TextInputVue,
  FileUpload
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
            this.sessionId=singleSession.getters.session.id


          },
          getFiles(files){
           this.notes=files
           
          },
          setFormData(){
            this.sessionData.append('title',this.session.title),
            this.sessionData.append('class1_id',sessionStorage.getItem('class_id'))
            this.sessionData.append('description',this.session.description),
            this.sessionData.append('date',this.session.date),
            this.sessionData.append('time',this.session.time),
            this.notes.forEach((file)=>{
               this.sessionData.append('file',file)

             })
          },
          save()
          {
            this.setFormData()
            if(this.edit==true)
            {
              this.editSession()
            }
            else
            {
             this.addSession()
            }
          },
           async  editSession()
          {

            this.sessionData.append('time',toStandard(this.session.time))
           this.session.class1_id = sessionStorage.getItem('class_id')
            await axios
                .post(this.$hostname+"/api/"+this.userType+"/session/"+this.sessionId,this.sessionData)
                .then(response => {
                  console.log(response)
                  this.success = true
                  this.addTitleSession()
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
          async addSession()
          {
            
            this.sessionData.append('time',toStandard(this.session.time))
            this.session.class1_id = sessionStorage.getItem('class_id')
            await axios
                .post(this.$hostname+"/api/"+this.userType+"/session",this.sessionData)
                .then(response => {
                  this.success = true
                  this.addTitleSession()
                        setTimeout(() => {
                          this.success = false
                        }, 2000) 
                  console.log(response)
                })

                .catch(error => {
                  console.log(error)
                  this.error = true
                        setTimeout(() => {
                          this.error = false
                        }, 2000) 
                });
          },
          async  deleteSession()
          {
            this.session.class1_id = sessionStorage.getItem('class_id')
            await axios
                .delete(this.$hostname+"/api/"+this.userType+"/session/"+this.sessionId)
                .then(response => {
                  console.log(response)
                  this.success = true
                  this.addTitleSession()
                        setTimeout(() => {
                          this.success = false
                          this.$router.go(-1)
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

          async getSessions(id)
        {
              const {data} = await axios.get(`${this.$hostname}/api/admin/sessionClass/${id}`)
               this.all = data.data.sessions
         },
        async addTitleSession() 
        {       
                await this.getSessions(sessionStorage.getItem('class_id'));
                console.log(this.all)               
                this.all.forEach(session => {
                  session.time=toLocal(session.time)
                    var today=new Date()
                    if(Date.parse(session.date+' '+session.time) > today)
                    {
                    this.upcoming?.push(session);
                    }else 
                    {
                    this.past?.push(session);
                    }

                })
              

                upcomingSession.commit('setUpcomingSession',this.upcoming)
                pastSession.commit('setPastSession',this.past)
                studentSession.commit('setStudentSession',this.item?.students)
                tutorSession.commit('setTutorSession',this.item?.tutor.user.name)
                sessionStorage.setItem('sessionId',this.item?.session)
          
        
        },
}

}
</script>

<style scoped>

  .rows{
  margin-left:3%;
  padding-top:0%;
  padding-top:1%;
  width:auto;

}
.inputtype{
      height:45px;
      background-color:white;
      outline:0px !important;
    box-shadow: none !important;
    width:100%;

    }

.btn {
    bottom: 25px;
    right: 30px;
  }

.head{
  margin-left:3%;
  margin-top:3%;  
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
    background-color:white;
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