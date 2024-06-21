<template>
    <div class="not-found">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <router-link to="/">Go back to Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFoundView'
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
