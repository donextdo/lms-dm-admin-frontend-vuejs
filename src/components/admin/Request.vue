<template>
    <v-card :height="laptop ? '80px' : '110px'" width="100%" flat class="card">
  
    <div class="name">
        <h4> {{ student.user.name }} </h4>
    </div>

    <div class="date">
        <h4> {{ student.created_at }} </h4>
    </div>

    <div class="link d-flex" @click="$emit('showProfile',student)">
        <span>View Student</span> 
        <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.5L5 7.5L0 2.5L1 0.5L8 7.5L1 14.5L0 12.5Z" fill="#FE3F49"/>
        </svg>
    </div>
  
    </v-card>
  </template>
  
  <script>
  export default {
      name: 'request-vue',
  
      props: ['student'],
  
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
  
              if(this.windowWidth < 1600) {
                  this.laptop = true
                  return
              }
              else {
                  this.laptop = false
              }
          }
      },
  }
  
  </script>
  
  <style scoped>
  
      .card {
          padding: 1.5rem;
          display: grid; 
          grid-template-columns: repeat(10, 1fr);     
      }
  
      .name {
        grid-column: 1/4;
        display: flex;
        align-items: center;
      }

      .name > h4 {
        font-size: 18px;
        line-height: 22px;
        font-weight: 800;
        letter-spacing: 1px;
      }

      .date {
        grid-column: 4/9;
        display: flex;
        align-items: center;
      }

      .date > h4 {
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        letter-spacing: 1px;
      }

      
      .link {
        grid-column: 9/-1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.2rem;
        cursor: pointer;
      }
  
      .link > span{
          color: #FFA500;
          font-size: 18px;
          font-weight: bold;
      }
  
      .link > svg {
          height: 18px;
          width: 18px;
          margin-bottom: 0;
      }
  
      .link > svg  path{
          fill: #FFA500;
      }

  
      @media (max-width: 1400px) {

        .name > h4 {
            font-size: 14px;
        }

        .date > h4 {
            font-size: 14px;
        }

        
    
        .link > span{
            font-size: 14px;
        }
    
        .link > svg {
            height: 14px;
            width: 14px;
        }
    
      }
  </style>
  