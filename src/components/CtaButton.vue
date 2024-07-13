<script setup>

const {btnLabel, icon1, icon2, url} = defineProps({
    btnLabel: {
        type: String,
        required: true,
    },
    icon1: {
        type: String,
        default: null
    },
    icon2: {
        type: String,
        default: null
    },
    url: {
        type: String
    }
});

const handleLink = () => {
    window.location.href = url
}
</script>
<template>
    <button class="cta_btn" @click="handleLink">
        <img :src="icon1" alt="icon" v-if="icon1" class="icon1">
        <span class="button_text">{{ btnLabel }}</span>
        <img :src="icon2" alt="icon" v-if="icon2" class="icon2">
    </button>
</template>
<style scoped>
.cta_btn {
    padding: 12px 30px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 13px;
    cursor: pointer;
}

.cta_btn .icon1
{
    width: 20px;
    filter: invert(var(--invert-light));
}

.cta_btn .icon2 
{
    width: 8px;
    filter: invert(var(--invert-light));
}

.cta_btn .button_text 
{
    font-size: var(--fs-base);
    font-weight: var(--fw-bold);
}

.cta_btn:hover .icon2 
{
    transform: translateX(2px);
    transition: all 0.3s;
}
</style>