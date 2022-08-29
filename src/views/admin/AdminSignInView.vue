<template>
  <div class="admin-signin">
    <SignIn :title="title" />
  </div>
</template>

<script>
import SignIn from '@/components/shared/SignIn.vue';

export default {
    name: 'adminSignIn-vue',

    components: {
        SignIn,
    },

    data () {
        return {
            title: 'Admin Sign In'
        }
    }
}

</script>

<style>

    .admin-signin {
        min-height: 100vh;
        min-width: 100%;
        background-color: #FEF3EC;
        display: grid;
        place-items: center;
    }

</style>