<template>
    <v-card flat height="432" width="50%" color="transparent">
      <h2 class="title">Enter New Password</h2>
      <v-form>
        <div class="square"></div>
    <h2 class="heading"></h2>

    <div class="d-flex flex-column justify-center align-left form-control">
      <TextInput label="Type the Password"  parent="page" type="password" :modelValue="user.password" @update:modelValue="newValue => user.password = newValue"/>

    </div>

    <div class="d-flex flex-column justify-center align-left form-control">
      <TextInput label="Confirm Password"  parent="page" type="password" :modelValue="user.password_confirmation" @update:modelValue="newValue => user.password_confirmation = newValue"/>

    </div>
    <Button text="Reset" style="margin-right:10px" @click="reset"/>
    <Button text="Back" :transparent="true"  @click="$router.go(-1)"/>

      </v-form>
    </v-card>
  </template>
  
  <script>
  import Button from '../shared/Button.vue';
  import TextInput from '../shared/TextInput.vue';
  import { Form, } from 'vform';
  window.Form = Form;
  export default {
    name: "reset-form",
    data() {
    return {
      laptop: null,
      user: new Form({
                //user oject create
                password: "",
                comfirm: "",
            }),
    
        items: ["Sri Lanka", "India", "Australia", "England"],
  
        subjects: ["Dancing", "Music", "Drama"],
      };
    },
    components:{
      TextInput,
      Button
    },
    methods:{
      reset(){
        this.user.post(this.$hostname+"/api/resetPassword")
                  .then(response => {
                      if (response.status == 200) {
                        console.log(response)
                      }
                  })
                  .catch(error => {
                      console.log(error);
                  });
      }
    }
  };
  </script>
  
  <style scoped>
  .title {
    font-family: "Source Serif Pro", serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
    color: #251605;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 500;
  }
  
  .form-row {
    display: flex;
    width: 100%;
    gap: 1rem;
    
    justify-content: space-between;
  }
  
  .form-control {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 25px;
    margin-bottom:25px;
  }
  
  label {
    font-size: 15px;
    margin-bottom: 0;
    font-weight: 500;
  }
  
  .register {
    display: block;
    width: 270px;
    background-color: #ffa500;
    padding-block: 8px;
    cursor: pointer;
    align-self: center;
    font-size: 15px;
    margin: 0 auto;
    font-weight: 500;
    border-radius: 8px;
  }
  
  .sing-in {
    font-size: 10px;
    text-align: center;
    margin-top: 5px;
    font-weight: 400;
  }
  
  .sing-in > span {
    color: #ffa500;
  }
  </style>
  