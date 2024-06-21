<template>
    <div class="bg-[#1b1b1b] p-10 md:p-20 text-white">
        <div class="md:flex items-center justify-center footer-links text-2xl font-regular text-center">
                <router-link to="/" class="mb-5 md:mx-14 md:mb-0">Home</router-link>
                <router-link to="/membership" class="my-5 md:mx-14">Membership</router-link>
                <router-link to="/our-story" class="my-5 md:mx-14">Our story</router-link>
                <router-link to="/writing" class="my-5 md:mx-14">Start Writing</router-link>
            </div>
        <div class="mx-10 md:mx-72 my-10">
            <div class="divider"></div>
        </div>
        <div class="flex justify-center">
            <router-link to="/">
                <p class="text-2xl">// {{ domainName }}.</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterBlock',
    computed: {
        domainSite() {
            return this.$domainInfo.site;
        },
        domainName() {
            return this.$domainInfo.name;
        }
    }
}
</script>

<style>
    .footer-links a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease-out;
        display: block;
    }

    .footer-links a:hover {
        color: #b5b5b5;
        transition: all 0.3s ease-out;
    }
</style>