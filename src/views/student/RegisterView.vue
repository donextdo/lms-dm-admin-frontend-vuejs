<template>
  <div class="register-vue">
    <div class="container">
        <section class="hero">
            <div class="form">
                <router-view>
    
                </router-view>
            </div>
            <div class="image-grid">
                <ImageGrid/>
            </div>
            <div class="yellow-box"></div>
        </section>
    </div>
  </div>
</template>

<script>

import ImageGrid from '../../components/shared/ImageGrid.vue';

export default {
    name: "register-vue",
    components: {ImageGrid}
}

</script>

<style scoped>
    .register-vue {
        position:fixed ;
        height: 100%;
        width: 100%;
        padding: 0%;
        margin: 0%;
        background-color: #FEF3EC;
    }

    .container {
        padding:0px;
    }

    @media (min-width: 1600px) {
        .container2 {
            padding: 22px 25px;
        }
    }

    .hero {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        position: relative;
        top:-100px;
    }

    @media (min-width: 1600px) {
        .hero {
            grid-template-columns: 3fr 1fr;
        }
    }

    .form {
        height: 100%;
        padding-left: 25px;
        padding-right: 80px;
        margin-top:10%; 
        display: grid;
        align-items: center;
    }

    .image-grid {
        margin-top:10%; 
        height: auto;
        padding-left: 25px;
        padding-right: 26px;
        display: grid;
        align-items: center;
    }

    .yellow-box {
        position: fixed;
        width: 60px;
        height: 60px;
        top: 75px;
        left: 75px;
        background-color: #FEA500;
    }
</style>