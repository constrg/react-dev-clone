<script setup>
import { ref } from 'vue';
import PlayIcon from '../assets/icon/play_icon.png';
import HeartIcon from '../assets/icon/heart_icon.png';
const { data } = defineProps(['data'])

</script>
<template>
    <div class="video_item">
        <div class="video">
            <div class="video_thumbnail">
                <img class="video_thumbnail_img" :src="data.img" alt="meta_gradient_dark">
                <img class="play_icon" :src="PlayIcon" alt="heart_icon">
            </div>
            <div class="video_text">
                <h4 class="video_title">{{ data.video_title }}</h4>
                <p class="video_description">{{ data.video_description }}</p>
            </div>
        </div>
        <img class="heart_icon" :src="HeartIcon" alt="heart_icon">
    </div>
</template>

<style scoped>
.video_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
    width: 100%;
}

.video_item .video {
    display: flex;
    align-items: center;
    cursor: pointer;
    column-gap: 10px;
}

.video_item .video .video_thumbnail 
{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.video_item .video .video_thumbnail .video_thumbnail_img {
    width: 150px;
    height: 90px;
    border-radius: 10px;
}

.video_item .video .video_thumbnail .play_icon {
    width: 30px;
    position: absolute;
}

.video_item .video .video_text {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.video_item .video .video_text .video_title {
    font-weight: var(--fw-bold);
}

.video_item .video .video_text .video_title:hover {
    text-decoration: underline;
    cursor: pointer;
}

.video_item .video .video_text .video_description {
    font-size: var(--fs-small);
    color: rgb(var(--clr-tertiary));
}

.video_item .heart_icon {
    width: 35px;
    cursor: pointer;
    padding: 5px;
}

.video_item .heart_icon:hover {

    background-color: rgb(var(--clr-primary), 0.1);
    border-radius: 50%;
}
</style>