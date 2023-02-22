<template>

  
    <div class="overlay">
    
      <v-alert
      class="alert"
      :value="success"
      type="success"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >  successfully</v-alert>

    <v-alert
      class="alert"
      :value="error"
      type="error"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >{{errormsg}}</v-alert>
    
        <v-card :height="laptop ? '600px' : '730px'" :width="laptop ? '700px' : '720px'" class="d-flex flex-column align-center card rounded" >

          <h4 class="title">New Registration</h4>
          <div class="rowsingle">
            <h5 class="hed5" >Student Details</h5>
          </div>

          <div class="rows">
            <div class="rowsingle" >
                <p class="para">Student Name</p>
                <h5 >{{student.user.name}}</h5>
                <p class="para">Mobile Number</p>
                <h5>{{student.user.contact_no}}</h5>
            </div>  
            <div class="rowsingle" >
                <p class="para">Country</p>
                <h5 >{{student.country.name}}</h5>
                <p class="para">Email</p>
                <h5 >{{student.user.email}}</h5>    
            </div>
          </div>
          <div  class="rowsingle" >
             <div class="line"></div>
          </div>  
          <div class="rowsingle">
            <h5 class="hed5" >Enrollment Details</h5>
          </div>

          <div class="rows">
            <div class="rowsingle" >
                <p class="para">Subject</p>
                <div>
                  <h5 v-for="(item, index) in studentIndetail" :key="index" >{{item.subject}}</h5>
                </div>
            </div>  
          </div>
          <div class="rows">
            <div class="rowsingle" >
                <p class="para">Knowledge</p>
            </div>  
          </div>
          <div class="rowsingle">
            <h5  >knowledge</h5>
          </div>
          <div  class="rowsingle" >
             <div class="line"></div>
          </div>     
       
          <div class="rowsingle" >
              <div class=" form-control" >
                <ModelTextInputVue v-if="classes"
                :initialValue="temporyClass ? temporyClass : classes.class1[0]"
                type="select" :label="'Select Batch'" :items="classes.class1" 
                :modelValue="member.class1_id" @update:modelValue="newValue => member.class1_id = newValue"
                
                />
              </div>
          </div>
         <div class="rowsingle" >      
              <div class=" form-control" >
                <ModelTextInputVue placeholder="Reason"
                type="text" label="Mention reason if student is rejected" :modelValue="member.reason" @update:modelValue="newValue => member.contact_no = newValue" 
                />
              </div>
                     </div>

            

          <div style="margin-top:10px" class="rows  " >
            <div class="col text-right">
              <ButtonVue @click="accept" text="Accept" />
            </div>
            <div  class="col text-left">
              <ButtonVue transparent="true" class="mt-2" text='Decline'/>
            </div>


          </div>

          <span @click="$emit('closeProfile')" class="close-btn" >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8498 0.869641L14.8498 0.869617C14.384 0.403882 13.6288 0.403915 13.1629 0.869594L13.1629 0.869618L7.71908 6.31344L2.27525 0.869618C1.80952 0.403882 1.05428 0.403915 0.588391 0.869594L0.588344 0.869641C0.122653 1.33554 0.122653 2.09058 0.588344 2.55648L0.588368 2.5565L6.03219 8.00033L0.588368 13.4441C0.122632 13.9099 0.122665 14.6651 0.588344 15.131L0.588368 15.131C1.0541 15.5968 1.80934 15.5967 2.27523 15.1311L2.27525 15.131L7.71908 9.68721L13.1629 15.131C13.6286 15.5967 14.3839 15.597 14.8498 15.131C15.3155 14.6653 15.3155 13.9101 14.8498 13.4442L14.8498 13.4441L9.40596 8.00033L14.8498 2.5565C15.3155 2.09077 15.3155 1.33553 14.8498 0.869641Z" fill="#251605" stroke="#251605" stroke-width="0.293333"/>
              </svg>
          </span>
    
            <!-- {{ info.name }} -->
        </v-card>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import ModelTextInputVue from './ModelTextInput.vue';
  import { Form, } from 'vform';
  import ButtonVue from './Button.vue';
  window.Form = Form;
 
  export default {
      name: 'StudentRequestProcess-vue',
      props:['student'],
      components:{
        ModelTextInputVue,
        ButtonVue,
      },
  
      data() {
        return {
            errormsg:null,
            classes: null,
            grades:null,
            laptop: null,
            temporyDate:null,
            temporyClass:null,
            temporyCountry:null,
            temporyTutor:null,
            temporyGrade:null,
            success:false,
            error:false,
            tutors:null,
            studentIndetail:null,
            currency:null,
            countries:null,
            day_of_week:
            [{
               name:'Monday',
               id:1
             },
             {
              name: 'Tuesday',
              id:2
             },
             {
              name:'Wednesday',
              id:3
             },
             {
              name:'Thursday',
              id:4
             },
             {
              name: 'Friday',
              id:5
             },
             {
              name:'Saturday',
              id:6
             },
             {
              name:'Sunday',
              id:7
             }
            ],
            
            method:'created',
  
            member: new Form({
                reason: '',
                class1_id:'',
               
            }),
           
        }
      },
  
     async created() {
          window.addEventListener('resize', this.checkScreen)
          this.checkScreen()
          this.get_student_data();           
          this.get_grades() 
          this.get_classes()
        },
      methods: {

       async get_classes() {
          await  axios
                .get(this.$hostname+"/api/admin/classes")
                .then(response => {
                    if (response.status == 200) {
                        this.classes = response.data.data;
                        console.log(this.classes)
                       this.member.class1_id= this.classes.class1[0].id
                       this.setBatch()
                    }
                })
                .catch(error => {
                    console.log(error);
                    if(error.response.status==500)
                      {
                        this.errormsg='something went wrong'
                      }
                      else
                      {
                        this.errormsg=Object.values(JSON.parse(error.request.response).data)[0][0]
                      }
                    this.error =true;

                });
          },
          setBatch(){
         this.classes.class1=   this.classes.class1.map((clss)=>{
               let name =clss.subject.name+' '+clss.country.name+' '+clss.grade.name+' '+clss.id
               let id=clss.id
                 return {name:name,id:id}
           })
          },
          async get_student_data() {
          await  axios
                .get(this.$hostname+"/api/admin/studentRequestIndetail/"+this.student.id)
                .then(response => {
                    if (response.status == 200) {
                        this.studentIndetail = response.data.data.StudentData
                    }
                })
                .catch(error => {
                    console.log(error);
                    if(error.response.status==500)
                      {
                        this.errormsg='something went wrong'
                      }
                      else
                      {
                        this.errormsg=Object.values(JSON.parse(error.request.response).data)[0][0]
                      }
                    this.error =true;

                });
                
          },
         
        async get_grades() {
          await  axios
                .get(this.$hostname+"/api/admin/grades")
                .then(response => {
                    if (response.status == 200) {
                        this.grades = response.data.data;
                        this.member.grade_id= this.grades.grades[0].id

                    }

                })
                .catch(error => {
                    console.log(error);
                    if(error.response.status==500)
                      {
                        this.errormsg='something went wrong'
                      }
                      else
                      {
                        this.errormsg=Object.values(JSON.parse(error.request.response).data)[0][0]
                      }
                    this.error =true;

                });
          
          },

          async accept() {
             this.member
                .put(this.$hostname+"/api/admin/approveStudent/"+this.student.id)
                .then(response => {
                    if (response.status == 200) {
                        this.$emit('refreshRequests')
                    }

                })
                .catch(error => {
                    console.log(error);
                    if(error.response.status==500)
                      {
                        this.errormsg='something went wrong'
                      }
                      else
                      {
                        this.errormsg=Object.values(JSON.parse(error.request.response).data)[0][0]
                      }
                    this.error =true;

                });
          
          },
          checkScreen() {
              this.windowWidth = window.innerWidth;
  
              if(this.windowWidth < 1600) {
                  this.laptop = true
                  return
              }
              else {
                  this.laptop = false
              }
          },
      },
  }
  
  </script>
  
  <style scoped>
    .inputtype{
      height:45px;
      background-color:#FEF3EC;
      outline:0px !important;
    box-shadow: none !important;

    }
  .hed5{
    font-size: 15px ;
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 0;
  }
  .line {
    width: 100%;
    background-color: #FFA500;
    height: 3px;
    margin-block: 8px;
    opacity:0.5;
    margin-top: 20px;
    margin-bottom: 20px;
  }

    .label{
      color:white;
      
      background: #FEF3EC;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
    }
    .para{
        opacity: 0.5;
        color:#251605;
        margin-top:10px;  
        margin-bottom: 0;
        font-size: 12px;
    }
    .rows{
      width:95%;
      display: grid;
      grid-template-columns:50% 50%;
      margin-right:4%;
      margin-top:1%;
      margin-bottom:1%;
      gap: 5%;

    }
    .rowsingle{
      width:100%;
      display: grid;
      grid-template-columns:100%;
      margin: 0;
      padding: 0%;
      margin-top:0%;
      margin-bottom:0%;
    }

    .p{
      margin-top: 5px;
    }
  .overlay {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .alert {
    position: absolute;
    top: -2rem;
    z-index: 9999;
    right: 5rem;
  }

  .card {
    position: relative;
    padding-inline: 55px;
    padding-top: 40px;
    padding-bottom: 62px;
    border-radius: 3% !important;
  }

  .title {
    font-size: 28px !important;
    font-weight: bold;
    line-height: 32px;
    color: #251605;
    margin-bottom: 38px;
  }

  .form-control-price {
    display:grid;
    grid-template-columns:80% 20%;
    width: 100%;
    gap: 0px;
  }
  .form-control {
    width: 100%;
    gap: 12px;
    margin-bottom: 10px;
  }

  .label {
    font-size: 18px !important;
    font-weight: 500;
    line-height: 32px;
    color: #251605;
    margin: 0;
  }

  .v-text-field {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
  input {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
 


  .btn-container {
    margin-top: auto;
    gap: 1rem;
  }

  .btn-del {
    color: #FE3F49;
    text-decoration: underline;
    line-height: 32px;
  }

  .close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
  }

  @media (max-width: 1600px) {
    .card {
      padding-inline: 30px;
      padding-top: 25px;
      padding-bottom: 25px;
    }

    .title {
      font-size: 18px !important;
      margin-bottom: 20px;
    }

    .form-control {
      gap: 4px;
    }

    .label {
      font-size: 12px !important;
    }

    .v-text-field {
      font-size: 12px;
    }

  

    .btn {
      font-size: 12px !important;
    }

    .close-btn {
      top: 15px;
      right: 15px;
    }
  }
  </style>
  