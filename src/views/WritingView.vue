<template>
    <div class="mx-10 xl:mx-72 mt-10 md:mt-20 mb-20">
        <div class="mx-auto animate__animated animate__fadeInUp">
            <h1 class="text-4xl font-bold text-gray-900">
                Share Your Voice with Us
            </h1>
            <p class="mt-4 text-lg text-gray-600">
                Have a story to tell? Become a part of our growing community of writers and share your unique perspective with the world.
            </p>
        </div>

        <div class="mt-12 animate__animated animate__fadeInUp">
            <h2 class="text-3xl font-semibold text-gray-900">How to Start Writing</h2>
            <p class="mt-4 text-lg text-gray-600">
                Joining our team of writers is simple and rewarding. Follow these steps to get started.
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-8">
                <div class="w-full sm:w-1/2 lg:w-1/3 p-6 bg-slate-200 rounded-lg">
                    <h3 class="text-xl font-semibold text-gray-900">1. Create an Account</h3>
                    <p class="mt-2 text-gray-600">
                        Sign up for an account on our platform. It's quick, easy, and opens the door to endless possibilities.
                    </p>
                </div>
                <div class="w-full sm:w-1/2 lg:w-1/3 p-6 bg-slate-200 rounded-lg">
                    <h3 class="text-xl font-semibold text-gray-900">2. Submit Your Idea</h3>
                    <p class="mt-2 text-gray-600">
                        Send us your article idea. Our editorial team will review it and provide feedback.
                    </p>
                </div>
                <div class="w-full sm:w-1/2 lg:w-1/3 p-6 bg-slate-200 rounded-lg">
                    <h3 class="text-xl font-semibold text-gray-900">3. Start Writing</h3>
                    <p class="mt-2 text-gray-600">
                        Use our user-friendly editor to craft your article and bring your story to life.
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-12 animate__animated animate__fadeInUp">
            <h2 class="text-3xl font-semibold text-gray-900">Guidelines and Tips</h2>
            <p class="mt-4 text-lg text-gray-600">
                We believe in empowering our writers with the right tools and knowledge. Here are some tips to help you succeed.
            </p>
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="p-6 bg-slate-200 rounded-lg">
                    <h3 class="text-xl font-semibold text-gray-900">Know Your Audience</h3>
                    <p class="mt-2 text-gray-600">
                        Write content that resonates with our diverse readership. Consider their interests and perspectives.
                    </p>
                </div>
                <div class="p-6 bg-slate-200 rounded-lg">
                    <h3 class="text-xl font-semibold text-gray-900">Be Clear and Concise</h3>
                    <p class="mt-2 text-gray-600">
                        Communicate your ideas clearly. Avoid jargon and keep your message straightforward.
                    </p>
                </div>
                <div class="p-6 bg-slate-200 rounded-lg">
                    <h3 class="text-xl font-semibold text-gray-900">Fact-Check Your Work</h3>
                    <p class="mt-2 text-gray-600">
                        Ensure your information is accurate. Reliable content builds trust with our audience.
                    </p>
                </div>
                <div class="p-6 bg-slate-200 rounded-lg">
                    <h3 class="text-xl font-semibold text-gray-900">Edit and Refine</h3>
                    <p class="mt-2 text-gray-600">
                        Review your draft thoroughly. A polished piece reflects your commitment to quality.
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-12 animate__animated animate__fadeInUp">
            <h2 class="text-3xl font-semibold text-gray-900">FAQs for New Writers</h2>
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div class="bg-slate-200 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-gray-900">Do I need prior experience to write for you?</h3>
                    <p class="mt-2 text-gray-600">
                        No, we welcome writers of all backgrounds and experience levels. If you have a passion for storytelling, we’d love to hear from you.
                    </p>
                </div>
                <div class="bg-slate-200 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-gray-900">How long should my articles be?</h3>
                    <p class="mt-2 text-gray-600">
                        Our articles typically range from 500 to 1500 words, but we're open to different lengths based on the topic and depth of coverage.
                    </p>
                </div>
                <div class="bg-slate-200 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-gray-900">Can I write about any topic?</h3>
                    <p class="mt-2 text-gray-600">
                        We’re interested in a wide variety of topics, but we focus on news, analysis, and insightful commentary. Feel free to pitch your idea!
                    </p>
                </div>
                <div class="bg-slate-200 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-gray-900">What kind of support do you provide?</h3>
                    <p class="mt-2 text-gray-600">
                        Our editorial team provides feedback and guidance throughout the writing process. We’re here to help you succeed.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <subscribe-block />
</template>

<script>
import SubscribeBlock from '@/components/SubscribeBlock.vue'
export default {
    name: 'WritingView',
    components: { SubscribeBlock },
    mounted() {
        this.updateMetaTags()
    },
    methods: {
        updateMetaTags() {
            document.title = `${this.$domainInfo.name} - Writing`;
            this.setMetaTag('description', `Have a story to tell? Become a part of our growing community of writers and share your unique perspective with the world.`);
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