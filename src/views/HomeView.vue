<template>
    <div class="mx-10 xl:mx-72 mt-10 md:mt-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 animate__animated animate__fadeInUp">
            <div>
                <p class="text-5xl md:text-8xl font-medium">Thoughts & ideas around the things that actually matter.</p>
            </div>
            <div>
                <p class="text-lg font-medium">Trending on {{ domainName }}</p>

                <div v-if="firstArticle" class="my-5 md:my-10">
                    <last-article :article="firstArticle" />
                </div>
                <div v-else class="mt-5">
                    <p>Loading...</p>
                </div>
            </div>
        </div>

        <div class="divider my-5"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 md:my-20 animate__animated animate__fadeInUp">
            <div class="md:w-1/2">
                <p class="text-4xl md:text-6xl font-medium">The Total Politics</p>
                <div class="grid grid-cols-2 gap-4 mt-5 md:mt-10">
                    <div>
                        <p class="text-3xl font-medium">41K</p>
                        <p class="text-2xl mt-2 text-[#719FAE]">Articles</p>
                    </div>
                    <div>
                        <p class="text-3xl font-medium">23K</p>
                        <p class="text-2xl mt-2 text-[#719FAE]">Writer</p>
                    </div>
                </div>
            </div>
            <div class="mt-10 md:mt-0">
                <div class="mb-10" v-for="(article, index) in latestArticles" :key="article.slug">
                    <small-article :article="article" :index="index" />
                </div>
            </div>
        </div>
    </div>
    <subscribe-block />
    <div class="md:flex justify-between items-center mx-10 md:mx-72 my-20">
        <div class="text-center mb-10 md:mb-0">
            <p class="text-8xl font-medium mb-5">683K</p>
            <p class="text-2xl text-[#719FAE]">Article posted</p>
        </div>
        <div class="vert-divider rotate-12 hidden md:block"></div>
        <div class="text-center mb-10 md:mb-0">
            <p class="text-8xl font-medium mb-5">120K</p>
            <p class="text-2xl text-[#719FAE]">Montly readers</p>
        </div>
        <div class="vert-divider rotate-12 hidden md:block"></div>
        <div class="text-center">
            <p class="text-8xl font-medium mb-5">422K</p>
            <p class="text-2xl text-[#719FAE]">Writer joined</p>
        </div>
    </div>
</template>

<script>
import axiosInstance from '@/plugins/axios';
import SubscribeBlock from '@/components/SubscribeBlock.vue'
import LastArticle from '@/components/LastArticle.vue';
import SmallArticle from '@/components/SmallArticle.vue';

export default {
    name: 'HomeView',
    components: {
        SubscribeBlock,
        LastArticle,
        SmallArticle
    },
    data() {
        return {
            articles: [],
            site: null
        }
    },
    mounted() {
        this.site = this.domainSite
        this.fetchArticles()
        this.updateMetaTags()
    },
    methods: {
        async fetchArticles() {
            try {
                const response = await axiosInstance.post('/get-news', { site: this.site });
                this.articles = response.data.data;
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        },
        updateMetaTags() {
            document.title = `${this.domainName} - Welcome!`;
            this.setMetaTag('description', `Thoughts & ideas around the things that actually matter.`);
            this.setMetaTag('keywords', this.domainName);
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
        }
    },
    computed: {
        firstArticle() {
            return this.articles.length > 0 ? this.articles[0] : null;
        },
        latestArticles() {
            return this.articles.slice(1, 4);
        },
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
    .divider {
        width: 100%;
        height: 1px;
        background-color: #bebebe;
    }

    .vert-divider {
        width: 2px;
        height: 180px;
        background-color: #bebebe;
    }

    .little-circle {
        aspect-ratio: 1/1;
        height: 2px;
        background-color: #000;
    }
</style>
