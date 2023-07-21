<template>
    <div id="my-navbar" class="fixed top-0 left-0 right-0 duration-100 transition-all z-20">
        <nav class="wrapper py-4">
            <div class="flex flex-wrap items-center justify-between">
                <a :href="switchLocalePath('/')" class="flex items-center gap-2">
                    <Icon name="material-symbols:deployed-code-outline-sharp" class="text-primary w-6 h-6 md:w-8 md:h-8" />
                    <span class="text-lg md:text-xl lg:text-[22px] font-semibold text-primary">{{ $t('its_me')
                    }}</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" id="btn-hamburger"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <Icon name="heroicons:bars-3-bottom-right-20-solid" class="text-gray-200 w-6 h-6" />
                </button>

                <div class="hidden w-full lg:block lg:w-auto" id="navbar-default">
                    <ul
                        class="font-medium flex items-center flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:mt-0 bg-black/90 lg:bg-transparent">
                        <li v-for="link in links" :key="link.id" class="w-full lg:w-auto text-center">
                            <a href="javascript:void(0);" class="block py-2 md:py-4 lg:py-2 px-6 text-gray-300 nav-link"
                                @click="useScrollMeTo(link.id)">
                                {{ $t(link.languageName) }}
                            </a>
                        </li>
                        <li>
                            <div class="py-3 md:py-4 lg:px-3">
                                <SwitchLang />
                            </div>
                        </li>
                        <!-- <li>
                            <a href="" class="text-white">{{ currentSection }}</a>
                        </li> -->
                    </ul>

                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
const props = defineProps(['currentSection'])

const switchLocalePath = useSwitchLocalePath()

const links = [
    {
        id: 'home',
        languageName: 'home'
    },
    {
        id: 'about',
        languageName: 'about',
    },
    {
        id: 'portfolio',
        languageName: 'portfolio',
    },
    {
        id: 'work',
        languageName: 'work_experience'
    }
];
</script>