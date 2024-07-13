<script setup>
import NavBar from '../components/NavBar.vue';
</script>
<template>
    <NavBar />
    <div class="not_found">
        <div class="not_found_content">
            <h1 class="not_found_title">404 Not Found</h1>
        </div>
    </div>
</template>
<style scoped>
.not_found .not_found_content {
    text-align: center;
    padding: 20px;
}

.not_found .not_found_content .not_found_title
{
    font-weight: var(--fw-bold);
    font-size: var(--fs-xl);
}
</style>