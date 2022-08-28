<template>
  <div class="register-vue">
    <div class="container">
        <section class="hero">
            <div class="form">
                <RegisterForm/>
               
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
import RegisterForm from '../../components/student/RegisterForm.vue'

export default {
    name: "register-vue",
    components: {ImageGrid, RegisterForm}
}

</script>

<style scoped>
    .register-vue {
        height: 100vh;
        width: 100%;
        background-color: #FEF3EC;
    }

    .container {
        padding: 50px;
    }

    @media (min-width: 1500px) {
        .container {
            padding: 72px 75px;
        }
    }

    .hero {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        position: relative;
    }

    @media (min-width: 1100px) {
        .hero {
            grid-template-columns: 3fr 1fr;
        }
    }

    .form {
        height: 100%;
        padding-left: 25px;
        padding-right: 80px;
        display: grid;
        align-items: center;
    }

    .image-grid {
        height: 100%;
        padding: 1.5rem;
        padding-right: 26px;
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