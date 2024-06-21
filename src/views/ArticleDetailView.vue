<template>
    <div class="mx-auto mx-10 md:w-2/5 px-10 py-5 md:p-0">
        <div v-if="!notFound">
            <div v-if="article" class="mb-10">
                <div class="animate__animated animate__fadeInUp">
                    <p class="text-4xl font-semibold">{{ article.title }}</p>

                    <div class="my-5 flex justify-between items-end md:bg-slate-300 md:px-10 md:py-5 rounded-lg">
                        <div>
                            <p class="text-lg">{{ article.author }}</p>
                            <p class="text-base">Last updated: <span class="font-medium">{{ getDate(article.publication_date) }}</span></p>
                        </div>
                        <p class="text-base">{{ estimatedReadTime(article.content) }} min read</p>
                    </div>

                    <img :src="article.image_url" :alt="article.keyword" class="rounded-lg">

                    <article class="mt-10">
                        <div class="content" v-html="article.content"></div>
                    </article>
                </div>
            </div>
            <div v-else class="mb-10 animate__animated animate__fadeInUp">
                <p class="text-2xl h-screen">Loading</p>
            </div>
        </div>
        <div v-else>
            <div class="h-96 my-36 text-center">
                <p class="text-8xl font-semibold mb-5">404</p>
                <p class="text-2xl">Sorry, but we can't find any information :(</p>
            </div>
        </div>
    </div>
</template>

<script>
import axiosInstance from '@/plugins/axios'
import moment from 'moment'

export default {
    name: 'ArticleDetailView',
    props: ['slug'],
    components: {  },
    data() {
        return {
            article: null,
            notFound: false
        };
    },
    async mounted() {
        await this.fetchArticle();
        this.updateMetaTags();
    },
    methods: {
        async fetchArticle() {
            try {
                const response = await axiosInstance.get(`/get-article/${this.slug}`);
                this.article = response.data;
            } catch (error) {
                console.error('Error fetching article:', error)
                this.article = null
                this.notFound = true
            }
        },
        updateMetaTags() {
            if (this.article) {
                document.title = `${this.article.title} | ${this.domainName}`;
                this.setMetaTag('description', this.article.content);
                this.setMetaTag('keywords', this.article.keyword);
                this.setMetaTag('robots', 'index, follow');
            }
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
        getDate(date) {
            return moment(date).format('MMM DD, YYYY');
        },
        estimatedReadTime(content) {
            const words = content.split(/\s+/).length;
            const wordsPerMinute = 100;
            const readTime = Math.ceil(words / wordsPerMinute);
            return readTime;
        }
    },
    computed: {
        domainName() {
            return this.$domainInfo.name;
        },
    }
}
</script>

<style>
    .content {
        line-height: 1.75;
        font-size: 1rem;
    }

    .content h1, .content h2, .content h3, .content h4, .content h5, .content h6 {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        font-size: 1.2em;
        font-weight: 600;
    }

    .content p {
        margin: 1em 0;
    }

    .content ul, .content ol {
        list-style: square;
        margin-left: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .content li {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .content blockquote {
        border-left: 4px solid #e2e8f0;
        padding-left: 1rem;
        color: #718096;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .content a {
        text-decoration: underline;
        color: #719FAE;
        font-weight: 600;
        font-style: italic;
        transition: all 0.3s ease-out;
    }

    .content a:hover {
        color: #52727d;
        transition: all 0.3s ease-out;
    }
</style>