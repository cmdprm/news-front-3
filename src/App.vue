<template>
    <div class="mx-10 md:mx-72">
        <navbar />
    </div>
    <router-view />
    <footer-block />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FooterBlock from './components/FooterBlock.vue'

export default {
    name: 'App',
    components: { Navbar, FooterBlock }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    #app {
        font-family: 'Roboto', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
