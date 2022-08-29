<template>
  <div class="classes">
    <header class="header d-flex align-end justify-space-between">
      <nav class="nav d-flex">
        <router-link :to="{name: 'Music'}" :aria-selected="getRouterName === 'Music' ? true : false" class="link">Music Classes</router-link>
        <router-link :to="{name: 'Dancing'}" :aria-selected="getRouterName === 'Dancing' ? true : false" class="link">Dancing Classes</router-link>
      </nav>
      <v-btn color="#ffa500" :width="laptop ? '100px' : '142px'" :height="laptop ? '40px' : '62px'" elevation="0" class="btn rounded-lg">New Class</v-btn>
    </header>

    <section class="hero">
      <router-view />
    </section>
  </div>
</template>

<script>

export default {
    name: 'classes-vue',

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
  }
</style>