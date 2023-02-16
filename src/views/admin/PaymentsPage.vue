<template>
  <div class="session d-flex flex-column">
    <header class="header d-flex align-end justify-space-between">
      <nav class="nav d-flex">
      <span :aria-selected="totalPayments" @click="toggle('totalPayments')" id="totalPayments" class="link">Total Payments</span>
      <span  :aria-selected="paymentsDue" class="link" @click="toggle('paymentsDue')" id="paymentsDue" >Payments Due</span>
      <span :aria-selected="paymentsHistory" @click="toggle('paymentsHistory')" id="paymentsHistory" class="link">Payments History</span>
      <span  :aria-selected="paymentsRecipts" class="link" @click="toggle('paymentsRecipts')" id="paymentsRecipts" >Payments Recipts</span>
    </nav>  
    </header>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  
    name: 'session-vue',
    data() {
      return {
        paymentsDue:false,
        totalPayments:true,
        paymentsHistory:false,
        paymentsRecipts:false,
        laptop:null

       
      }
    },

    
    created() {
      window.addEventListener('resize', this.checkScreen)
      this.checkScreen()
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
      toggle(type){
        if(type=='totalPayments')
        {
        this.paymentsDue=false,
        this.totalPayments=true,
        this.paymentsHistory=false,
        this.paymentsRecipts=false
        }
        else  if(type=='paymentsDue')
        {
        this.paymentsDue=true,
        this.totalPayments=false,
        this.paymentsHistory=false,
        this.paymentsRecipts=false
        } 
        else  if(type=='paymentsHistory')
        {
        this.paymentsDue=false,
        this.totalPayments=false,
        this.paymentsHistory=true,
        this.paymentsRecipts=false
        }
        else{
          this.paymentsDue=false,
        this.totalPayments=false,
        this.paymentsHistory=false,
        this.paymentsRecipts=true
        }
       
       
        
        this.$router.push(type)
      },
    }

}
</script>

<style scoped>
  .session {
    gap: 35px;
  width: 100%;
  padding-left: 70px;
  padding-right: 157px;
  padding-bottom:3%;
  z-index: -9999;
  overflow: hidden;

  }

  .nav {
  gap: 67px;
  margin-left: 56px;
}
  .header {
  height: 145px;
  width: 100%;
  border-bottom: 1px solid rgba(130, 130, 135, 0.3);
}

.btn {
  font-size: 18px;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 34px;
}
.link {
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 6px;
  position: relative;
}

.link::before {
  content: '';
  position: absolute;
  width: 70%;
  background-color: #FFA500;
  height: 3px;
  bottom: -6px;
  left: 15%;
  right: 15%;
  transform: scaleX(0);
  transition: transform .3s ease-in;
}

.link:hover {
  font-weight: bold;
}

.link:hover::before {
  transform: scaleX(1)
}

.link[aria-selected=true] {
  font-weight: bold
}

.link[aria-selected=true]::before {
  transform: scaleX(1);
}


  @media (max-width: 1400px) {
    .session {
      padding-bottom:3%;
      gap: 25px;
      padding-left: 35px;
      padding-right: 95px;
    }
    .header {
    height: 100px;
  }

  .btn {
    font-size: 12px;
    margin-bottom: 22px;
  }
  .link {
    font-size: 14px;
    line-height: 24px;
  }

  .nav {
    gap: 30px;
    margin-left: 36px;
  }
  }

</style>


