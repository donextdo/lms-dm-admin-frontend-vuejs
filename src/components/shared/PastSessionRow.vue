<template>
  <v-card :height="laptop ? '80px' : '110px'" width="100%" flat class="d-flex align-center justify-space-between card">

    <div class="main-content d-flex flex-column">
        <div class="meta d-flex align-center">
            <p>{{item.date}} </p>    <div class="dot"></div> <p> {{item.time}}</p> <div class="dot"> </div> <p>{{tutor}} </p>
        </div>
        <h2 class="title">{{ item.title }}</h2>
      
    </div>

    <div class="actions">
        <div v-if="item.recording_link==null"  @click="addTitleSession " class="link d-flex">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.543 2.5979C13.3129 2.11874 12.9522 1.71433 12.5022 1.43128C12.0523 1.14823 11.5316 0.998047 11 0.998047C10.4685 0.998047 9.94776 1.14823 9.49785 1.43128C9.04793 1.71433 8.68714 2.11874 8.45704 2.5979L0.341043 18.5629C-0.629957 20.4689 0.597043 22.9999 2.88304 22.9999H19.116C21.403 22.9999 22.628 20.4699 21.659 18.5629L13.543 2.5979ZM11 7.9999C11.2653 7.9999 11.5196 8.10526 11.7071 8.2928C11.8947 8.48033 12 8.73469 12 8.9999V13.9999C12 14.2651 11.8947 14.5195 11.7071 14.707C11.5196 14.8945 11.2653 14.9999 11 14.9999C10.7348 14.9999 10.4805 14.8945 10.2929 14.707C10.1054 14.5195 10 14.2651 10 13.9999V8.9999C10 8.73469 10.1054 8.48033 10.2929 8.2928C10.4805 8.10526 10.7348 7.9999 11 7.9999V7.9999ZM11 16.4999C11.2653 16.4999 11.5196 16.6053 11.7071 16.7928C11.8947 16.9803 12 17.2347 12 17.4999V17.9999C12 18.2651 11.8947 18.5195 11.7071 18.707C11.5196 18.8945 11.2653 18.9999 11 18.9999C10.7348 18.9999 10.4805 18.8945 10.2929 18.707C10.1054 18.5195 10 18.2651 10 17.9999V17.4999C10 17.2347 10.1054 16.9803 10.2929 16.7928C10.4805 16.6053 10.7348 16.4999 11 16.4999V16.4999Z" fill="#FF0000"/>
            </svg>

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
    name: 'past-session-row-vue',

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
        addTitleSession()
        {
         this.$emit('one_session',this.item)
         className.commit('setClassName',this.item.title)   
         this.$router.push({name:'AddRecordingLinkSession'}) 
        },
        editSession()
        {
            this.$emit('one_session',this.item)
            this.$router.push('editSession') 
        },
        sessionDetail()
        {
         this.$emit('one_session',this.item)
         this.$router.push('sessionDetail') 
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
