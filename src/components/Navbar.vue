<template>
    <nav class="relative flex items-center justify-between p-4 md:p-8">
        <router-link to="/" class="text-2xl font-regular">
            <p>// {{ domainName }}.</p>
        </router-link>

        <button 
        class="mobile-menu-button block md:hidden text-2xl" 
        @click="toggleMenu"
        >
            //
        </button>

        <div class="hidden md:flex nav-links items-center">
            <router-link to="/" class="mx-8">Home</router-link>
            <router-link to="/membership" class="mx-8">Membership</router-link>
            <router-link to="/our-story" class="mx-8">Our story</router-link>
            <router-link to="/writing" class="mx-8">Start Writing</router-link>
        </div>

        <transition name="fade">
            <div 
                v-if="isMenuOpen" 
                class="overlay fixed inset-0 bg-black opacity-50 z-40"
                @click="toggleMenu"
            ></div>
        </transition>

        <transition name="slide-up">
            <div 
                v-if="isMenuOpen" 
                class="mobile-menu fixed bottom-0 left-0 right-0 bg-white shadow-lg p-8 z-50"
            >
                <div class="flex flex-col items-center">
                <router-link to="/" class="my-4" @click="toggleMenu">Home</router-link>
                <router-link to="/membership" class="my-4" @click="toggleMenu">Membership</router-link>
                <router-link to="/our-story" class="my-4" @click="toggleMenu">Our story</router-link>
                <router-link to="/writing" class="my-4" @click="toggleMenu">Start Writing</router-link>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
        isMenuOpen: false
        }
    },
    computed: {
        domainSite() {
        return this.$domainInfo.site;
        },
        domainName() {
        return this.$domainInfo.name;
        }
    },
    methods: {
        toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<style>
    .nav-links a {
        color: #bebebe;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease-out;
    }

    .nav-links a:hover {
        color: #2b2b2b;
        transition: all 0.3s ease-out;
    }

    .nav-links a.router-link-exact-active {
        color: #000;
        font-weight: bold;
    }

    .big-button {
        padding: 14px 40px;
        border: 1px solid #1b1b1b;
        border-radius: 50px;
        transition: all 0.3s ease-out;
    }

    .big-button:hover {
        background-color: #719FAE;
        border: 1px solid #719FAE;
        color: #fff;
        transition: all 0.3s ease-out;
    }

    .slide-up-enter-active, .slide-up-leave-active {
        transition: all 0.3s ease-out;
    }

    .slide-up-enter, .slide-up-leave-to {
        transform: translateY(100%);
        opacity: 0;
    }

    .slide-up-enter-to, .slide-up-leave {
        transform: translateY(0%);
        opacity: 1;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .mobile-menu-button {
        cursor: pointer;
    }

    @media (min-width: 768px) {
        .mobile-menu {
            display: none;
        }
    }
</style>
