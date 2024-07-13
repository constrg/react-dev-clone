<script setup>
import { ref } from 'vue';
import PlayIcon from '../assets/icon/play_icon.png';
import HeartIcon from '../assets/icon/heart_icon.png';
const { data } = defineProps(['data'])

</script>
<template>
    <div class="video_item">
        <div class="video">
            <img class="video_thumbnail_img" :src="data.img" alt="meta_gradient_dark">
            <img class="play_icon" :src="PlayIcon" alt="heart_icon">
        </div>
        <div class="video_item_details">
            <div class="video_text">
                <h4 class="video_title">{{ data.video_title }}</h4>
                <p class="video_description">{{ data.video_description }}</p>
            </div>
            <img class="heart_icon" :src="HeartIcon" alt="heart_icon">
        </div>
    </div>
</template>

<style scoped>
.video_item {
    display: flex;
    align-items: center;
    column-gap: 20px;
}

.video_item .video {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.video_item .video .video_thumbnail_img {
    width: 150px;
    height: 90px;
    border-radius: 10px;
    object-fit: cover;
}

.video_item .video .play_icon {
    width: 30px;
    position: absolute;
}

.video_item .video_item_details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    column-gap: 20px;
}

.video_item .video_item_details .video_text .video_title {
    font-weight: var(--fw-bold);
}

.video_item .video_item_details .video_text .video_title:hover {
    text-decoration: underline;
    cursor: pointer;
}

.video_item .video_item_details .video_text .video_description {
    font-size: var(--fs-small);
    color: rgb(var(--clr-tertiary));
}

.video_item .video_item_details .heart_icon {
    width: 35px;
    cursor: pointer;
    padding: 5px;
}

.video_item .video_item_details .heart_icon:hover {

    background-color: rgb(var(--clr-primary), 0.1);
    border-radius: 50%;
}
</style>