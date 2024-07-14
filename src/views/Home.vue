<script setup>
import { computed, ref } from 'vue'
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import CtaButton from '../components/CtaButton.vue';
import VideoItem from '../components/VideoItem.vue';

import ReactLogo from '../assets/logo/react_logo.png';
import GoogleChromeLogo from '../assets/logo/google_chrome_logo.svg';
import FirefoxLogo from '../assets/logo/firefox_logo.svg';
import SafariLogo from '../assets/logo/safari_logo.svg';
import AppleLogo from '../assets/logo/apple_logo.svg';
import AndroidLogo from '../assets/logo/android_logo.svg';

import SearchIcon from '../assets/icon/search_icon.png';
import ArrowIcon from '../assets/icon/arrow_right_icon.png'
import FrameworksIcon from '../assets/icon/frameworks_icon.png';
import NewsIcon from '../assets/icon/news_icon.png';
import PlatformIcon from '../assets/icon/platform_icon.png';
import CodeIcon from '../assets/icon/code_icon.png';

import MyVideoData from '../data/my_video_data.json';
import ThreeVideosData from '../data/three_videos_data.json';
import HistoryOfReactVideosData from '../data/history_of_react_videos_data.json';
import ReactConf2021VideosData from '../data/react_conf_2021_videos_data.json';
import ReactConf2019VideosData from '../data/react_conf_2019_videos_data.json';
import ReactNewsData from '../data/react_news_data.json';


const heroTitle = "React";
const heroSubTitle = "The library for web and native user interfaces";

const myVideoData = ref(MyVideoData);
const threeVideosData = ref(ThreeVideosData);

const historyOfReactVideosData = ref(HistoryOfReactVideosData);
const searchHistoryOfReactVideosData = ref("");
const filterHistoryOfReactVideosData = computed(() => {
    return historyOfReactVideosData.value.filter(data => data.video_title.toLowerCase().includes(searchHistoryOfReactVideosData.value.toLowerCase()));
});


const currentContent = ref('react_conf_2021');

const reactConf2021VideosData = ref(ReactConf2021VideosData);
const searchReactConf2021VideosData = ref("");
const filterReactConf2021VideosData = computed(() => {
    return reactConf2021VideosData.value.filter(data => data.video_title.toLowerCase().includes(searchReactConf2021VideosData.value.toLowerCase()));
});

const reactConf2019VideosData = ref(ReactConf2019VideosData);
const searchReactConf2019VideosData = ref("");
const filterReactConf2019VideosData = computed(() => {
    return reactConf2019VideosData.value.filter(data => data.video_title.toLowerCase().includes(searchReactConf2019VideosData.value.toLowerCase()));
});


const reactNewsData = ref(ReactNewsData);

</script>
<template>
    <NavBar />
    <section class="hero">
        <div class="hero_content">
            <img class="react_logo" :src="ReactLogo" alt="react_logo">
            <div class="hero_text">
                <h1 class="hero_title">{{ heroTitle }}</h1>
                <p class="hero_description">{{ heroSubTitle }}</p>
            </div>
            <div class="cta_btns">
                <CtaButton class="learn_react_btn" btnLabel="Learn React" url="https://react.dev/learn" />
                <CtaButton class="api_reference_btn" :icon="ReactLogo" btnLabel="API Reference" url="https://react.dev/reference/react" />
            </div>
        </div>
    </section>

    <section class="section create_ui_data_section">
        <div class="section_content">
            <div class="section_text">
                <h1 class="section_title">Create user interfaces from components</h1>
                <p class="section_description">React lets you build user interfaces out of individual pieces called
                    components.
                    Create your own React components like <span class="highlight_bg">Thumbnail</span>, <span
                        class="highlight_bg">LikeButton</span>, and <span class="highlight_bg">Video</span>. Then
                    combine
                    them into entire
                    screens, pages, and apps.</p>
            </div>
            <div class="section_code">
                <div class="code_editor">
                    <div class="file_name">Video.js</div>
                    <pre class="pre"><code class="codes_syntax">
<span class="blue">function</span> <span class="aquamarine">Video</span>({ <span class="blue">video</span> }) {
    <span class="blue">return</span> (
    &lt;<span class="orange">div</span>&gt;
      &lt;<span class="aquamarine">Thumbnail</span> <span class="blue">video</span>={video} /&gt;
     &lt;<span class="orange">a</span><span class="blue">href</span>={video.<span class="blue">url</span>}&gt;
        &lt;<span class="orange">h3</span>&gt;{video.<span class="blue">title</span>}&lt;/<span class="orange">h3</span>&gt;
        &lt;<span class="orange">p</span>&gt;{video.<span class="blue">description</span>}&lt;/<span class="orange">p</span>&gt;
        &lt;/<span class="orange">a</span>&gt;
      &lt;<span class="aquamarine">LikeButton</span> <span class="blue">video</span>={video} /&gt;
    &lt;/<span class="orange">div</span>&gt;
  );
}
  </code></pre>
                </div>
                <div class="section_code_output">
                    <div class="card">
                        <div class="card_content">
                            <div class="video_item_list">
                                <VideoItem v-for="data in myVideoData" :key="data.id" :data="data" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section_text">
                <p class="section_description">Whether you work on your own or with thousands of other developers, using
                    React feels the same. It is designed to let you seamlessly combine components written by independent
                    people, teams, and organizations.</p>
            </div>
        </div>
    </section>

    <section class="section write_components_data_section">
        <div class="section_content">
            <div class="section_text">
                <h1 class="section_title">Write components with code and markup</h1>
                <p class="section_description">React components are JavaScript functions. Want to show some content
                    conditionally? Use an <span class="highlight_bg">if</span>
                    statement.
                    Displaying a list? Try array <span class="highlight_bg">map()</span>. Learning React is learning
                    programming.</p>
            </div>
            <div class="section_code">
                <div class="code_editor">
                    <div class="file_name">VideoList.js</div>
                    <pre class="pre"><code class="codes_syntax">
<span class="blue">function</span> <span class="aquamarine">VideoList</span>({ <span class="blue">video</span>, <span class="blue">emptyHeading</span> }) {
    <span class="blue">const</span> count = videos.<span class="blue">length</span>;
    <span class="blue">let</span> heading =  emptyHeading;
    <span class="blue">if</span> (count > <span class="red">0</span>) {
        <span class="blue">const</span> noun = count > <span class="red">1</span> ? <span class="violet">'Videos'</span> : <span class="violet">'Video'</span>;
        heading = count + <span class="violet">' '</span> + noun;
    }
    <span class="blue">return</span> (
    &lt;<span class="orange">section</span>&gt;
    &lt;<span class="orange">h2</span>&gt;{heading}&lt;<span class="orange">/h2</span>&gt;
    {videos.<span class="blue">map</span>(video => 
        &lt;<span class="aquamarine">Video</span> <span class="blue">key</span>={video.<span class="blue">id</span>} <span class="blue">video</span>={video} /&gt;
    )}
      &lt;/<span class="orange">section</span>&gt;
  );
}
  </code></pre>
                </div>
                <div class="section_code_output">
                    <div class="card">
                        <div class="card_content">
                            <div class="video_item_list">
                                <h2 class="video_data_length">{{ threeVideosData.length }} videos</h2>
                                <VideoItem v-for="data in threeVideosData" :key="data.id" :data="data" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section_text">
                <p class="section_description">This markup syntax is called JSX. It is a JavaScript syntax extension
                    popularized by React. Putting JSX markup close to related rendering logic makes React components
                    easy to
                    create, maintain, and delete.</p>
            </div>
        </div>
    </section>

    <section class="section add_interactivity_section">
        <div class="section_content">
            <div class="section_text">
                <h1 class="section_title">Add interactivity wherever you need it</h1>
                <p class="section_description">React components receive data and return what should appear on the
                    screen.
                    You can pass them new data in response to an interaction, like when the user types into an input.
                    React
                    will then update the screen to match the new data.</p>
            </div>
            <div class="section_code">
                <div class="code_editor">
                    <div class="file_name">SearchableVideoList.js</div>
                    <pre class="pre"><code class="codes_syntax">
<span class="blue">import</span> { useState } <span class="blue">from</span> <span class="violet">'react'</span>;
<span class="blue">function</span> <span class="aquamarine">SearchableVideoList</span>({ <span class="blue">videos</span> }) {
    <span class="blue">const</span> [searchText, setSearchText] = <span class="aquamarine">useState</span>(<span class="violet">''</span>);
    <span class="blue">const</span> foundVideos = <span class="aquamarine">filterVideos</span>(videos, searchText);
    <span class="blue">return</span> (
    &lt;&gt;
        &lt;<span class="aquamarine">SearchInput</span>
        <span class="blue">value</span>={searchText}
        <span class="blue">onChange</span>={newText => <span class="aquamarine">setSearchText</span>(newText)} /&gt;
        &lt;<span class="aquamarine">VideoList</span>
        <span class="blue">videos</span>={foundVideos}
        <span class="blue">emptyHeading</span>={<span class="violet">`No matches for “</span>${searchText}<span class="violet">”`</span>} /&gt;
    &lt;/&gt;
  );
}
  </code></pre>
                </div>
                <div class="section_code_output">
                    <div class="card">
                        <div class="card_content">
                            <div class="url"><span class="url_link">example.com/<span
                                        class="url_path">videos.html</span></span></div>
                            <div class="video_item_list">
                                <div class="video_item_header">
                                    <h1 class="video_item_header_title">React Videos</h1>
                                    <p class="video_item_header_subtitle">A brief history of React</p>
                                    <div class="search_bar">
                                        <img :src="SearchIcon" class="search_icon" alt="search_icon">
                                        <input type="text" v-model.trim="searchHistoryOfReactVideosData"
                                            class="search_input" placeholder="Search">
                                    </div>
                                </div>
                                <template v-if="filterHistoryOfReactVideosData.length > 0">
                                    <h2 class="video_data_length">{{ filterHistoryOfReactVideosData.length }} videos
                                    </h2>
                                    <VideoItem v-for="data in filterHistoryOfReactVideosData" :key="data.id"
                                        :data="data" />
                                </template>
                                <template v-else>
                                    <h2 class="no_matches_for">No matches for "{{ searchHistoryOfReactVideosData }}"
                                    </h2>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section_text">
                <p class="section_description">You don't have to build your whole page in React. Add React to your
                    existing
                    HTML page, and render interactive React components anywhere on it.</p>
                <CtaButton class="add_react_to_your_page_btn cta_btn" :icon1="CodeIcon" btnLabel="Add React to your page" :icon2="ArrowIcon"/>
            </div>
        </div>
    </section>

    <section class="section go_fullstack_section">
        <div class="section_content">
            <div class="section_text">
                <h1 class="section_title">Go full-stack with a framework</h1>
                <p class="section_description">React is a library. It lets you put components together, but it doesn’t
                    prescribe how to do routing and data fetching. To build an entire app with React, we recommend a
                    full-stack React framework like <a href="#" class="link">Next.js</a> or <a href="#"
                        class="link">Remix</a>.</p>
            </div>
            <div class="section_code">
                <div class="code_editor">
                    <div class="file_name">confs/[slug].js</div>
                    <pre class="pre"><code class="codes_syntax">
<span class="blue">import</span> { db } <span class="blue">from</span> <span
                            class="violet">'./database.js'</span>;
<span class="blue">import</span> { Suspense } <span class="blue">from</span> <span
                            class="violet">'react'</span>;
<span class="blue">async function</span> <span class="aquamarine">ConferencePage</span>({ slug }) {
    <span class="blue">const</span> conf = <span class="blue">await</span> db.<span class="blue">Confs</span>.<span class="blue">find</span>({ <span class="blue">slug</span> });
    <span class="blue">return</span> (
        &lt;<span class="aquamarine">ConferenceLayout</span> <span class="blue">conf</span>={conf}&gt;
            &lt;<span class="aquamarine">Suspense</span> <span class="blue">fallback</span>={&lt;<span
                class="aquamarine">TalksLoading</span> /&gt;}&gt;
                        &lt;<span class="aquamarine">Talks</span> <span class="blue">confId</span>={conf.<span class="blue">id</span>} /&gt;
            &lt;/<span class="aquamarine">Suspense</span>&gt;
        &lt;/<span class="aquamarine">ConferenceLayout</span>&gt;
    );
}

<span class="blue">async function</span> <span class="aquamarine">Talks</span>({ <span
                            class="blue">confId</span> }) {
    <span class="blue">const</span> talks = <span class="blue">await</span> db.<span
                            class="blue">Talks</span>.<span class="blue">findAll</span>({ <span
                            class="blue">confId</span> });
    <span class="blue">const</span> videos = talks.<span class="blue"></span>map(talk => talk.<span
                            class="blue">video</span>);
    <span class="blue">return</span> &lt;<span class="aquamarine">SearchableVideoList</span> <span
                            class="blue">videos</span>={videos} /&gt;;
}

                    </code></pre>
                </div>
                <div class="section_code_output">
                    <div class="card">
                        <div class="card_content">

                            <template v-if="currentContent === 'react_conf_2021'">
                                <div class="url"><span class="url_link">example.com/<span
                                            class="url_path">confs/react-conf-2021</span></span></div>
                                <div class="react_conf_year">
                                    <img class="react_conf_logo" :src="ReactLogo" alt="react_logo">
                                    <select class="react_conf_select" v-model="currentContent">
                                        <option class="react_conf_option" value="react_conf_2021">React Conf 2021
                                        </option>
                                        <option class="react_conf_option" value="react_conf_2019">React Conf 2019
                                        </option>
                                    </select>
                                </div>

                                <div class="video_item_list">
                                    <div class="video_item_header">
                                        <div class="search_bar">
                                            <img :src="SearchIcon" class="search_icon" alt="search_icon">
                                            <input type="text" v-model.trim="searchReactConf2021VideosData"
                                                class="search_input" placeholder="Search">
                                        </div>
                                    </div>
                                    <template v-if="filterReactConf2021VideosData.length > 0">
                                        <h2 class="video_data_length">{{ filterReactConf2021VideosData.length }} videos
                                        </h2>
                                        <VideoItem v-for="data in filterReactConf2021VideosData" :key="data.id"
                                            :data="data" />
                                    </template>
                                    <template v-else>
                                        <h2 class="no_matches_for">No matches for "{{ searchReactConf2021VideosData }}"
                                        </h2>
                                    </template>
                                </div>
                            </template>

                            <template v-if="currentContent === 'react_conf_2019'">
                                <div class="url"><span class="url_link">example.com/<span
                                            class="url_path">confs/react-conf-2019</span></span></div>
                                <div class="react_conf_year react_conf_year_2019">
                                    <select class="react_conf_select" v-model="currentContent">
                                        <option class="react_conf_option" value="react_conf_2021">React Conf 2021
                                        </option>
                                        <option class="react_conf_option" value="react_conf_2019">React Conf 2019
                                        </option>
                                    </select>
                                </div>

                                <div class="video_item_list">
                                    <div class="video_item_header">
                                        <div class="search_bar">
                                            <img :src="SearchIcon" class="search_icon" alt="search_icon">
                                            <input type="text" v-model.trim="searchReactConf2019VideosData"
                                                class="search_input" placeholder="Search">
                                        </div>
                                    </div>
                                    <template v-if="filterReactConf2019VideosData.length > 0">
                                        <h2 class="video_data_length">{{ filterReactConf2019VideosData.length }} videos
                                        </h2>
                                        <VideoItem v-for="data in filterReactConf2019VideosData" :key="data.id"
                                            :data="data" />
                                    </template>
                                    <template v-else>
                                        <h2 class="no_matches_for">No matches for "{{ searchReactConf2019VideosData }}"
                                        </h2>
                                    </template>
                                </div>
                            </template>

                        </div>
                    </div>
                </div>
            </div>
            <div class="section_text">
                <p class="section_description">React is also an architecture. Frameworks that implement it let you fetch
                    data in asynchronous components that run on the server or even during the build. Read data from a
                    file
                    or a database, and pass it down to your interactive components.</p>
                <CtaButton class="get_started_with_a_framework_btn cta_btn" :icon1="FrameworksIcon" btnLabel="Get started with a framework" :icon2="ArrowIcon" />
            </div>
        </div>
    </section>

    <section class="section use_the_best_section">
        <div class="section_content">
            <div class="section_text">
                <h1 class="section_title">Use the best from every platform</h1>
                <p class="section_description">People love web and native apps for different reasons. React lets you
                    build
                    both web apps and native apps using the same skills. It leans upon each platform's unique strengths
                    to
                    let your interfaces feel just right on every platform.</p>
            </div>
            <div class="section_platform">
                <div class="web_platform">
                    <div class="url">
                        <span class="url_link">example.com</span>
                    </div>
                    <div class="web_platform_text">
                        <h1 class="web_platform_title">Stay true to the web</h1>
                        <p class="web_platform_description">People expect web app pages to load fast. On the server,
                            React
                            lets
                            you start streaming HTML while you're still fetching data, progressively filling in the
                            remaining
                            content before any JavaScript code loads. On the client, React can use standard web APIs to
                            keep
                            your UI responsive even in the middle of rendering.</p>
                    </div>
                    <div class="web">
                        <div class="web_item">
                            <img class="web_item_img" :src="GoogleChromeLogo" alt="google_chrome_logo">
                        </div>
                        <div class="web_item">
                            <img class="web_item_img" :src="FirefoxLogo" alt="firefox_logo">
                        </div>
                        <div class="web_item">
                            <img class="web_item_img" :src="SafariLogo" alt="safari_logo">
                        </div>
                    </div>
                </div>
                <div class="mobile_platform">
                    <div class="mobile_top">
                        <span class="time">10:32 AM</span>
                    </div>
                    <div class="mobile_platform_text">
                        <h1 class="mobile_platform_title">Go truly native</h1>
                        <p class="mobile_platform_description">People expect native apps to look and feel like their
                            platform.
                            React Native and Expo let you build apps in React for Android, iOS, and more. They look and
                            feel
                            native because their UIs are truly native. It's not a web view—your React components render
                            real
                            Android and iOS views provided by the platform.</p>
                    </div>
                    <div class="native">
                        <div class="native_item">
                            <img class="native_item_img apple_logo" :src="AppleLogo" alt="apple_logo">
                        </div>
                        <div class="native_item">
                            <img class="native_item_img" :src="AndroidLogo" alt="android_logo">
                        </div>
                    </div>
                </div>
            </div>
            <div class="section_text">
                <p class="section_description">With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.</p>
                <CtaButton class="build_for_native_platform_btn cta_btn" :icon1="PlatformIcon" btnLabel="Build for native platforms" :icon2="ArrowIcon" />
            </div>
        </div>
    </section>


    <section class="section upgrade_future_ready_section">
        <div class="section_content upgrade_future_ready_content">
            <div class="section_text upgrade_future_ready_text">
                <h1 class="section_title">Upgrade when the future is ready</h1>
                <p class="section_description">
                    React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy.<br><br>   
                    The React team is always researching how to improve React. Some research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.
                </p>
            </div>
            <div class="news">
                <div class="news_content">
                        <h1 class="news_title"><img :src="ArrowIcon" class="arrow_down_icon" alt="arrow_down_icon">LATEST REACT NEWS</h1>
                    <div class="news_list">
                        <div class="news_item" v-for="data in reactNewsData" :key="data.id">
                          <h2 class="news_item_title">{{data.news_title}}</h2>
                          <div class="date">
                            <img class="news_icon" :src="NewsIcon" alt="news_icon">
                            <span class="date_text">
                                {{data.news_date}}
                            </span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <CtaButton class="read_more_react_news_btn cta_btn" :icon1="NewsIcon" btnLabel="Read more React news" :icon2="ArrowIcon"/>
            </div>
        </div>
    </section>

    <section class="section join_a_community_section">
        <div class="section_content">
            <div class="section_text">
                <h1 class="section_title">Join a community of millions</h1>
                <p class="section_description">You're not alone. Two million developers from all over the world visit the React docs every month. React is something that people and teams can agree on.</p>
            </div>
            <div class="images_marquee">
                <div class="images_marquee_container">
                    <div class="images_marquee_item"><img src="../assets/images/react_conf_elizabet.webp" alt="react_conf_elizabet" class="images_marquee_item_img"></div>
                    <div class="images_marquee_item"><img src="../assets/images/react_conf_fun.webp" alt="react_conf_fun" class="images_marquee_item_img"></div>
                    <div class="images_marquee_item"><img src="../assets/images/react_conf_hallway.webp" alt="react_conf_hallway" class="images_marquee_item_img"></div>
                    <div class="images_marquee_item"><img src="../assets/images/react_conf_nat.webp" alt="react_conf_nat" class="images_marquee_item_img"></div>
                    <div class="images_marquee_item"><img src="../assets/images/react_india_hallway.webp" alt="react_india_hallway" class="images_marquee_item_img"></div>
                    <div class="images_marquee_item"><img src="../assets/images/react_india_selfie.webp" alt="react_india_selfie" class="images_marquee_item_img"></div>
                    <div class="images_marquee_item"><img src="../assets/images/react_india_sunil.webp" alt="react_india_sunil" class="images_marquee_item_img"></div>
                    <div class="images_marquee_item"><img src="../assets/images/react_india_team.webp" alt="react_india_team" class="images_marquee_item_img"></div>
                </div>
            </div>
            <div class="section_text">
                <p class="section_description">This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It’s a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.</p>
            </div>
        </div>
    </section>

    <div class="section react_community_section">
        <div class="section_content react_community_content">
            <div class="welcome_greet">
                <img :src="ReactLogo" class="react_logo" alt="react_logo">
                <h1 class="section_title">Welcome to the React community</h1>
                <CtaButton class="get_started_btn" btnLabel="Get Started" url="https://react.dev/learn" />
            </div>
        </div>
    </div>

    <Footer />
</template>

<style scoped>
.react_logo
{
    width: 200px;
}

/* Hero */
.hero .hero_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-block: 100px;
    padding-inline: 20px;
}

.hero .hero_content .hero_text {
    margin-bottom: 20px;
}

.hero .hero_content .hero_text .hero_title {
    font-size: var(--fs-xl);
    font-weight: var(--fw-bold);
    margin-bottom: 10px;
}

.hero .hero_content .hero_text .hero_description {
    font-size: var(--fs-md);
    font-weight: var(--fw-semi-bold);
}

.hero .hero_content .cta_btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.hero .hero_content .learn_react_btn {
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-primary), 0.8);
}

.hero .hero_content .api_reference_btn {
    border: 1px solid rgb(var(--clr-tertiary), 0.3);
    color: var(--clr-secondary);

}

.hero .hero_content .api_reference_btn:hover {
    background-color: rgb(var(--clr-tertiary), 0.1);
}


/* Section */
.create_ui_data_section,
.add_interactivity_section,
.use_the_best_section,
.join_a_community_section,
.react_community_section {
    background-color: rgb(var(--clr-black));
}

.section .section_content {
    padding-block: 100px;
}

.section .section_content .section_text {
    width: 100%;
    max-width: 800px;
    padding-inline: 20px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section .section_content .section_title {
    font-size: var(--fs-xl);
    line-height: 1;
    margin-bottom: 30px;
    font-weight: var(--fw-bold);
}

.section .section_content .section_description {
    font-size: var(--fs-base);
    font-weight: var(--fw-semi-bold);
    line-height: 1.5;
    margin-bottom: 40px;
}

.section_code {
    padding-inline: 80px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section .section_content .section_code .code_editor {
    background-color: rgb(var(--clr-black));
    border-radius: 15px;
    border: 1px solid rgb(var(--clr-secondary), 0.1);
    width: 100%;
    overflow: hidden;
}

.section .section_content .section_code .code_editor .file_name {
    background-color: rgb(var(--clr-primary));
    color: rgb(var(--clr-tertiary));
    padding: 10px 20px;
    font-size: 14px;
}

.section .section_content .section_code .code_editor .pre {
    margin: 0;
    overflow: auto;
    padding-inline: 20px;
}

.section .section_content .section_code .code_editor .codes_syntax {
    font-family: var(--ff-secondary);
    font-size: var(--fs-small);
    font-weight: var(--fw-bold);
    line-height: 1.5;
    letter-spacing: 1px;
}

.section .section_content .section_code .code_editor .codes_syntax .blue {
    color: rgb(var(--clr-blue));
}

.section .section_content .section_code .code_editor .codes_syntax .orange {
    color: rgb(var(--clr-orange));
}

.section .section_content .section_code .code_editor .codes_syntax .aquamarine {
    color: rgb(var(--clr-aquamarine));
}

.section .section_content .section_code .code_editor .codes_syntax .red {
    color: rgb(var(--clr-red));
}

.section .section_content .section_code .code_editor .codes_syntax .violet {
    color: rgb(var(--clr-violet));
}

.section .section_content .section_code .section_code_output {
    background-image: url("./images/meta_gradient_dark.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 350px;
    border-radius: 0 30px 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px;
}

.section .section_content .section_code_output .card {
    background: rgb(var(--clr-secondary));
    border-radius: 15px;
    width: 100%;
    max-width: 570px;
    height: auto;
    position: absolute;
    overflow: hidden;
}

.section .section_content .section_code_output .card .card_content {

    color: rgb(var(--clr-primary));
    max-height: 400px;
    overflow: auto;
}

.section .section_content .section_code_output .card .card_content .url {
    background-color: rgb(var(--clr-secondary));
    color: rgb(var(--clr-tertiary));
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid rgb(var(--clr-primary), 0.1);
    z-index: 1;
}

.section .section_content .section_code_output .card .card_content .url .url_link {
    font-size: var(--fs-small);
    background-color: rgb(var(--clr-primary), 0.1);
    border-radius: 20px;
    padding: 10px;
    width: 100%;
}

.section .section_content .section_code_output .card .card_content .url .url_link .url_path {
    font-weight: var(--fw-semi-bold);
}



.section .section_content .section_code_output .card .card_content .react_conf_year {
    background-color: rgb(var(--clr-black));
    width: 100%;
    height: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.section .section_content .section_code_output .card .card_content .react_conf_year_2019 {
    background-image: url('../assets/images/cover.svg');
    background-size: cover;
    background-position: center;
}

.section .section_content .section_code_output .card .card_content .react_conf_year .react_conf_logo {
    width: 100%;
    max-width: 140px;
    display: flex;
    align-items: center;
}

.section .section_content .section_code_output .card .card_content .react_conf_year .react_conf_select {
    padding: 5px;
    background-color: transparent;
    color: rgb(var(--clr-secondary));
    font-size: var(--fs-base);
    font-weight: var(--fw-bold);
    border: 2px solid rgb(var(--clr-secondary));
    outline: none;
    border-radius: 3px;
    width: 100%;
    max-width: 180px;
    position: absolute;
    bottom: 10px;
    left: 15px;
    cursor: pointer;
}

.section .section_content .section_code_output .card .card_content .react_conf_year .react_conf_select .react_conf_option {
    background-color: rgb(var(--clr-primary));
    font-size: var(--fs-base);
    cursor: pointer;
}

.section .section_content .section_code_output .card .card_content .video_item_list {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 20px;
}

.section .section_content .section_code_output .card .card_content .video_item_list .video_item_header {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.section .section_content .section_code_output .card .card_content .video_item_list .video_item_header_title {
    font-weight: var(--fw-bold);
}

.section .section_content .section_code_output .card .card_content .video_item_list .video_item_header_subtitle {
    color: rgb(var(--clr-tertiary));
    font-weight: var(--fw-semi-bold);
}

.section .section_content .section_code_output .card .card_content .video_item_list .video_item_header .search_bar {
    background-color: rgb(var(--clr-primary), 0.1);
    border-radius: 20px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.section .section_content .section_code_output .card .card_content .video_item_list .video_item_header .search_bar .search_icon {
    width: 18px;
    opacity: 0.5;
    filter: invert(var(--invert-dark));
    margin-bottom: -2px;
}

.section .section_content .section_code_output .card .card_content .video_item_list .video_item_header .search_bar .search_input {
    font-size: var(--fs-base);
    width: 100%;
    color: rgb(var(--clr-primary));
}

.section .section_content .section_code_output .card .card_content .video_item_list .no_matches_for {
    font-size: var(--fs-base);
    font-weight: var(--fw-bold);
}

.section .section_content .section_code_output .card .card_content .video_item_list .video_data_length {
    color: rgb(var(--clr-primary));
    font-weight: var(--fw-semi-bold);
}


/* Platform */
.section .section_content .section_platform {
    padding-inline: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px 20px;
    margin-bottom: 100px;
}


.section .section_content .section_platform .web_platform {
    background-color: rgb(var(--clr-secondary));
    color: rgb(var(--clr-primary));
    border-radius: 20px;
    min-height: 350px;
    height: 100%;
    padding-bottom: 50px;
    position: relative;
}

.section .section_content .section_platform .mobile_platform {
    background-color: rgb(var(--clr-primary));
    border-radius: 20px;
    border: 10px solid #000;
    min-height: 350px;
    height: 100%;
    padding-bottom: 50px;
    position: relative;
}


.section .section_content .section_platform .web_platform .web_platform_text,
.section .section_content .section_platform .mobile_platform .mobile_platform_text {
    padding: 20px 40px;
}

.section .section_content .section_platform .web_platform .web_platform_title,
.section .section_content .section_platform .mobile_platform .mobile_platform_title {
    font-size: var(--fs-md);
    margin-bottom: 10px;
    font-weight: var(--fw-semi-bold);
}

.section .section_content .section_platform .web_platform .web_platform_description,
.section .section_content .section_platform .mobile_platform .mobile_platform_description {
    font-size: var(--fs-base);
    font-weight: var(--fw-semi-bold);
    line-height: 1.5;
}


.section .section_content .section_platform .web_platform .url {
    padding: 15px;
    border-bottom: 1px solid rgb(var(--clr-primary), 0.1);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section .section_content .section_platform .web_platform .url .url_link {

    background-color: rgb(var(--clr-primary), 0.1);
    border-radius: 20px;
    padding: 10px;
    font-size: var(--fs-small);
    width: 100%;
    text-align: center;
    color: rgb(var(--clr-tertiary))
}

.section .section_content .section_platform .mobile_platform .mobile_top {
    padding: 15px;
}

.section .section_content .section_platform .mobile_platform .mobile_top .time {
    font-size: var(--fs-small);
    font-weight: var(--fw-semi-bold);
}

.section .section_content .section_platform .web_platform .web,
.section .section_content .section_platform .mobile_platform .native
{
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    position: absolute;
    width: 100%;
    bottom: -40px;
}

.section .section_content .section_platform .web_platform .web .web_item,
.section .section_content .section_platform .mobile_platform .native .native_item
{
    padding: 10px;
    background-color: rgb(var(--clr-secondary));
    border: 1px solid rgb(var(--clr-primary), 0.1);
    border-radius: 20px;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section .section_content .section_platform .web_platform .web .web_item .web_item_img,
.section .section_content .section_platform .mobile_platform .native .native_item .native_item_img
{
    width: 100%;
    max-width: 60px;
}

.section .section_content .section_platform .mobile_platform .native .native_item .apple_logo
{
    max-width: 40px;
    filter: invert(var(--invert-light));
}
.upgrade_future_ready_section .upgrade_future_ready_content 
{
 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: left;
    padding-inline: 80px;
}

.upgrade_future_ready_section .upgrade_future_ready_content .upgrade_future_ready_text
{
    text-align: left;
    max-width: unset;   
    display: flex;
    align-items: flex-start;
    margin: unset;
}

.upgrade_future_ready_section .upgrade_future_ready_content .news .news_content
{
    margin-bottom: 60px;
}

.upgrade_future_ready_section .upgrade_future_ready_content .news .news_content .news_title 
{
    margin-bottom: 20px;
    font-size: var(--fs-base);
    font-weight: var(--fw-semi-bold);
    color: rgb(var(--clr-tertiary));
    display: flex;
    align-items: center;
    column-gap: 15px;
}

.upgrade_future_ready_section .upgrade_future_ready_content .news .news_content .news_title .arrow_down_icon
{
    transform: rotate(90deg);
    width: 8px;
    opacity: 0.5;
}

.upgrade_future_ready_section .upgrade_future_ready_content .news .news_list 
{
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.upgrade_future_ready_section .upgrade_future_ready_content .news .news_list .news_item 
{
    padding: 20px;
    border: 1px solid rgb(var(--clr-tertiary), 0.2);
    border-radius: 10px;
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 10px;
}

.upgrade_future_ready_section .upgrade_future_ready_content .news .news_list .news_item_title 
{
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-md);
}

.upgrade_future_ready_section .upgrade_future_ready_content .news .news_list .news_item_title:hover 
{
    text-decoration: underline;
}

.upgrade_future_ready_section .upgrade_future_ready_content .news .news_content .date
{
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.upgrade_future_ready_section .upgrade_future_ready_content .news .news_content .date .news_icon 
{
    opacity: 0.5;
    filter: invert(var(--invert-light));
}
.upgrade_future_ready_section .upgrade_future_ready_content .news .news_content .date .date_text {
    font-size: var(--fs-base);
    color: rgb(var(--clr-tertiary))
}

/* Images Marquee */
.section .section_content .images_marquee
{
    overflow: hidden;
    width: 100%;
    margin-bottom: 40px;
}

.section .section_content .images_marquee .images_marquee_container 
{
    display: flex;
    align-items: center;
    column-gap: 40px;
    width: 200%;
    animation: marquee 30s linear infinite;
    padding-block: 30px;
}
.section .section_content .images_marquee .images_marquee_container .images_marquee_item 
{
    transition: all 0.3s;
}

.section .section_content .images_marquee .images_marquee_container .images_marquee_item .images_marquee_item_img
{
    width: 300px;
    height: 230px;
    object-fit: cover;
    border-radius: 20px;
}

.section .section_content .images_marquee .images_marquee_container .images_marquee_item:nth-child(odd)
{
    transform: rotate(3deg);
}

.section .section_content .images_marquee .images_marquee_container .images_marquee_item:nth-child(odd):hover 
{
    transform: rotate(-3deg);
    transform: scale(1.1);
}

.section .section_content .images_marquee .images_marquee_container .images_marquee_item:nth-child(even)
{
    transform: rotate(-3deg);
}

.section .section_content .images_marquee .images_marquee_container .images_marquee_item:nth-child(even):hover
{
    transform: rotate(3deg);
    transform: scale(1.1);
}

@keyframes marquee {
    0%
    {
        transform: translateX(0);
    }
    100%
    {
        transform: translateX(-50%);
    }
}

.react_community_section .react_community_content
{
    padding-block: 0 50px;
}

.react_community_section .react_community_content .welcome_greet
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-inline: 20px;    
    width: 100%;
    max-width: 800px;
    margin: 0 auto
}

.react_community_section .react_community_content .get_started_btn
{
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-primary), 0.8);
}
/* Laptop */
@media (max-width: 1023px) {

    /* Hero */
    .hero .hero_content {
        padding-block: 80px;
    }

    .hero .hero_content .hero_text .hero_title {
        font-size: var(--fs-lg)
    }

    /* Section */
    .section .section_content .section_text {
        text-align: left;
        align-items: flex-start;
    }

    .section .section_content .section_code {
        flex-direction: column;
        padding-inline: unset;
    }

    .section .section_content .section_code .code_editor {
        border-radius: unset;
    }

    .section .section_content .section_code .section_code_output {
        border-radius: unset;
    }

    .section .section_content .section_code_output .card {
        position: unset;
        max-width: 770px;
    }

    .section .section_content .section_platform 
    {
        flex-direction: column;
        padding-inline: 20px;
    }

    .section .section_content .section_platform .web_platform .web_platform_text,
    .section .section_content .section_platform .mobile_platform .mobile_platform_text {
        padding: 20px;
    }


    .upgrade_future_ready_section .upgrade_future_ready_content 
    {
        grid-template-columns: 1fr;
    }
}

/* Tablet */
@media (max-width: 767px) {

    /* Hero */
    .hero .hero_content {
        padding-block: 40px 80px;
    }

    .upgrade_future_ready_section .upgrade_future_ready_content 
    {
        padding-inline: 20px;
    }
}

/* Mobile */
@media (max-width: 639px) {

    /* Hero */
    .hero .hero_content {
        padding-block: 40px 80px;
    }

    .hero .hero_content .cta_btns {
        flex-direction: column;
    }

    .hero .hero_content .learn_react_btn,
    .api_reference_btn {
        width: 100%;
    }

    .upgrade_future_ready_section .upgrade_future_ready_content .news .news_content .news_list
    {
        grid-template-columns: 1fr;
    }
}
</style>