<template>
    <div class="h-96 my-36 text-center">
        <p class="text-8xl font-semibold mb-5">404</p>
        <p class="text-2xl">Sorry, but we can't find any information :(</p>
    </div>
</template>

<script>
export default {
    name: 'NotFoundView',
    mounted() {
        this.updateMetaTags()
    },
    methods: {
        updateMetaTags() {
            document.title = `${this.$domainInfo.name} - 404 Not Found`;
            this.setMetaTag('description', `Searching resource was not found :(`);
            this.setMetaTag('keywords', this.$domainInfo.name);
            this.setMetaTag('robots', 'index, follow');
        },
        setMetaTag(name, content) {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        },
        computed: {
            domainName() {
                return this.$domainInfo.name;
            }
        }
    }
}
</script>

<style scoped>

</style>
