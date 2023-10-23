<template>
    <section id="portfolio" class="section pt-10 pb-20 md:pt-8 md:pb-28 lg:py-12 xl:pt-4 xl:pb-36">

        <div class="relative">
            <div
                class="absolute w-52 h-40 md:w-80 md:h-64 lg:w-[500px] lg:h-[400px] bg-indigo-500/30 left-[50%] top-[40px] lg:top-28 -translate-x-1/2 blur-[175px]">
            </div>
            <SubTitle :title="$t('portfolio')" />
            <p class="text-center px-4 md:px-8 lg:px-20 xl:px-40 mt-4 leading-7">This is the projects that i made so
                far</p>

            <div class="mt-6 md:mt-8 lg:mt-12 xl:mt-16">

                <Carousel ref="myCarousel" v-bind="settings" :breakpoints="breakpoints">
                    <Slide v-for="portfolio in portfolios" :key="portfolio.id">
                        <div
                            class="bg-gray-600/40 w-[370px] min-h-[200px] border border-gray-700/80 rounded-md lg:rounded-lg text-gray-200 overflow-hidden">
                            <div class="w-full h-[210px] lg:h-[220px] xl:h-[240px]">
                                <img v-lazy="portfolio.image" :alt="portfolio.name"
                                    class="w-full h-[210px] lg:h-[220px] xl:h-[240px] object-cover rounded-tl-lg rounded-tr-lg" />
                            </div>

                            <div class="py-4 px-3 pt-3">
                                <h4 class="text-left text-lg font-medium">{{ portfolio.name }}</h4>

                                <div class="flex gap-2 mt-3 items-center flex-wrap">
                                    <span v-for="tech in portfolio.technologies" :key="tech.id" class="text-sm font-medium"
                                        :class="tech.color">#{{
                                            tech.techName }}</span>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <!-- <template #addons>
                        <Navigation />
                    </template> -->
                </Carousel>

                <!-- Custom button next and prev -->
                <div class="flex items-center justify-center gap-3 mt-5 md:mt-8 lg:mt-10 xl:mt-14">
                    <button type="button" @click="slidePrevCarousel"
                        class="p-3 rounded-3xl font-medium text-white 0 duration-150 text-[14px] md:text-base"
                        :class="[isMinSlide ? 'bg-primary/30' : 'bg-primary hover:bg-primary/80 shadow-md shadow-pink-400/20']"
                        :disabled="isMinSlide">
                        <Icon name="material-symbols:arrow-left-alt-rounded" class="w-6 h-6"
                            :class="[isMinSlide ? 'text-gray-500' : 'text-white']" />
                    </button>
                    <button type="button" @click="slideNextCarousel"
                        class="p-3 rounded-3xl font-medium text-white  duration-150 text-[14px] md:text-base"
                        :class="[isMaxSlide ? 'bg-primary/30' : 'bg-primary hover:bg-primary/80 shadow-md shadow-pink-400/20']"
                        :disabled="isMaxSlide">
                        <Icon name="material-symbols:arrow-right-alt-rounded" class="w-6 h-6"
                            :class="[isMaxSlide ? 'text-gray-500' : 'text-white']" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// https://ismail9k.github.io/vue3-carousel/api/methods.html
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

const myCarousel = ref(null)

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'start',
})

const isMaxSlide = computed(() => {
    return myCarousel.value?.data?.currentSlide?.value === myCarousel.value?.data?.maxSlide?.value
})

const isMinSlide = computed(() => {
    return myCarousel.value?.data?.currentSlide?.value === myCarousel.value?.data?.minSlide?.value
})

const slideNextCarousel = () => {
    myCarousel.value.updateSlidesData();
    if (myCarousel.value.data.currentSlide.value === myCarousel.value.data.maxSlide.value) {
        return;
    }
    myCarousel.value.next();
}
const slidePrevCarousel = () => {
    myCarousel.value.updateSlidesData();
    if (myCarousel.value.data.currentSlide.value === myCarousel.value.data.minSlide.value) {
        return;
    }
    myCarousel.value.prev();
}

const breakpoints = ref({
    // 500px and up
    500: {
        itemsToShow: 1.2,
        snapAlign: 'start',
    },
    // 600px and up
    600: {
        itemsToShow: 1.5,
        snapAlign: 'start',
    },
    700: {
        itemsToShow: 1.6,
        snapAlign: 'start',
        itemsToScroll: 1,
    },
    750: {
        itemsToShow: 1.8,
        snapAlign: 'start',
        itemsToScroll: 1,
    },
    // 800px and up
    800: {
        itemsToShow: 2,
        snapAlign: 'start',
        itemsToScroll: 2
    },
    // 1000px and up
    1000: {
        itemsToShow: 2.9,
        snapAlign: 'start',
        itemsToScroll: 2
    },
    1200: {
        itemsToShow: 3.3,
        snapAlign: 'start',
        itemsToScroll: 2
    },
    1440: {
        itemsToShow: 3.7,
        snapAlign: 'start',
        itemsToScroll: 2
    },
    1530: {
        itemsToShow: 4,
        snapAlign: 'start',
        itemsToScroll: 2
    },
    1640: {
        itemsToShow: 4.2,
        snapAlign: 'start',
        itemsToScroll: 2
    }
});

import LogeeImg from '/portfolio/logee/logee1.webp';
import BisnisdiDubaiImg from '/portfolio/bisnis-di-dubai/bisnisdidubai1.webp';
import MerchantImg from '/portfolio/merchant/merchant1.webp';
import DextopImg from '/portfolio/dextop/dextop1.webp';
import YoubidImg from '/portfolio/youbid/youbid1.webp';
import CBSImg from '/portfolio/cbs-web/cbs1.webp';
import CBSMonitoringImg from '/portfolio/cbs-monitoring/cbs-monitoring3.webp';
import CoreTeamImg from '/portfolio/core-team/core-team.webp';
import SKMImg from '/portfolio/skm/skm1.webp';
import MyProfileImg from '/portfolio/my-profile/my-profile.webp';
import MonitoringKopnusposImg from '/portfolio/monitoring-kopnuspos/monitoring-kopnuspos1.webp';
import KPTImg from '/portfolio/kpt/kpt2.webp';

const portfolios = [
    {
        id: 'logee',
        name: 'Logee',
        desc: '',
        image: LogeeImg,
        technologies: [
            {
                id: 1,
                techName: 'Laravel',
                color: 'text-red-500'
            },
            {
                id: 2,
                techName: 'Bootstrap',
                color: 'text-sky-500'
            },
        ]
    },
    {
        id: 'bisnis_di_dubai',
        name: 'Bisnis di Dubai',
        desc: '',
        image: BisnisdiDubaiImg,
        technologies: [
            {
                id: 1,
                techName: 'Nuxt',
                color: 'text-green-500'
            },
            {
                id: 2,
                techName: 'TailwindCSS',
                color: 'text-sky-500'
            },
        ]
    },
    {
        id: 'merchant_kopnuspos',
        name: 'Merchant Kopnuspos',
        desc: '',
        image: MerchantImg,
        technologies: [
            {
                id: 1,
                techName: 'Laravel',
                color: 'text-red-500'
            },
            {
                id: 2,
                techName: 'Bootstrap',
                color: 'text-purple-500'
            },
        ]
    },
    {
        id: 'dextop',
        name: 'Dextop',
        desc: '',
        image: DextopImg,
        technologies: [
            {
                id: 1,
                techName: 'Laravel',
                color: 'text-red-500'
            },
            {
                id: 2,
                techName: 'Bootstrap',
                color: 'text-purple-500'
            },
        ]
    },
    {
        id: 'youb_id',
        name: 'Youb.id',
        desc: '',
        image: YoubidImg,
        technologies: [
            {
                id: 1,
                techName: 'PHP',
                color: 'text-indigo-500'
            },
            {
                id: 2,
                techName: 'Bootstrap',
                color: 'text-purple-500'
            },
        ]
    },
    {
        id: 'cbs_web',
        name: 'CBS Web',
        desc: '',
        image: CBSImg,
        technologies: [
            {
                id: 1,
                techName: 'Laravel',
                color: 'text-red-500'
            },
            {
                id: 2,
                techName: 'Bootstrap',
                color: 'text-purple-500'
            },
        ]
    },
    {
        id: 'cbs_monitoring',
        name: 'CBS Monitoring',
        desc: '',
        image: CBSMonitoringImg,
        technologies: [
            {
                id: 1,
                techName: 'Laravel',
                color: 'text-red-500'
            },
            {
                id: 2,
                techName: 'Bootstrap',
                color: 'text-purple-500'
            },
        ]
    },
    {
        id: 'core_team',
        name: 'Core Team Kopnus',
        desc: '',
        image: CoreTeamImg,
        technologies: [
            {
                id: 1,
                techName: 'Nuxt',
                color: 'text-green-500'
            },
            {
                id: 2,
                techName: 'TailwindCSS',
                color: 'text-sky-500'
            },
        ]
    },
    {
        id: 'skm_cianjur',
        name: 'SKM Cianjur',
        desc: '',
        image: SKMImg,
        technologies: [
            {
                id: 1,
                techName: 'Laravel',
                color: 'text-red-500'
            },
            {
                id: 2,
                techName: 'Bootstrap',
                color: 'text-purple-500'
            },
        ]
    },
    {
        id: 'my_profile_page',
        name: 'My Profile Page',
        desc: '',
        image: MyProfileImg,
        technologies: [
            {
                id: 1,
                techName: 'Nuxt',
                color: 'text-green-500'
            },
            {
                id: 2,
                techName: 'TailwindCSS',
                color: 'text-sky-500'
            },
        ]
    },
    {
        id: 'monitoring_kopnuspos',
        name: 'Monitoring Kopnuspos',
        desc: '',
        image: MonitoringKopnusposImg,
        technologies: [
            {
                id: 1,
                techName: 'Laravel',
                color: 'text-red-500'
            },
            {
                id: 2,
                techName: 'Bootstrap',
                color: 'text-purple-500'
            },
        ]
    },
    {
        id: 'kpt',
        name: 'KopnusPosTaspen',
        desc: '',
        image: KPTImg,
        technologies: [
            {
                id: 1,
                techName: 'Laravel',
                color: 'text-red-500'
            },
            {
                id: 2,
                techName: 'Bootstrap',
                color: 'text-purple-500'
            },
            {
                id: 3,
                techName: 'Vue',
                color: 'text-green-600'
            },
            {
                id: 4,
                techName: 'Inertia',
                color: 'text-indigo-500'
            },
        ]
    },
];

</script>

<style>
/* .carousel__slide {
    padding: 10px;
} */

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    width: 48px;
    height: 48px;
}

.carousel__icon {
    color: white;
}
</style>