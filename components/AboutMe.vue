<template>
    <section id="about" class="section">
        <div class="relative">
            <div
                class="absolute left-0 top-44 w-52 h-40 md:w-80 md:h-64 lg:w-[500px] lg:h-[400px] lg:top-[50px bg-violet-500/25 blur-[175px]">
            </div>

            <div class="wrapper mt-20 md:mt-48 lg:mt-56 xl:mt-80">
                <SubTitle :title="$t('about')" />
                <p class="text-center px-4 md:px-8 lg:px-20 xl:px-40 mt-4 leading-7">Hi, my name is <b>Galih Anggoro
                        Jati</b>. I am
                    27
                    years old and
                    I am
                    Informatics Engineer who
                    loves
                    technology
                    especially programming. I am friendly, responsive, interest for learn about new things, and i like
                    challenges. My hobby is playing pingpong, guitar, badminton, games and photography enthusiast.</p>

                <div class="flex flex-col sm:flex-row gap-5 md:gap-8 lg:gap-10 xl:gap-14 2xl:gap-16 mt-10 md:mt-16">
                    <div class="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72">
                        <ClientOnly>
                            <img v-lazy="Me" alt="Me" class="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover">
                        </ClientOnly>
                    </div>
                    <div class="flex-1">
                        <table class=" mt-4">
                            <tbody>
                                <tr>
                                    <td class="align-top pb-4 text-left font-semibold">
                                        <div class="flex items-center gap-2">
                                            <Icon name="bi:chevron-right" class="text-primary" />
                                            Age
                                        </div>
                                    </td>
                                    <td class="align-top pb-4 text-left pl-10 pr-3">:</td>
                                    <td class="align-top pb-4 text-left">{{ useAge('1996-01-16') }}</td>
                                </tr>
                                <tr>
                                    <td class="align-top pb-4 text-left font-semibold">
                                        <div class="flex items-center gap-2">
                                            <Icon name="bi:chevron-right" class="text-primary" />
                                            Degree
                                        </div>
                                    </td>
                                    <td class="align-top pb-4 text-left pl-10 pr-3">:</td>
                                    <td class="align-top pb-4 text-left">S1 Infomatics Engineering (2018)</td>
                                </tr>
                                <tr>
                                    <td class="align-top pb-4 text-left font-semibold">
                                        <div class="flex items-center gap-2">
                                            <Icon name="bi:chevron-right" class="text-primary" />
                                            City
                                        </div>
                                    </td>
                                    <td class="align-top pb-4 text-left pl-10 pr-3">:</td>
                                    <td class="align-top pb-4 text-left">Jakarta, Indonesia</td>
                                </tr>
                                <tr>
                                    <td class="align-top pb-4 text-left font-semibold">
                                        <div class="flex items-center gap-2">
                                            <Icon name="bi:chevron-right" class="text-primary" />
                                            Freelance
                                        </div>
                                    </td>
                                    <td class="align-top pb-4 text-left pl-10 pr-3">:</td>
                                    <td class="align-top pb-4 text-left flex items-center gap-1">
                                        <Icon name="material-symbols:check-circle-outline-rounded"
                                            class="w-5 h-5 text-teal-500" />
                                        Available
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p class="mt-5">Follow me on <a class="text-primary font-semibold hover:underline"
                                href="https://www.instagram.com/galihanggorojati/" target="_blank">Instagram</a></p>
                        <p class="mt-3">Follow me on <a class="text-primary font-semibold hover:underline"
                                href="https://www.linkedin.com/in/galih-anggoro-jati/" target="_blank">Linkedin</a></p>
                    </div>
                </div>

                <h3 class="mt-8 md:mt-10 lg:mt-16 text-center text-lg md:text-xl font-semibold">Tools and Technologies</h3>

                <div class="flex justify-center flex-wrap items-center gap-6 md:gap-8 lg:gap-9 py-4 md:py-6 lg:py-8">
                    <div class="group flex relative cursor-pointer mb-4" v-for="tool in tools" :key="tool.id">
                        <component :is="tool.component"></component>
                        <span
                            class="group-hover:opacity-100 hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-600 px-3 py-1 text-sm text-white rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">{{
                                tool.name }}</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import Me from '/me.webp'

const tools = [
    {
        id: 1,
        component: resolveComponent('IconsPHP'),
        name: "PHP"
    },
    {
        id: 2,
        component: resolveComponent('IconsJS'),
        name: "JavaScript"
    },
    {
        id: 3,
        component: resolveComponent('IconsLaravel'),
        name: "Laravel"
    },
    {
        id: 4,
        component: resolveComponent('IconsLumen'),
        name: "Lumen"
    },
    {
        id: 5,
        component: resolveComponent('IconsVue'),
        name: "VueJS"
    },
    {
        id: 6,
        component: resolveComponent('IconsReact'),
        name: "ReactJS"
    },
    {
        id: 7,
        component: resolveComponent('IconsNuxtJS'),
        name: "Nuxt"
    },
    {
        id: 8,
        component: resolveComponent('IconsHTML'),
        name: "HTML"
    },
    {
        id: 9,
        component: resolveComponent('IconsCSS'),
        name: "CSS"
    },
    {
        id: 10,
        component: resolveComponent('IconsPostgreSQL'),
        name: "PostgreSQL"
    }
];
</script>