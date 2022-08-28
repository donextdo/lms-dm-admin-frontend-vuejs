<template>
  <div class="dashboard">
    <Sidebar/>
    <Navbar :title="title" :name="name" :profile="profile"/>
    <section class="hero">
        <h1>Router goes here</h1>

    </section>
  </div>
</template>

<script>
import Sidebar from '@/components/shared/Sidebar';
import Navbar from '@/components/shared/Navbar'

export default {
    name: 'dashboard-vue',

    components: {
        Sidebar,
        Navbar
    },

    data() {
        return {
            title: 'Dashboard',
            name: 'John Doe',
            profile: 'avatar'
        }
    }
}

</script>

<style scoped>

    .dashboard {
        min-height: 100vh;
        min-width: 100vw;
    }

    .hero {
        width: calc(100% - 293px);
        min-height: calc(100% - 127px);
        background-color: #FEF3EC;
        margin-top: 127px;
        margin-left: 293px;
    }

    @media (max-width: 1400px) {
        .hero {
            width: calc(100% - 195px);
            min-height: calc(100% - 70px);
            margin-top: 70px;
            margin-left: 195px;
        }
    }

</style>