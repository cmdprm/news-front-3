<template>
    <div class="mx-10 xl:mx-72 mt-10 md:mt-20 mb-20">
        <div class="animate__animated animate__fadeInUp">
            <p class="text-5xl md:text-8xl font-medium">Stay informed<br>and connected with<br>like-minded readers.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 mt-10">
                <div>
                    <p class="text-4xl font-medium">Exclusive Articles</p>
                    <p class="text-lg mt-4 text-gray-600">Get access to in-depth articles and analysis written by our expert journalists that are available only to our members.</p>
                </div>
                <div>
                    <p class="text-4xl font-medium">Member Discussions</p>
                    <p class="text-lg mt-4 text-gray-600">Participate in engaging discussions and debates with other members about the latest news and topics that matter to you.</p>
                </div>
                <div>
                    <p class="text-4xl font-medium">Early Access to News</p>
                    <p class="text-lg mt-4 text-gray-600">Be the first to know! Receive early alerts and notifications about breaking news and upcoming events.</p>
                </div>
            </div>
        </div>
    </div>

    <subscribe-block />
</template>

<script>
import SubscribeBlock from '@/components/SubscribeBlock.vue'
export default {
    name: 'MemberView',
    components: { SubscribeBlock  },
    mounted() {
        this.updateMetaTags()
    },
    methods: {
        updateMetaTags() {
            document.title = `${this.$domainInfo.name} - Membership`;
            this.setMetaTag('description', `Stay informed and connected with like-minded readers.`);
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

<style>

</style>