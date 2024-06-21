<template>
    <div class="bg-[#1b1b1b] py-10 md:p-24 text-center">
        <p class="text-5xl font-semibold text-white">Subscribe to get daily-free ebook</p>
        <div class="mx-auto bg-white py-8 md:py-16 text-center w-4/5 md:w-2/3 mt-10 rounded-lg md:rounded-full">
            <form @submit.prevent="submitForm">
                <div class="md:flex justify-between md:px-10 mb-10">
                    <input type="text" placeholder="Type your name" v-model="name" class="text-xl" required>
                    <input type="email" placeholder="Type your email" v-model="email" class="text-xl" required>
                </div>
                <button class="big-button">
                    <p class="text-xl">Subscribe now</p>
                </button>
            </form>
            <div v-if="notification" class="mt-10">
                <p class="text-xl font-medium">Thank you for subscribing! You'll be notified on email.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubscribeBlock',
    data() {
        return {
            name: null,
            email: null,
            notification: false
        }
    },
    methods: {
        submitForm() {
            this.notification = true
        }
    }
}
</script>

<style>
    form input {
        width: 70%;
        border: none;
        text-align: center;
        margin: 0 50px;
        padding: 10px;
        border-bottom: 1px solid #1b1b1b;
    }

    form input:focus {
        outline: none;
    }
</style>