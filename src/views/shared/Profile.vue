<template>
  <div flat class="v">
    <ButtonVue v-if="(role==1)" style="margin-top:4%;width:max-content" text="new User" @click="save" />

      <div  class="row card mt-6" >
        <div class="col-6">
          <h1>User Profile</h1>
          <p>Upload your profile details.<br>
           PNG, SVG or GIF (Maximum file size 50MB)</p>
        </div>
        <div class="right" cols="auto">
          <v-avatar :size="laptop ? '70px' : '90px'">
            <v-img class="img1" :src="require(`@/assets/avatar.png`)"></v-img>
          </v-avatar>
          <div  @click="upload()"  class="img2" >
            <v-avatar :size="laptop ? '20px' : '18px'">
        

            <svg width="25" height="20" viewBox="0 0 25 20" style="" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2161 3.87391H17.3987L14.4495 0.924688C14.3485 0.82332 14.2284 0.742929 14.0963 0.688144C13.9641 0.63336 13.8223 0.605262 13.6792 0.60547H9.32132C9.17822 0.605262 9.0365 0.63336 8.9043 0.688144C8.77211 0.742929 8.65205 0.82332 8.55105 0.924688L5.60183 3.87391H2.78443C1.58273 3.87391 0.605469 4.85118 0.605469 6.05287V18.0372C0.605469 19.2389 1.58273 20.2161 2.78443 20.2161H20.2161C21.4178 20.2161 22.3951 19.2389 22.3951 18.0372V6.05287C22.3951 4.85118 21.4178 3.87391 20.2161 3.87391ZM11.5003 16.9477C8.54779 16.9477 6.05287 14.4528 6.05287 11.5003C6.05287 8.54778 8.54779 6.05287 11.5003 6.05287C14.4528 6.05287 16.9477 8.54778 16.9477 11.5003C16.9477 14.4528 14.4528 16.9477 11.5003 16.9477Z" fill="#272937"  fill-opacity="0.5"/>
            </svg>

            </v-avatar> 
         </div>
          <v-file-input id="file" loading="false" style="display:none" v-model="file"  multiple chips ></v-file-input>
          <ButtonVue :transparent="true" class="mt-3" style="width:max-content; font-size: 14px;" text="Remove Photo" @click="reset" />
        </div>
      </div>
      <hr/>
      <div  class="row card mt-6 " >
        <div class="col-6 mx-2">
          <h1>Your Details</h1>
          <p>Update your personal details here.</p>
        </div>
        <div class="col-5">
              <TextInputVue label="Full name"  parent="page" type="text" :modelValue="user.name" @update:modelValue="newValue => user.name = newValue"/>
              <TextInputVue label="Mobile number"  parent="page" type="text" :modelValue="user.contact_no" @update:modelValue="newValue => user.contact_no = newValue"/>
        </div> 
      </div>
      <hr/>
      <div class="row card mt-6" >
        <div class="col-6 mx-2">
          <h1>Security</h1>
          <p>Update your security details regularly</p>
        </div>
        <div class="col-5">
          <TextInputVue label="Email" labelType="top" type="text" :modelValue="user.email" @update:modelValue="newValue => user.email = newValue"/>
        </div>
      </div>
     <div class="row">
      <div class="col-7" style="margin-left: 11%;">
        <ButtonVue :transparent="true" style="width:max-content; font-size: 14px;" text="Reset Password" @click="reset" />
      </div>
      <div class="col-11">
        <ButtonVue style="margin-left:3%;width:max-content" text="Save Changes" @click="save" />
        <ButtonVue  style="width:max-content;background-color:transparent;border:3px solid #ffa500;" text="Cancel" @click="reset" />
        <loader v-if="loader"/>

      </div>
      
     </div>
      
      <v-alert
      class="alert"
      :value="success"
      type="success"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >Data reset successfully</v-alert>

    <v-alert
      class="alert"
      :value="error"
      type="error"
      border="left"
      width="30vw" prominent
      transition="scroll-x-reverse-transition"
    >{{errormsg}}</v-alert>
  </div>

</template>

<script>
import loader from '@/components/shared/loader.vue';
import TextInputVue from '@/components/shared/TextInput.vue';
import axios from 'axios'
import { Form } from 'vform'
import ButtonVue from '../../components/shared/Button.vue'
  window.Form = Form;
export default {
    name: 'settings-vue',
     data(){
      return{
        errormsg:null,
        loader:false,
        user:new Form({
        name:"",
        contact_no:"",
        email:""

        }),
        test:'tset',
        laptop:null,
        file:null,
        role:null,
     data:{},
     success:null,
     error:null,  

      }
    
     },
     components:{
      ButtonVue,
      TextInputVue,
      loader
     },
     created(){
         this.set_data(),
         this.role= sessionStorage.getItem('role')
     },
    methods:{
      upload(){
       document.getElementById('file').click() 
      },
      reset()
      {
       this.$router.push({name:'reset'}) 
      },
      async set_data()
      {
        this.loader=true;
        const {data} = await axios.get(this.$hostname+'/api/getUser')
        this.loader=false
        this.data =data.data
        console.log(this.data)
        this.user.name = this.data.name
        this.user.email = this.data.email
        this.user.contact_no = this.data.contact_no

      },
      async save()
      {
        this.loader=true;
        const {data} = await this.user.post(this.$hostname+'/api/resetInfo').then(response=>{
        this.loader=false
        this.data =data.data
        if(this.data){
          this.success = true
            console.log(response)
          setTimeout(() => {
            this.success = false
          }, 2000)
        }}).catch(error=>{
          if(error.response.status==500)
                      {
                        this.errormsg='something went wrong'
                      }
                      else
                      {
                        this.errormsg=Object.values(JSON.parse(error.request.response).data)[0][0]
                      }
          this.error = true
         
        setTimeout(() => {
          this.error = false
        }, 2000)
          
        })
      
              
      }
    }
}
</script>

<style scoped>
.v {
    width: 100%;
    padding-left: 70px;
    padding-right: 157px;
    z-index: -9999;
    overflow: hidden;
}
.card {
          padding: 25px 30px;
      }
h1{
  font-size: 20px;
}
p {
  opacity: 0.5;
  font-size: 17px;
  font-weight: 400;
}
.btn {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    bottom: 25px;
    right:20px;
    align:right;
    float:right;
  }
  .btn2 {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    bottom: 25px;
    margin-left:17%;
    right:50px;
    align:right;
    float:right;
    background-color: #FEF3EC;
    border:1px solid #FFA500;

    
  }
.right{
  margin-left: 10%;
}
.img1 {
  position:absolute;
  
}
.img2 {
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top:-22px; 
  left:55px;
  border:1px solid white;
  height: 25px;
  width:25px;
  background-color:#E0E2E9;
  border-radius: 50%;
  cursor:pointer;
;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid #FFA500;
}


.custom.v-text-field>.v-input__control>.v-input__slot:before {
    border-style: none;
}
.custom.v-text-field>.v-input__control>.v-input__slot:after {
    border-style: none;
}
.custom.v-file-input>.v-input__control>.v-input__slot:before {
    border-style: none;
}
.custom.v-file-input>.v-input__control>.v-input__slot:after {
    border-style: none;
}
.custom{
    background-color:white;
    height:50%;
    margin-top:1.5%;
    margin-left:8%;
    width:max-content;
}
</style>