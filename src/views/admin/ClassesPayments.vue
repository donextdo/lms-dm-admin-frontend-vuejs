<template>
  <v-card :height="laptop ? '120px' : '166px'" :width="laptop ? '280px' : '330px'" flat class="card-lg rounded-xl" >
        
        <h4 class="card-title">Total Payment</h4>
        <h2 class="data">LKR 250,000</h2>

       
  </v-card>
</template>

<script>
export default {
  name:'classPayments',
  data(){return{
    laptop:null,

  }
  }
}
</script>

<style scoped>
.card-lg {
  border: 1px solid #FFA500;
  position: relative;
  padding: 32px 25px;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
}


.card-title {
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.data {
  font-size: 2rem;
  color: #492801;
  line-height: 1rem;
  font-weight: bold;
}

</style>