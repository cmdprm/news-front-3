<template>
    <router-link :to="{ name: 'articleDetail', params: { slug: article.slug } }">
        <div class="grid grid-cols-6">
            <div>
                <p class="text-lg md:text-3xl font-medium">{{ (index + 1).toString().padStart(2, '0') }}</p>
            </div>
            <div class="col-span-5">
                <p class="text-lg md:text-3xl font-medium">{{ trunTitle(article.title) }}</p>
            </div>
        </div>
        <div class="divider my-3"></div>
        <div class="flex justify-between">
            <div class="flex items-center">
                <p class="text-sm">{{ article.author }}</p>
                <div class="little-circle mx-2"></div>
                <p class="text-sm">{{ estimatedReadTime(article.content) }} min read</p>
            </div>
            <p class="text-sm">{{ getDate(article.publication_date) }}</p>
        </div>
    </router-link>
</template>

<script>
import moment from 'moment';

export default {
    name: 'SmallArticle',
    props: [ 'index', 'article' ],
    methods: {
        getDate(date) {
            return moment(date).format('MMM DD, YYYY');
        },
        estimatedReadTime(content) {
            const words = content.split(/\s+/).length;
            const wordsPerMinute = 100;
            const readTime = Math.ceil(words / wordsPerMinute);
            return readTime;
        },
        trunTitle(title) {
            const maxLength = 56;
            return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
        }
    }
}
</script>

<style>

</style>