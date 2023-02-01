<template>
  <div class="classes">
    <header class="header d-flex align-end justify-space-between">
      <nav class=" d-flex">
      <h2  >All Classes</h2>
          </nav>  
    </header>
    <section class="hero mb-10">
      <CardRow v-for="(item, index) in classes" :item="item" :key="index"/>
      <router-view />
    </section>

  </div>
</template>

<script>
import axios from 'axios'
import CardRow from '@/components/tutor/CardRow.vue'

export default {
    name: 'classes-vue',
    components: {
      CardRow
    },
    data() {
      return {
          laptop: null,
          classes:[],
      }
    },

    created() {
        window.addEventListener('resize', this.checkScreen)
        this.get_classes()
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
        setTitle(){
            this.classes.forEach(function(object) {
            object.title = "Grade "+object.grade.name+" "+object.subject.name+" "+object.country.name+"  students"
         })
        },
        async get_classes(){
           const {data} = await axios.get(this.$hostname+'/api/tutor/classes')
           this.classes = data.data.class1
           this.setTitle()
        }

    },

    computed: {
        getRouterName() {
          return this.$route.name
        }
    }
}

</script>

<style scoped>

  .classes {
    width: 100%;
    padding-left: 70px;
    padding-right: 157px;
    z-index: -9999;
    overflow: hidden;
  }

  .header {
    height: 145px;
    width: 100%;
  }

  .btn {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 34px;
  }

  .nav {
    gap: 67px;
    margin-left: 56px;
  }

  .link {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: 20px;
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

  .hero {
    padding-top: 61px;
    padding-left: 86px;
    overflow-y: scroll;
    height: 800px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 165, 0, 0.4);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 165, 0, 0.6);
  }

  @media (max-width: 1400px) {
    .classes {
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

    .nav {
      gap: 30px;
      margin-left: 36px;
    }

    .link {
      font-size: 14px;
      line-height: 24px;
    }

    .hero {
      padding-top: 40px;
      padding-left: 60px;
      height: 500px;
    }
  }
</style>