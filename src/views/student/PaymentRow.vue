<template>
    <v-card :height="laptop ? '80px' : '110px'" width="100%" flat class="card">
        <p style="font-size:18px; margin-top:2.5%;">Class name</p>
         <div></div>
        <p style="font-size:18px; margin-top:5%; margin-left:20%;">Amount paid</p>
        <div></div>
        <p style="font-size:24px; margin-top:2.5%;font-weight:600">fee</p>

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
          grid-template-columns:55%  15% 15% 15%;    
    
      }
  
  
  
  
  
  
     
  </style>
  