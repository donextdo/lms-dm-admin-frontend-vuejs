<template>
    <header class="navbar">
            <h2 class="title" v-if="title=='Profile'"> My profile</h2>
            <h2 class="title" v-if="title=='pastRecordings'"> Recordings</h2>

            <h2 class="title" v-if="(title!='Class')  && title != 'Profile' && title!='pastRecordings' "> {{  title.replace(/([A-Z])/g, ' $1').trim()  }}</h2>
             <h2 class="title" v-else-if="title=='Class'" :style="this.$route.matched[2].name!='ClassPage' && 'cursor:pointer'" @click="shiftBack" > Classes</h2>

        <div class="classTitle" v-if="this.$route.matched[1].name=='Class' && this.$route.matched[2].name=='Session'"> <pre>    >    {{className.getters.topic}} </pre>  </div>
        <div class="classTitle" v-if="this.$route.matched[1].name=='Class' && this.$route.matched[2].name=='SessionDetail'"  > <pre >  <span style="cursor:pointer"  @click="$router.go(-1)"  >  >    {{className.getters.topic}}</span> >    Session Detail </pre>  </div>
        <div class="classTitle" v-if="this.$route.matched[1].name=='Class' && this.$route.matched[2].name=='EditSession'"  > <pre >  <span style="cursor:pointer"  @click="$router.go(-1)" >  >    {{className.getters.topic}}</span>   >  Edit  Session </pre>  </div>
        <div class="classTitle" v-if="this.$route.matched[1].name=='Class' && this.$route.matched[2].name=='NewSession'"  > <pre> <span style="cursor:pointer"  @click="$router.go(-1)" >   >    {{className.getters.topic}} </span>  >   New Session</pre>  </div>
        <div class="classTitle" v-if="this.$route.matched[1].name=='Class' && this.$route.matched[2].name=='AddRecordingLinkSession'"  style="cursor:pointer"  @click="$router.go(-1)"> <pre>    >    {{className.getters.topic}}   >   Recording Link</pre>  </div>
        <v-btn @click="payments" v-if="role==3" color="#ffa500" :width="laptop ? '100px' : '142px'" :height="laptop ? '40px' : '62px'" elevation="0" class="btn rounded-lg admin-data"><svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.2304 1.80273C26.4987 1.07639 24.7656 0.800049 23.0335 0.800049C17.5348 0.799602 12.0366 3.58308 6.53795 3.58308C5.15893 3.58308 3.7808 3.40808 2.40179 2.97058C2.24687 2.92148 2.09152 2.89826 1.93973 2.89826C1.17143 2.89826 0.5 3.49291 0.5 4.31835V18.4817C0.5 19.0456 0.822768 19.58 1.34107 19.7969C3.07277 20.5237 4.8058 20.8 6.53795 20.8C12.0366 20.8 17.5353 18.0166 23.0339 18.0166C24.4129 18.0166 25.7911 18.1916 27.1701 18.6291C27.325 18.6782 27.4804 18.7014 27.6321 18.7014C28.4004 18.7014 29.0719 18.1067 29.0719 17.2813V3.11835C29.0714 2.55407 28.7487 2.02014 28.2304 1.80273V1.80273ZM2.64286 5.27416C3.54107 5.49916 4.47857 5.6121 5.44286 5.67282C5.18036 6.98487 4.02679 7.97371 2.64286 7.97371V5.27416ZM2.64286 17.9974V15.8643C4.17723 15.8643 5.41875 17.0817 5.48705 18.6054C4.48125 18.5246 3.54107 18.3237 2.64286 17.9974V17.9974ZM14.7857 15.0858C12.8129 15.0858 11.2143 13.1666 11.2143 10.8C11.2143 8.43308 12.8134 6.51433 14.7857 6.51433C16.758 6.51433 18.3571 8.43308 18.3571 10.8C18.3571 13.1675 16.7576 15.0858 14.7857 15.0858ZM26.9286 16.3259C26.1464 16.13 25.3344 16.0201 24.5036 15.9492C24.7656 14.7849 25.7312 13.9009 26.9286 13.7492V16.3259ZM26.9286 5.78532C25.5496 5.61076 24.4795 4.45942 24.4371 3.03755C25.3094 3.13442 26.1375 3.31567 26.9286 3.60273V5.78532Z" fill="black"/>
</svg> Payments
</v-btn>

        <router-link v-if="(role!=3)" to="#"  class="admin-data">
            <v-avatar size="20px">
                <v-img :src="require(`@/assets/${profile}.png`)"></v-img>
            </v-avatar>

            <span>{{ name }} </span>     
        </router-link>

    </header>
</template>

<script>
import {className} from '../../store/store.js'
export default {
    name: 'navbar-vue',

    props: ['title', 'name', 'profile'],

    data() {
        return {
            avatarSize: null,
            className,
            role:sessionStorage.getItem('role'),
            laptop:null
        }
    },
    
    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
        this.setSessions()
    },

    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;

            if(this.windowWidth < 1600) {
                this.avatarSize = 40
                return
            }
            else {
                this.avatarSize = 60
            }
        },
        setSessions()
        {
           className.commit('setClassName',sessionStorage.getItem('topic'))
        },
        payments(){
         this.$router.push({name:'My Fees'})
        },
        shiftBack(){
            this.$router.push({name:'Class'})

        },
    }
}

</script>

<style scoped>

    .navbar {
        height: 97px;
        width: calc(100% - 293px);
        position: fixed;
        top: 0;
        left: 293px;
        right: 0;
        padding-inline: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 9999 !important;
        background-color: #FFFFFF
;
        z-index: 9999;
    }

    .classTitle{
        color: #FFA500;
        float:left;
        position:absolute;
        margin-left:10%;
        margin-top: 3%;
    }
    .title {
        font-size: 25px !important;
        font-weight: bold;
        line-height: 1.5;
        margin-top: 3%;
    }

    .admin-data {
        margin-top: 1%;
        padding: 10px;
        border-radius: 60px;
        border: 2px solid #FE3F49;
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .admin-data > span {
        color: #000;
        font-size: 15px;
        font-weight: 600;
    }

    @media (max-width: 1400px) {
        .navbar {
            height: 70px;
            width: calc(100% - 195px);
            left: 195px;
            padding-inline: 40px;
        }

        .title {
            font-size: 20px !important;
        }

        .admin-data {
            padding: 5px;
            border-radius: 40px;
            display: flex;
        }

        .admin-data > span {
            font-size: 11px;
        }
    }

</style>