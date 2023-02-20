<template>

  
    <div class="overlay">
    
      <v-alert
      class="alert"
      :value="success"
      type="success"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    > {{type}} {{method}} successfully</v-alert>

    <v-alert
      class="alert"
      :value="error"
      type="error"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >Something went wrong!</v-alert>
    
        <v-card :height="laptop ? '540px' : '770px'" :width="laptop ? '400px' : '620px'" class="d-flex flex-column align-center card" >

          <h4 class="title">Send Email</h4>
        <div  class=" d-flex flex-column justify-center align-left form-control">
          <ModelTextInputVue  placeholder="Email subject"
             type="text" label="Email subject" :modelValue="member.subject" @update:modelValue="newValue => member.subject = newValue"  
             />
      </div> 
          <div class=" d-flex flex-column justify-center align-left form-control">
            <ModelTextInputVue  placeholder="Email Body"
             type="textArea" label="Body of email " :modelValue="member.body" @update:modelValue="newValue => member.body = newValue"  
             />
          </div>        
      <div class="rows justify-center align-left">
          <div class="form-control" v-if="type === 'postpone'">
             <ModelTextInputVue
                  :initialValue="temporyDate ? temporyDate : day_of_week[0]"
                  type="select" :label="'Select Date'" :items="day_of_week" 
                  :modelValue="member.day_of_week" @update:modelValue="newValue => member.day_of_week = newValue"
                  
                  />
          </div>
          <div class=" form-control" v-if="type === 'postpone'">
            <ModelTextInputVue placeholder="Time"
                  type="time"  :initialValue="temporyTime ? temporyTime : ''" label=" Time" :modelValue="member.time" @update:modelValue="newValue => member.time = newValue"   
                  />
          </div>
       </div>
          <ButtonVue text="Send Email" @click="members"/>

          
    
          
            <span class="close-btn" @click="close">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8498 0.869641L14.8498 0.869617C14.384 0.403882 13.6288 0.403915 13.1629 0.869594L13.1629 0.869618L7.71908 6.31344L2.27525 0.869618C1.80952 0.403882 1.05428 0.403915 0.588391 0.869594L0.588344 0.869641C0.122653 1.33554 0.122653 2.09058 0.588344 2.55648L0.588368 2.5565L6.03219 8.00033L0.588368 13.4441C0.122632 13.9099 0.122665 14.6651 0.588344 15.131L0.588368 15.131C1.0541 15.5968 1.80934 15.5967 2.27523 15.1311L2.27525 15.131L7.71908 9.68721L13.1629 15.131C13.6286 15.5967 14.3839 15.597 14.8498 15.131C15.3155 14.6653 15.3155 13.9101 14.8498 13.4442L14.8498 13.4441L9.40596 8.00033L14.8498 2.5565C15.3155 2.09077 15.3155 1.33553 14.8498 0.869641Z" fill="#251605" stroke="#251605" stroke-width="0.293333"/>
                </svg>

            </span>
    
            <!-- {{ info.name }} -->
        </v-card>
    </div>
  </template>
  
  <script>
  import ButtonVue from './Button.vue';
  import ModelTextInputVue from './ModelTextInput.vue';
  import { Form, } from 'vform';
  window.Form = Form;
  export default {
      components:{
        ModelTextInputVue,
        ButtonVue,
      },
      name: 'sessionform-vue',

      props: ['type','item'],
  
      data() {
        return {
            laptop: null,
            errormsg:null,
            success:false,
            error:false,
           
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
            temporyDate:null,
            temporyTime:null,
            method:'created',
  
            member: new Form({
                body: '',
                subject: '', 
                day_of_week: '',
                time:''
            }),
           userType:null,
        }
      },
  
      created() {
          window.addEventListener('resize', this.checkScreen)
          this.checkScreen()
          if(this.type=='postpone')
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
  
      methods: {

          

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

          close() {
            this.$emit('close-form')
          },
          setInfo()
          {
            var  day=new Date(this.item.date)
            this.temporyDate=  this.getCorrectDay(day.getDay())
            this.temporyTime=this.item.time
            
          },
          getCorrectDay(day)
          {
            if(day==0){
             return this.day_of_week[7]
            }
            else{
              return this.day_of_week[day]
            }
          },
          members()
          {
           if(this.type=='postpone')
           {
             this.DeleteSession()
           }
           else
           {
             this.PostponeSession()
           }      
          },
         async DeleteSession()
          {
          await  this.member
                .post(this.$hostname+"/api/"+this.userType+"/deleteSession")
                .then(response => {
                   console.log(response)
                   this.success=true
                   setTimeout(() => {
                        this.success = false
                      }, 2000)
                  })

                .catch(error => {
                  if(error.response.status==500)
                      {
                        this.errormsg='something went wrong'
                      }
                      else
                      {
                        this.errormsg=Object.values(JSON.parse(error.request.response).data)[0][0]
                      }              
                      this.error=true
                      setTimeout(() => {
                        this.error = false
                      }, 2000)
                    });
          }

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
 
    .p{
      margin-top: 5px;
    }
  .rows{
    width:95%;
    display: grid;
    grid-template-columns:50% 50%;
    gap:5%;

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
    padding-top: 74px;
    padding-bottom: 62px;
  }

  .title {
    font-size: 32px !important;
    font-weight: bold;
    line-height: 32px;
    color: #251605;
    margin-bottom: 38px;
  }

  .form-control {
    width: 100%;
    gap: 12px;
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
 
  .btn {
    margin-top: auto;
    font-size: 18px !important;
    text-transform: capitalize;
    font-weight: bold;
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
  