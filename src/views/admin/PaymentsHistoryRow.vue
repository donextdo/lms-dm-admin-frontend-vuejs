<template>
    <v-card :height="laptop ? '80px' : '110px'" width="100%" flat class="card">
  
      <div class="main-content d-flex align-center">
          <v-avatar :size="laptop ? '40px' : '60px'">
          <!--    <v-img :src="require(`@/assets/${item.profile}.png`)"></v-img>-->
          </v-avatar>
          <div class="meta d-flex flex-column justify-center">
            <h4>name</h4>
          </div>
        

      </div>
  
          <h4 class="d-flex align-center">Grade</h4>
          <h4 class="d-flex align-center">Amount</h4>
          <button  style="color:#226B00; background-color:#CCFF98;
           border-radius:50px; height:70%; width:80%;margin-top:5%;">Online Transfer</button>
           <button  style="color:#636B00; background-color:#FFFB98;
           border-radius:50px; height:70%; width:80%;margin-top:5%;">Bank Transfer</button>
        <a class="d-flex align-center" style="color:red; font-weight:bold;">View Details <svg  style="margin-left:4%;" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 12.5L5.5 7.5L0.5 2.5L1.5 0.5L8.5 7.5L1.5 14.5L0.5 12.5Z" fill="#FE3F49"/>
</svg>
</a>
  
    </v-card>
  </template>
  
  <script>
  export default {
      name: 'tablerow-vue',
  
      props: ['item', 'type'],
  
      data() {
        return {
            laptop: null
            
        }
      },
  
      created() {
          window.addEventListener('resize', this.checkScreen)
          this.checkScreen()
      },
  
      methods: {
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
      },
  }
  
  </script>
  
  <style scoped>
  
      .card {
          padding: 25px 30px;
          display: grid;  
          grid-template-columns:30% 15% 15% 20% 20%;    
      }
  
  
  
      .main-content {
          height: 100%;
          gap: 22px;
      }
  
  
  
     
  
      @media (max-width: 1400px) {
          .card {
              padding: 16px 20px;
          }
  
          .main-content {
              height: 100%;
              gap: 12px;
          }
  
         
      }
  </style>
  