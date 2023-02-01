<template>
  <v-card :height="laptop ? '80px' : '110px'" width="100%" flat class="d-flex align-center justify-space-between card">

    <div class="main-content d-flex flex-column">
        <div class="meta d-flex align-center">
            <p>{{item.date}} </p>    <div class="dot"></div> <p> {{item.time}}</p> <div class="dot"> </div> <p>{{tutor}} </p>
        </div>
        <h2 class="title">{{ item.title }}</h2>
      
    </div>

    <div class="actions">
        <div  to="cancel" @click="showForm('cancel') " class="link  d-flex">

                            <svg width="18" class="gap" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0002 10.5V1.5C18.0002 0.67 17.3302 0 16.5002 0H2.49023C1.66023 0 0.990234 0.67 0.990234 1.5V10.5C0.990234 11.33 1.66023 12 2.49023 12H16.5002C17.3302 12 18.0002 11.33 18.0002 10.5ZM16.6902 1.39C17.0202 1.72 16.8402 2.06 16.6602 2.23L12.6002 5.95L16.5002 10.01C16.6202 10.15 16.7002 10.37 16.5602 10.52C16.4302 10.68 16.1302 10.67 16.0002 10.57L11.6302 6.84L9.49023 8.79L7.36023 6.84L2.99023 10.57C2.86023 10.67 2.56023 10.68 2.43023 10.52C2.29023 10.37 2.37023 10.15 2.49023 10.01L6.39023 5.95L2.33023 2.23C2.15023 2.06 1.97023 1.72 2.30023 1.39C2.63023 1.06 2.97023 1.22 3.25023 1.46L9.49023 6.5L15.7402 1.46C16.0202 1.22 16.3602 1.06 16.6902 1.39Z" fill="#FFA500"/>
                </svg>
            <span style="color: #FFA500;">Cancel Session</span>

            
        </div>
        <div  to="cancel" @click="showForm('postpone') " class="link  d-flex">

        <svg width="18" class="gap" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.0002 10.5V1.5C18.0002 0.67 17.3302 0 16.5002 0H2.49023C1.66023 0 0.990234 0.67 0.990234 1.5V10.5C0.990234 11.33 1.66023 12 2.49023 12H16.5002C17.3302 12 18.0002 11.33 18.0002 10.5ZM16.6902 1.39C17.0202 1.72 16.8402 2.06 16.6602 2.23L12.6002 5.95L16.5002 10.01C16.6202 10.15 16.7002 10.37 16.5602 10.52C16.4302 10.68 16.1302 10.67 16.0002 10.57L11.6302 6.84L9.49023 8.79L7.36023 6.84L2.99023 10.57C2.86023 10.67 2.56023 10.68 2.43023 10.52C2.29023 10.37 2.37023 10.15 2.49023 10.01L6.39023 5.95L2.33023 2.23C2.15023 2.06 1.97023 1.72 2.30023 1.39C2.63023 1.06 2.97023 1.22 3.25023 1.46L9.49023 6.5L15.7402 1.46C16.0202 1.22 16.3602 1.06 16.6902 1.39Z" fill="#FFA500"/>
        </svg>
        <span style="color: #FFA500;">Postpone class</span>


        </div>
        <div  to="session" @click="sessionDetail " class="link d-flex">
            <span>View details</span> 
            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12.5L5 7.5L0 2.5L1 0.5L8 7.5L1 14.5L0 12.5Z" fill="#FE3F49"/>
            </svg>
        </div>
        <div class="link link-icon" @click="editSession()">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.474 3.40783L15.592 5.52483M14.836 1.54283L9.109 7.26983C8.81309 7.56533 8.61128 7.94181 8.529 8.35183L8 10.9998L10.648 10.4698C11.058 10.3878 11.434 10.1868 11.73 9.89083L17.457 4.16383C17.6291 3.99173 17.7656 3.78742 17.8588 3.56256C17.9519 3.33771 17.9998 3.09671 17.9998 2.85333C17.9998 2.60994 17.9519 2.36895 17.8588 2.14409C17.7656 1.91923 17.6291 1.71492 17.457 1.54283C17.2849 1.37073 17.0806 1.23421 16.8557 1.14108C16.6309 1.04794 16.3899 1 16.1465 1C15.9031 1 15.6621 1.04794 15.4373 1.14108C15.2124 1.23421 15.0081 1.37073 14.836 1.54283V1.54283Z" stroke="#492801" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 13V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3H6" stroke="#492801" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
           </div>
           

    </div>

  </v-card>
</template>

<script>
import {className} from '../../store/store.js'
export default {
    name: 'comming-session-row-vue',

    props: ['item','tutor'],

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
        showForm(type) {
            this.$emit('show-form',type,this.item)
        },
        sessionDetail()
        {
         this.$emit('one_session',this.item)
         this.$router.push('sessionDetail') 
        },
        addTitleSession()
        {
         className.commit('setClassName',this.item.title)   
         this.$router.push('session') 
        },
        editSession()
        {
            this.$emit('one_session',this.item)
            this.$router.push('editSession') 
        }
    },
}

</script>

<style scoped>

    .gap{
      margin-right:4px;
    }
      .link {
          display: flex;
          align-items: center;
          gap: 0;
          cursor: pointer;
      }
  
      .link > span{
          color: #FE3F49;
          font-size: 16px;
          font-weight: bold;
      }
  
      .link > svg {
          height: 16px;
          width: 16px;
          margin-bottom: 0;
      }
    .card {
        padding: 26px 48px;
    }

    .main-content {
        height: 100%;
    }

    .title {
        font-size: 18px !important;
        line-height: 32px;
        font-weight: 500;
        margin-bottom: 8px;
        text-align: left;
    }

    .meta > p {
        font-size: 16px;
        color: black;
        margin-bottom: 0;
        letter-spacing: 1px;
    }
    .dot{
        background-color: #FFA500;
        width:5px;
        height: 5px;  
        border-radius: 50%;
        margin-left:10px;
        margin-right:10px;
    }
    .spacer {
        width: 5px;
        height: 5px;
        margin-inline: 10px;
        background-color: #492801;
        opacity: 0.5;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 40px;
    }
    
    .link {
        display: flex;
        align-items: center;
        gap: 0;
    }

    .link > span{
        color: #FE3F49;
        font-size: 16px;
        font-weight: bold;
    }

    .link > svg {
        height: 16px;
        width: 16px;
        margin-bottom: 0;
    }

    @media (max-width: 1400px) {
        .card {
            padding: 15px 26px;
        }

        .main-content {
            height: 100%;
        }

        .title {
            font-size: 16px !important;
            line-height: 24px;
            font-weight: 500;
            margin-bottom: 6px;
        }

        .meta > p {
            font-size: 12px;
        }

        .actions {
            gap: 20px;
        }

        .link > span{
            font-size: 12px;
        }

        .link > svg {
            height: 14px;
            width: 14px;
        }
    }
</style>
