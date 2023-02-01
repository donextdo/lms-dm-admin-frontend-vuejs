<template>
  <div style="padding:6%">
    <h2>Payments Due</h2><br>
    <v-card :height="laptop ? '80px' : '110px'" width="100%" flat class="card">
        <p style="font-size:18px; margin-top:2.5%;">Class name</p>
        <p style="font-size:24px; margin-top:2.5%;font-weight:600">fee</p>
        <Button style="margin-left:3%; padding-left:5%;padding-right:5%;width:max-content" text="Make Payment" @click="save" />
        <p style="font-size:18px; margin-top:5%; margin-left:20%;">or</p>
        <Button :transparent="true" style=" padding-left:5%;padding-right:5%;width:max-content" text="Upload Recipt" @click="save" />
    </v-card>
    <h2>Payment History </h2><br>
    <PaymentRowVue></PaymentRowVue>
  </div>
</template>

<script>
import PaymentRowVue from './PaymentRow.vue';
import Button from '@/components/shared/Button.vue';
export default {
name:'student-payment-vue',
components:{
  PaymentRowVue,
  Button
}
}
</script>

<style scoped>
 .card {
          padding: 25px 30px;
          display: grid;  
          grid-template-columns:40% 15% 15% 15% 15%;    
      }
      .btn {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    float:left;
  }
  
</style>