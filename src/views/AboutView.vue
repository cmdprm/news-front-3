<template>
    <div class="mx-10 md:mx-72 mt-10 md:mt-20 mb-20">
        <div class="mb-10 animate__animated animate__fadeInUp">
            <p class="text-5xl md:text-8xl font-medium">From our humble<br>beginnings to becoming<br>a trusted source of news.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 mt-10 items-center">
                <div class="bg-slate-200 p-10 rounded-lg">
                    <p class="text-xl">Our mission is to provide accurate, unbiased news and insightful analysis to keep you informed about the world around you. We believe in the power of journalism to make a positive impact.</p>
                </div>
                <div class="mt-5 md:mt-0">
                    <p class="text-2xl font-semibold">Our Values</p>
                    <ul class="mt-4 list-disc list-inside text-gray-600 text-xl">
                        <li>Integrity and honesty in reporting</li>
                        <li>Commitment to quality journalism</li>
                        <li>Respect for diverse perspectives</li>
                        <li>Dedication to our readers and community</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="divider my-10"></div>

        <div class="animate__animated animate__fadeInUp">
            <div class="text-start">
                <p class="text-4xl font-semibold">Our Jorney</p>
                <p class="mt-4 text-xl">Take a look at some of the key milestones that have shaped our growth and success over the years.</p>
            </div>

            <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-slate-200 p-10 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-gray-900">Founded in 2010</h4>
                    <p class="mt-2 text-gray-600">
                        We started as a small team of passionate journalists with a big vision.
                    </p>
                </div>
                <div class="bg-slate-200 p-10 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-gray-900">First Major Breakthrough</h4>
                    <p class="mt-2 text-gray-600">
                        Our investigative reporting on major events brought us national recognition in 2015.
                    </p>
                </div>
                <div class="bg-slate-200 p-10 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-gray-900">Expanding Our Reach</h4>
                    <p class="mt-2 text-gray-600">
                        In 2020, we expanded our coverage globally, bringing stories from every corner of the world.
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-10">
            <div class="text-end">
                <p class="text-4xl font-semibold">Community Impact</p>
                <p class="mt-4 text-xl">We believe in giving back. Learn how we support our community through various initiatives and partnerships.</p>
            </div>

            <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-slate-200 p-10 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-gray-900">Educational Programs</h4>
                    <p class="mt-2 text-gray-600">
                        We offer workshops and resources to help aspiring journalists hone their skills.
                    </p>
                </div>
                <div class="bg-slate-200 p-10 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-gray-900">Community Events</h4>
                    <p class="mt-2 text-gray-600">
                        Our community events foster dialogue and engagement around critical issues.
                    </p>
                </div>
                <div class="bg-slate-200 p-10 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-gray-900">Partnerships</h4>
                    <p class="mt-2 text-gray-600">
                        We collaborate with local and international organizations to drive positive change.
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
    name: 'MemberView',
    components: { SubscribeBlock }
}
</script>

<style>

</style>