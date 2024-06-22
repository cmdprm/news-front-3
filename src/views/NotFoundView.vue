<template>
    <div class="not-found">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
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
    .not-found {
        text-align: center;
        margin-top: 50px;
    }

    .not-found h1 {
        font-size: 6rem;
        margin-bottom: 20px;
    }

    .not-found p {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .not-found a {
        color: #3498db;
        text-decoration: underline;
    }
</style>
