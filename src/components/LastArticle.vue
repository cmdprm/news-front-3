<template>
    <router-link :to="{ name: 'articleDetail', params: { slug: article.slug } }">
        <div>
            <img :src="article.image_url" :alt="article.keyword" class="rounded-lg">
            <div class="mt-5 md:mt-10">
                <div class="grid grid-cols-3 gap-4 md:gap-10 items-center">
                    <div class="col-span-2">
                        <p class="text-lg md:text-4xl font-medium">{{ trunTitle(article.title) }}</p>
                    </div>
                    <div class="text-end">
                        <p class="text-xl md:text-4xl font-regular">{{ getDay(article.publication_date) }}</p>
                        <p class="text-base md:text-2xl font-regular">{{ getMonthYear(article.publication_date) }}</p>
                    </div>
                </div>
            </div>
            <div class="divider my-2 md:my-5"></div>
            <div class="flex items-center">
                <p class="text-sm">{{ article.author }}</p>
                <div class="little-circle mx-2"></div>
                <p class="text-sm">{{ estimatedReadTime(article.content) }} min read</p>
            </div>
        </div>
    </router-link>
</template>

<script>
import moment from 'moment';

export default {
    name: 'LastArticle',
    props: [ 'article' ],
    methods: {
        getDay(date) {
            return moment(date).format('DD');
        },
        getMonthYear(date) {
            return moment(date).format('MMMM YYYY');
        },
        estimatedReadTime(content) {
            const words = content.split(/\s+/).length;
            const wordsPerMinute = 100;
            const readTime = Math.ceil(words / wordsPerMinute);
            return readTime;
        },
        trunTitle(title) {
            const maxLength = 36;
            return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
        },
    }
}
</script>

<style>

</style>