<template>
    <div class="overlay">
    
        <v-card :height="laptop ? '630px' : '1062px'" :width="laptop ? '380px' : '642px'" class="d-flex flex-column align-center card">

            <div style=" display: flex;justify-content: center; align-items: center;" class="avatar">
               <!--<v-img :src="require(`@/assets/${info.profile}.png`)">></v-img>--> 
               <avatarVue :char="info.user.name[0]" styles="display: flex; justify-content: center;
                  align-items: center; width:100%;height:100%;font-size:40px" ></avatarVue>
            </div>

            <div class="details d-flex flex-column">
                <h4 class="title">{{ type === 'tutor' ? 'Tutor Details' : 'Student Details'}}</h4>

                <div class="data">
                    <div class="block">
                        <p class="key">{{ type === 'tutor' ? 'Tutor ID' : 'Student ID'}}</p>
                        <p class="value">{{ info.id < 9 ?'00'+info.id:info.id<99?'0'+info.id:info.id }}</p>
                    </div>
                    <div class="block">
                        <p class="key">{{ type === 'tutor' ? 'Tutor Name' : 'Student Name'}}</p>
                        <p class="value" >{{ info.user.name }}</p>
                    </div>
                    <div class="block">
                        <p class="key">{{ type === 'tutor' ? 'Subjects Taught' : 'Subjects'}}</p>
                        <p class="value" v-for="(item, index) in subjects"  :item="item" :key="index"  v-show="type==='student'">{{item.name}}</p>
                        <p class="value" v-show="type==='tutor'">{{info.subject.name}}</p>
                    </div>
                    <div class="block ">
                        <p class="key">{{ type === 'tutor' ? 'Grades Taught' : 'Grade'}}</p>
                        <div class="ajes">
                            <p class="value " v-for="(item, index) in grades" :item="item" :key="index"  >{{item.name,}}</p>

                        </div>
                    </div>
                </div>
            </div>

            <div class="line"></div>

            <div class="details d-flex flex-column">
                <h4 class="title">Contact Information</h4>

                <div class="data">
                    <div class="block">
                        <p class="key">Mobile Number</p>
                        <p class="value">{{info.user.contact_no}}</p>
                    </div>
                    <div class="block">
                        <p class="key">Email</p>
                        <p class="value">{{info.user.email}}</p>
                    </div>
                </div>
            </div>

            <span class="close-btn" @click="close">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8498 0.869641L14.8498 0.869617C14.384 0.403882 13.6288 0.403915 13.1629 0.869594L13.1629 0.869618L7.71908 6.31344L2.27525 0.869618C1.80952 0.403882 1.05428 0.403915 0.588391 0.869594L0.588344 0.869641C0.122653 1.33554 0.122653 2.09058 0.588344 2.55648L0.588368 2.5565L6.03219 8.00033L0.588368 13.4441C0.122632 13.9099 0.122665 14.6651 0.588344 15.131L0.588368 15.131C1.0541 15.5968 1.80934 15.5967 2.27523 15.1311L2.27525 15.131L7.71908 9.68721L13.1629 15.131C13.6286 15.5967 14.3839 15.597 14.8498 15.131C15.3155 14.6653 15.3155 13.9101 14.8498 13.4442L14.8498 13.4441L9.40596 8.00033L14.8498 2.5565C15.3155 2.09077 15.3155 1.33553 14.8498 0.869641Z" fill="#251605" stroke="#251605" stroke-width="0.293333"/>
                </svg>

            </span>
    
        </v-card>
    </div>
  </template>
  
  <script>
  import avatarVue from './avatar.vue'
  export default {
      name: 'profilecard-vue',

      props: ['info', 'type'],
  
      data() {
        return {
            laptop: null,
           subjects:[],
           grades:[],
        }
      },
      components:{
       avatarVue
      },
  
      created() {
          window.addEventListener('resize', this.checkScreen)
          this.checkScreen()
          this.optimise('grade')
          this.optimise('subjects')

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
          optimise(para){
            const uniqueIds = [];
             if(para=='grade'){
                this.info.grade.filter(element => {
            const isDuplicate = uniqueIds.includes(element.name);
            if (!isDuplicate) {
                uniqueIds.push(element);

                this.grades=uniqueIds;
            }
           });
          }else if(this.info.subjects){
             this.info.subject.filter(element => {
            const isDuplicate = uniqueIds.includes(element.name);

            if (!isDuplicate) {
                uniqueIds.push(element);

                this.subjects=uniqueIds;
            }

              });
          }
             },
           
          close() {
            this.$emit('close-profile')
          }
      },
  }
  
  </script>
  
  <style scoped>
  
  .overlay {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .ajes{
    flex-direction: column;
    overflow-y: scroll;
    height: 50px;
    font-size: 12px;
    font-weight: 700;
    line-height: 32px;
    color: #251605;
    margin: 0;
  }
  .card {
    position: relative;
    padding-inline: 82px;
  }

  .close-btn {
    position: absolute;
    top: 25px;
    right: 45px;
    cursor: pointer;
  }

  .avatar {
    width: 275px;
    height: 275px;
    border-radius: 50% !important;
    overflow: hidden;
    border: 5px solid #FFA500;
    margin-top: 90px;
    margin-bottom: 60px;
  }

  .details {
    width: 100%;
  }

  .title {
    margin: 0;
    align-self: flex-start;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    color: #333;
  }

  .data {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 35px;
    gap: 35px;
  }

  .block {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .block > .key {
    font-size: 18px;
    line-height: 32px;
    font-weight: 300;
    color: #251605;
    opacity: 0.5;
    margin: 0;
  }
     
  .block > .value {
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    color: #251605;
    margin: 0;
  }

  .line {
    width: 100%;
    background-color: #FFA500;
    height: 3px;
    margin-block: 65px;
    opacity: .5;
  }

  @media (max-width: 1600px) {
    
    .card {
        padding-inline: 40px;
    }

    .close-btn {
        top: 15px;
        right: 20px;
    }

    .close-btn > svg {
        width: 10px;
    }

    .avatar {
        width: 150px;
        height: 150px;
        margin-top: 50px;
        margin-bottom: 30px;
        border: 3px solid #FFA500;
    }

    .title {
        font-size: 16px !important;
        line-height: 24px;
    }

    .data {
        margin-top: 20px;
        gap: 20px;
    }

    .block {
        gap: 2px;
    }

    .block > .key {
        font-size: 12px;
        line-height: 24px;
    }
        
    .block > .value {
        font-size: 12px;
        line-height: 24px;
    }

    .line {
        height: 2px;
        margin-block: 35px;
    }
  }
  </style>
  