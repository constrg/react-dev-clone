<script setup>
import { onMounted, onUnmounted } from 'vue';
import SearchIcon from '../assets/icon/search_icon.png';
import AlgoliaLogo from '../assets/logo/algolia_logo.png'

const { toggleSearchModal, showSearchModal } = defineProps(['toggleSearchModal', 'showSearchModal']);

const closeSearchModalContainer = () => {
    toggleSearchModal();
}

const escSearchModal = (e) => {
    if (e.key === 'Escape') {
        toggleSearchModal();
    }
};

onMounted(() => {
    document.addEventListener('keydown', escSearchModal)
});

onUnmounted(() => {
    document.removeEventListener('keydown', escSearchModal)
});

</script>
<template>
    <div class="modal_container" @click.self="closeSearchModalContainer" v-show="showSearchModal">
        <div class="modal">
            <div class="modal_content">
                <div class="modal_header">
                    <div class="search_bar">
                        <img :src="SearchIcon" class="search_icon" alt="search_icon">
                        <input type="text" class="search_input" placeholder="Search docs">
                    </div>
                    <button class="cancel_btn" @click="closeSearchModalContainer">Cancel</button>
                </div>
                <div class="modal_search_result">
                    <p class="no_recent_searches_text">No recent searches</p>
                </div>
                <div class="modal_footer">
                    <div class="shortcut_key">
                        <div class="to_select">
                            <span class="key">
                                &#11168;
                            </span>
                            to select
                        </div>

                        <div class="to_navigate">
                            <span class="key">
                                &#129105;
                            </span>
                            <span class="key">
                                &#129105;
                            </span>
                            to navigate
                        </div>

                        <div class="to_close">
                            <span class="key">
                                esc
                            </span>
                            to close
                        </div>
                    </div>

                    <div class="algolia">
                        Search by
                        <img class="algolia_logo" :src="AlgoliaLogo" alt="algolia_logo">
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped>
.modal_container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(var(--clr-overlay), 0.8);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 15px;
}


.modal_container .modal {
    width: 760px;
    background-color: rgb(var(--clr-primary));
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid rgb(var(--clr-tertiary), 0.3);
    height: 100%;
}


.modal_container .modal .modal_content {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.modal_container .modal .modal_content .modal_header {
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.modal_container .modal .modal_content .modal_header .search_bar {
    width: 100%;
    background-color: rgb(var(--clr-tertiary), 0.2);
    border-radius: 40px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    column-gap: 10px;
}


.modal_container .modal .modal_content .modal_header .search_bar .search_icon {
    width: 18px;
    opacity: 0.5;
    filter: invert(var(--inverted-light));
    margin-bottom: -2px;
}


.modal_container .modal .modal_content .modal_header .search_bar .search_input {

    font-size: var(--fs-base);
    width: 100%;
    color: rgb(var(--clr-secondary));
}

.modal_container .modal .modal_content .modal_header .cancel_btn {
    display: none;
}


.modal_container .modal .modal_content .modal_search_result {
    height: 100%;
    margin-top: 60px;
}


.modal_container .modal .modal_content .modal_search_result .no_recent_searches_text {
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-small);
    color: rgb(var(--clr-tertiary));
    letter-spacing: 1px;

}


.modal_container .modal_footer .shortcut_key {
    border-top: 1px solid rgb(var(--clr-tertiary), 0.2);
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}


.modal_container .modal_footer .shortcut_key .to_select,
.to_navigate,
.to_close {
    display: flex;
    align-items: center;
    font-size: var(--fs-small);
    column-gap: 5px;
    color: rgb(var(--clr-tertiary));
}


.modal_container .modal_footer .shortcut_key .to_select .key,
.to_navigate .key,
.to_close .key {
    background-color: rgb(var(--clr-secondary));
    color: rgb(var(--clr-primary));
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    padding: 3px;
    width: 20px;
    font-size: var(--fs-small);
    font-weight: var(--fw-semi-bold);
}


.modal_container .modal_footer .algolia {
    display: flex;
    align-items: center;
    font-size: var(--fs-small);
    column-gap: 5px;
    color: rgb(var(--clr-tertiary));
}


.modal_container .modal_footer .algolia .algolia_logo {
    width: 80px;
}


@media (max-width: 1023px) {

    .modal_container {
        padding-block: unset;
    }

    .modal_container .modal {
        width: 100%;
        border-radius: unset;
    }

    .modal_container .modal .modal_content .modal_header .cancel_btn {
        display: block;
        color: rgb(var(--clr-accent));
        font-size: var(--fs-base);
    }

    .modal_container .modal_footer .shortcut_key {
        display: none;
    }
}
</style>