<template>
    <section id="home" class="section">
        <div class="wrapper relative">
            <div class="flex justify-between gap-8 md:gap-10 lg:gap-36 xl:gap-40">
                <div class="mt-28 md:mt-36 lg:mt-40 xl:mt-44">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">{{ $t('hi_guys') }}</h2>
                    <h2
                        class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-primary py-5 px-0 mt-4 mb-4">
                        Galih Anggoro Jati
                    </h2>
                    <Button @clickHandler="scrollTo('about')">{{ $t('getting_started') }}</Button>
                </div>

                <div
                    class="gradient-02 absolute w-52 h-40 md:w-80 md:h-64 lg:w-[500px] lg:h-[400px] lg:top-[50px] right-[10%] bg-purple-500/30 blur-[175px] rotate-[-114deg]">
                </div>
                <div
                    class="gradient-03 absolute w-52 h-40 md:w-80 md:h-64 lg:w-[500px] lg:h-[400px] lg:top-[50px] right-[20%] bg-indigo-500/30  blur-[175px] rotate-[-114deg]">
                </div>

                <div
                    class="mt-10 mt:pt-20 lg:mt-24 border-[10px] border-gray-700 h-[270px] md:h-[290px] lg:h-[350px] xl:h-[400px] my-border flex-1 hidden sm:block">
                    <div class="relative">
                        <img src="/chat.webp" alt="Chat"
                            class="w-[130px] md:w-[150px] lg:w-[200px] absolute -top-6 md:-top-10 lg:-top-20 -right-10">
                        <img src="/illustration.webp" alt="Illusration"
                            class="w-[400px] h-auto lg:w-[480px] xl:w-[600px] absolute left-0 md:left-10" />
                        <img src="/laptop.webp" alt="Laptop"
                            class="w-[120px] sm:w-[130px] md:w-[150px] lg:w-[250px] absolute -top-10 md:-top-11 lg:-top-16 xl:-top-20">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// import { Motion } from "motion/vue"

function scrollTo(refName) {
    const element = document.getElementById(refName);
    window.scrollTo(0, (element.offsetTop - 80));
}
</script>