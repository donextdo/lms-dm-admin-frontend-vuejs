<template>
    <header class="navbar">
        <h2 class="title">{{ title }}</h2>
        <router-link to="#" class="admin-data">
            <v-avatar :size="avatarSize">
                <v-img :src="require(`@/assets/${profile}.png`)"></v-img>
            </v-avatar>

            <span>{{ name }}</span>
        </router-link>
    </header>
</template>

<script>

export default {
    name: 'navbar-vue',

    props: ['title', 'name', 'profile'],

    data() {
        return {
            avatarSize: null
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
                this.avatarSize = 40
                return
            }
            else {
                this.avatarSize = 60
            }
        }
    }
}

</script>

<style scoped>

    .navbar {
        height: 127px;
        width: calc(100% - 293px);
        position: fixed;
        top: 0;
        left: 293px;
        right: 0;
        padding-inline: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .title {
        font-size: 32px !important;
        font-weight: bold;
        line-height: 1.5;
        margin: 0;
    }

    .admin-data {
        padding: 10px;
        border-radius: 60px;
        border: 2px solid #FE3F49;
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .admin-data > span {
        color: #000;
        font-size: 18px;
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
            font-size: 24px !important;
        }

        .admin-data {
            padding: 5px;
            border-radius: 40px;
            display: flex;
        }

        .admin-data > span {
            font-size: 12px;
        }
    }

</style>