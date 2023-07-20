<template>
    <section id="portfolio" class="section py-6 md:py-8 lg:py-12 xl:py-28">

        <div class="relative">
            <SubTitle :title="$t('portfolio')" />
            <p class="text-center px-4 md:px-8 lg:px-20 xl:px-40 mt-4 leading-7">This is the projects that i made so
                far</p>

            <div class="mt-6 md:mt-8 lg:mt-12 xl:mt-16">

                <Carousel ref="myCarousel" v-bind="settings" :breakpoints="breakpoints">
                    <Slide v-for="portfolio in portfolios" :key="portfolio.id">
                        <div
                            class="bg-gray-700/50 min-h-[200px] rounded-md lg:rounded-lg text-gray-200 w-[400px] overflow-hidden">
                            <div class="w-full md:h-[180px] lg:h-[220px] xl:h-[230px] overflow-hidden">
                                <img :src="portfolio.image"
                                    class="w-full h-full object-cover rounded-tl-lg rounded-tr-lg" />
                            </div>

                            <div class="py-4 px-3 pt-3">
                                <h4 class="text-left text-lg font-semibold">{{ portfolio.name }}</h4>

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
                <div class="flex items-center justify-center gap-3 mt-6 md:mt-8">
                    <!-- <Button @clickHandler="slidePrevCarousel" class="px-2 py-2 w-12 h-12 rounded-full text-center"
                        :class="{ 'bg-primary/40 hover:bg-primary/40': isMinSlide }" :disabled="isMinSlide">
                        <Icon name="material-symbols:arrow-left-alt-rounded" class="w-6 h-6" />
                    </Button> -->
                    <button type="button" @click="slideNextCarousel"
                        class="p-3 rounded-3xl font-medium text-white bg-primary hover:bg-primary/80 duration-150 text-[14px] md:text-base"
                        :class="{ 'bg-primary/40 hover:bg-primary/40': isMinSlide }" :disabled="isMinSlide">
                        <Icon name="material-symbols:arrow-left-alt-rounded" class="w-6 h-6" />
                    </button>
                    <button type="button" @click="slideNextCarousel"
                        class="p-3 rounded-3xl font-medium text-white bg-primary hover:bg-primary/80 duration-150 text-[14px] md:text-base"
                        :class="{ 'bg-primary/40 hover:bg-primary/40': isMaxSlide }" :disabled="isMaxSlide">
                        <Icon name="material-symbols:arrow-right-alt-rounded" class="w-6 h-6" />
                    </button>
                    <!-- <Button @clickHandler="slideNextCarousel" class="px-2 py-2 w-12 h-12 rounded-full text-center"
                        :class="{ 'bg-primary/40 hover:bg-primary/40': isMaxSlide }" :disabled="isMaxSlide">
                        <Icon name="material-symbols:arrow-right-alt-rounded" class="w-6 h-6" />
                    </Button> -->
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
    snapAlign: 'center',
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
    // 800px and up
    800: {
        itemsToShow: 2,
        snapAlign: 'start',
    },
    // 1000px and up
    1000: {
        itemsToShow: 2.3,
        snapAlign: 'start',
    },
    1200: {
        itemsToShow: 3,
        snapAlign: 'start'
    },
    1440: {
        itemsToShow: 3.3,
        snapAlign: 'start'
    },
    1530: {
        itemsToShow: 3.7,
        snapAlign: 'start'
    },
    1640: {
        itemsToShow: 4,
        snapAlign: 'start'
    }
});

const portfolios = [
    {
        id: 'logee',
        name: 'Logee',
        desc: '',
        image: '/portfolio/logee/logee1.webp',
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
        image: '/portfolio/bisnis-di-dubai/bisnisdidubai1.webp',
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
        image: '/portfolio/merchant/merchant1.webp',
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
        image: '/portfolio/dextop/dextop1.webp',
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
        image: '/portfolio/youbid/youbid1.webp',
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
        image: '/portfolio/cbs-web/cbs1.webp',
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
        image: '/portfolio/cbs-monitoring/cbs-monitoring1.webp',
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
    }
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