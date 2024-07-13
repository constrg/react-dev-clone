<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import HamburgerMenuIcon from '../assets/icon/hamburger_menu_icon.png';
import CloseMenuIcon from '../assets/icon/close_menu_icon.png';
import ReactLogo from '../assets/logo/react_logo.png';
import SearchIcon from '../assets/icon/search_icon.png';
import LightIcon from '../assets/icon/light_icon.png';
import DarkIcon from '../assets/icon/dark_icon.png';
import TranslateIcon from '../assets/icon/translate_icon.png';
import GitHubIcon from '../assets/icon/github_icon.png';
import Modal from './Modal.vue';

const version = "v18.3.1";
const isNavBarScrolled = ref(false);
const showSearchModal = ref(false);
const isNavListActive = ref(false)
const theme = ref('dark');

// on scroll
const handleScroll = () => {
    if (window.scrollY > 0) {
        isNavBarScrolled.value = true;
    }
    else {
        isNavBarScrolled.value = false;
    }
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
})

// on toggle theme
const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data_theme', theme.value);
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        theme.value = savedTheme;
        document.documentElement.setAttribute('data_theme', theme.value);
    }
})

watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme);
})

// on toggle search modal
const toggleSearchModal = () => {
    showSearchModal.value = !showSearchModal.value;
    document.body.classList.toggle('overflow-hidden');
}

// on toggle menu
const toggleNavMenu = () => {
    isNavListActive.value = !isNavListActive.value;
}

</script>
<template>
    <nav class="nav" :class="{ 'nav_scrolled_active': isNavBarScrolled }">
        <div class="nav_container" :class="{ 'nav_active': isNavListActive }">
            <div class="nav_left">
                <button class="hamburger_menu_btn" @click="toggleNavMenu">
                    <img class="hamburger_menu_btn_icon" v-if="!isNavListActive" :src="HamburgerMenuIcon"
                        alt="hamburger_menu_icon">
                    <img class="close_menu_icon" v-else="isNavListActive" :src="CloseMenuIcon" alt="close_menu_icon">
                </button>
                <RouterLink :to="{ name: 'home' }" class="nav_logo_link">
                    <img class="nav_logo" :src="ReactLogo" alt="react_logo">
                </RouterLink>
                <a href="https://react.dev/versions" class="version">{{ version }}</a>
            </div>
            <div class="nav_center">
                <button class="search_btn" @click="toggleSearchModal">
                    <span class="search_label">
                        <img class="search_icon" :src="SearchIcon" alt="search_icon">
                        Search
                    </span>
                    <div class="shortcut_key">
                        <span class="key">ctrl</span>
                        <span class="key">k</span>
                    </div>
                </button>

            </div>
            <div class="nav_right">
                <ul class="nav_list" :class="{ 'nav_list_active': isNavListActive }">
                    <ul class="nav_list_col_1">
                        <div class="nav_list_col_1_item">
                            <a href="https://react.dev/learn" class="nav_list_col_1_link">Learn</a>
                            <a href="https://react.dev/reference/react" class="nav_list_col_1_link">Reference</a>
                            <a href="https://react.dev/community" class="nav_list_col_1_link"> Community</a>
                            <a href="https://react.dev/blog" class="nav_list_col_1_link">Blog</a>
                        </div>
                    </ul>
                    <ul class="nav_list_col_2">
                        <div class="nav_list_col_2_item get_started">
                            <h1 class="nav_list_col_2_item_title">GET STARTED</h1>
                            <a href="https://react.dev/learn" class="nav_list_col_2_link">Quick Start</a>
                            <a href="https://react.dev/learn/installation" class="nav_list_col_2_link">Installation</a>
                        </div>
                        <div class="nav_list_col_2_item learned_react">
                            <h1 class="nav_list_col_2_item_title">LEARNED REACT</h1>
                            <a href="https://react.dev/learn/describing-the-ui" class="nav_list_col_2_link">Describing the UI</a>
                            <a href="https://react.dev/learn/adding-interactivity" class="nav_list_col_2_link">Adding Interactivity</a>
                            <a href="https://react.dev/learn/managing-state" class="nav_list_col_2_link">Managing State</a>
                            <a href="https://react.dev/learn/escape-hatches" class="nav_list_col_2_link">Escape Hatches</a>
                        </div>
                        <div class="nav_list_col_2_item react_api">
                            <h1 class="nav_list_col_2_item_title">REACT API</h1>
                            <a href="https://react.dev/reference/react" class="nav_list_col_2_link">Hooks</a>
                            <a href="https://react.dev/reference/react/components" class="nav_list_col_2_link">Components</a>
                            <a href="https://react.dev/reference/react/apis" class="nav_list_col_2_link">APIs</a>
                            <a href="https://react.dev/reference/react/legacy" class="nav_list_col_2_link">Legacy APIs</a>
                        </div>
                        <div class="nav_list_col_2_item react_dom_api">
                            <h1 class="nav_list_col_2_item_title">REACT DOM API</h1>
                            <a href="https://react.dev/reference/react-dom/components" class="nav_list_col_2_link">Components</a>
                            <a href="https://react.dev/reference/react-dom" class="nav_list_col_2_link">APIs</a>
                            <a href="https://react.dev/reference/react-dom/client" class="nav_list_col_2_link">Client APIs</a>
                            <a href="https://react.dev/reference/react-dom/server" class="nav_list_col_2_link">Server APIs</a>
                        </div>
                        <div class="nav_list_col_2_item get_involved">
                            <h1 class="nav_list_col_2_item_title">GET INVOLVED</h1>
                            <a href="https://react.dev/community" class="nav_list_col_2_link">React Community</a>
                        </div>
                        <div class="nav_list_col_2_item stay_informed">
                            <h1 class="nav_list_col_2_item_title">STAY INFORMED</h1>
                            <a href="https://react.dev/blog" class="nav_list_col_2_link">React Blog</a>
                        </div>
                    </ul>
                </ul>
                <ul class="nav_list_icon">
                    <button class="nav_list_icon_item nav_list_icon_search_btn" @click="toggleSearchModal">
                        <img class="nav_list_icon_item_icon" :src="SearchIcon" alt="search_icon"></button>

                    <button class="nav_list_icon_item" @click="toggleTheme">
                        <img class="nav_list_icon_item_icon" :src="LightIcon" v-if="theme === 'dark'" alt="light_icon">
                        <img class="nav_list_icon_item_icon" :src="DarkIcon" v-else>
                    </button>

                    <a href="https://react.dev/community/translations" class="nav_list_icon_item"><img class="nav_list_icon_item_icon"
                            :src="TranslateIcon" alt="translate_icon">
                    </a>

                    <a href="https://github.com/facebook/react/releases" target="_blank" class="nav_list_icon_item"><img class="nav_list_icon_item_icon" :src="GitHubIcon"
                            alt="github_icon"></a>
                </ul>
            </div>
        </div>
    </nav>
    <Modal :toggleSearchModal="toggleSearchModal" :showSearchModal="showSearchModal" />
</template>

<style scoped>
.nav {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 999;

}

.nav.nav_scrolled_active {
    border-bottom: 1px solid rgb(var(--clr-tertiary), .1);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    background-color: rgb(var(--clr-primary), 0.9);

}

.nav .nav_container {
    padding-block: 5px;
    padding-inline: 8px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
}

.nav .nav_container .nav_left .nav_logo_link {
    outline: none;
}

.nav .nav_container .nav_left .hamburger_menu_btn {
    display: none;
}


.nav .nav_container .nav_left .hamburger_menu_btn .hamburger_menu_btn_icon {
    width: 20px;
    filter: invert(var(--invert-light));
}

.nav .nav_container .nav_left {
    display: flex;
    align-items: center;
}

.nav .nav_container .nav_left .nav_logo {
    width: 70px;
}

.nav .nav_container .nav_left .version {
    color: rgb(var(--clr-tertiary));
    font-size: var(--fs-small);
    font-weight: var(--fw-semi-bold);
    margin-left: -5px;
}

.nav .nav_container .nav_left .version:hover 
{
    color: rgb(var(--clr-accent));
    text-decoration: underline;
}

.nav .nav_container .nav_center {
    width: 100%;
}

.nav .nav_container .nav_center .search_btn {
    width: 100%;
    padding: 10px 15px;
    border-radius: 40px;
    background-color: rgba(var(--clr-tertiary), 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--clr-tertiary);
    column-gap: 20px;
    font-size: var(--fs-base);
    cursor: pointer;
    color: rgb(var(--clr-tertiary));
}

.nav .nav_container .nav_center .search_btn .search_icon {
    opacity: .5;
    width: 18px;
    filter: invert(var(--invert-light));
    margin-bottom: -2px;
}

.nav .nav_container .nav_center .search_btn .search_label {
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.nav .nav_container .nav_center .search_btn .shortcut_key {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-size: var(--fs-base);
}

.nav .nav_container .nav_center .search_btn .shortcut_key .key {
    background-color: rgb(var(--clr-primary));
    padding: 3px 5px;
    border-radius: 5px;
    font-size: var(--fs-small);
    font-family: var(--ff-secondary);
}

.nav .nav_container .nav_right {
    display: flex;
    column-gap: 20px;
    align-items: center;
}

.nav .nav_container .nav_right,
.nav_list .nav_list_col_1 .nav_list_col_1_item,
.nav_list_icon {
    display: flex;
    align-items: center;
}


.nav .nav_container .nav_right .nav_list .nav_list_col_2 {
    display: none;
}

.nav .nav_container .nav_right .nav_list .nav_list_col_1 .nav_list_col_1_item .nav_list_col_1_link {
    padding: 10px 15px;
}

.nav .nav_container .nav_right .nav_list .nav_list_col_1 .nav_list_col_1_item .nav_list_col_1_link:hover {
    background-color: rgb(var(--clr-tertiary), 0.2);
    border-radius: 40px;
}

.nav .nav_container .nav_right .nav_list_icon .nav_list_icon_item {
    cursor: pointer;
    padding: 10px 12px;
}

.nav .nav_container .nav_right .nav_list_icon .nav_list_icon_item:hover {
    background-color: rgb(var(--clr-tertiary), 0.2);
    border-radius: 50%;
}

.nav .nav_container .nav_right .nav_list_icon .nav_list_icon_item .nav_list_icon_item_icon {
    width: 20px;
    filter: invert(var(--invert-light));
}

.nav .nav_container .nav_right .nav_list_icon .nav_list_icon_search_btn {
    display: none;
}

/* Laptop */
@media (max-width: 1023px) {
    .nav .nav_container {
        padding-inline: 20px;
    }

    .nav .nav_container.nav_active {
        border-bottom: 1px solid rgb(var(--clr-tertiary), .1);
        background-color: rgb(var(--clr-primary));
    }

    .nav .nav_container .nav_left .hamburger_menu_btn {
        display: block;
    }

    .nav .nav_container .nav_right .nav_list {
        display: none;
    }

    .nav .nav_container .nav_right .nav_list.nav_list_active {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(var(--clr-primary));
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100vh;
        z-index: -1;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .nav .nav_container .nav_right .nav_list .nav_list_col_1 {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
    }

    .nav .nav_container .nav_right .nav_list .nav_list_col_1 .nav_list_col_1_item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 80px;
    }

    .nav .nav_container .nav_right .nav_list .nav_list_col_1 .nav_list_col_1_item::after {
        content: "";
        display: block;
        width: 100%;
        border-bottom: 1px solid rgb(var(--clr-tertiary), 0.2);
        position: absolute;
        bottom: -20px;
        left: 20px;
    }

    .nav .nav_container .nav_right .nav_list .nav_list_col_1 .nav_list_col_1_item .nav_list_col_1_link {
        font-weight: var(--fw-semi-bold);
    }

    .nav .nav_container .nav_right .nav_list .nav_list_col_2 {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 160px;
        left: 0;
        row-gap: 20px;
        padding-block: 0 100px;
        width: 100%;
    }

    .nav .nav_container .nav_right .nav_list .nav_list_col_2 .nav_list_col_2_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .nav .nav_container .nav_right .nav_list .nav_list_col_2 .nav_list_col_2_item::after {
        content: "";
        display: block;
        width: 100%;
        border-bottom: 1px solid rgb(var(--clr-tertiary), 0.2);
        margin-left: 20px;
        padding-bottom: 20px;
    }

    .nav .nav_container .nav_right .nav_list .nav_list_col_2 .nav_list_col_2_item:last-child::after {
        border-bottom: unset;
    }



    .nav .nav_container .nav_right .nav_list .nav_list_col_2 .nav_list_col_2_item .nav_list_col_2_item_title {
        font-size: var(--fs-small);
        margin-bottom: 10px;
        font-weight: var(--fw-semi-bold);
        color: rgb(var(--clr-tertiary));
        padding-inline: 20px;
    }

    .nav .nav_container .nav_right .nav_list .nav_list_col_2 .nav_list_col_2_item .nav_list_col_2_link {
        font-weight: var(--fw-semi-bold);
        padding: 10px 20px;
    }

    .nav .nav_container .nav_right .nav_list .nav_list_col_2 .nav_list_col_2_item .nav_list_col_2_link:hover {
        background-color: rgb(var(--clr-tertiary), 0.2);
    }
}


/* Tablet */
@media (max-width: 767px) {
    .nav .nav_container .nav_center {
        display: none;
    }

    .nav .nav_container .nav_right .nav_list_icon .nav_list_icon_search_btn {
        display: block;
    }

}

@media (max-width: 639px) {

    .nav .nav_container .nav_right .nav_list .nav_list_col_1 .nav_list_col_1_item {
        padding-inline: 10px;
    }
}
</style>