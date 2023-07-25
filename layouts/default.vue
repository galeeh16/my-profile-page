<template>
    <Navbar :currentSection="currentSection" />

    <div class="mt-16 md:mt-24 lg:mt-36"></div>

    <slot />

    <Footer />
</template>

<script setup>
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});

useHead({
    bodyAttrs: {
        class: 'bg-dark text-gray-300 text-[14px] md:text-base'
    }
});

let navbar = ref();
let navbarObserver = ref();

// let currentSection = ref();
// let sectionObserver = ref();

function navbarCallbackObserver(entries) {
    navbar.value.classList.toggle('navbar-blur', !entries[0].isIntersecting);
}

onMounted(() => {
    // pada saat onMounted set navbar value ambil dari id navbar di layouts/default.vue 
    navbar.value = document.querySelector('#my-navbar');

    // Navbar observer
    navbarObserver.value = new IntersectionObserver(navbarCallbackObserver, {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 1.0,
        // threshold: [1.0, 1.0, 1.0, 0.0],
    });
    navbarObserver.value.observe(document.querySelector('section'));

    // sectionObserver.value = new IntersectionObserver((entries) => {
    //     console.log(entries)
    //     entries.forEach(entry => {
    //         if (entry.intersectionRatio > 0.5 && entry.target.getAttribute('id') !== 'work') {
    //             currentSection.value = entry.target.getAttribute('id');
    //         } else {
    //             currentSection.value = entry.target.getAttribute('id');
    //         }
    //     })
    // }, {
    //     root: null,
    //     rootMargin: "-30px 0px  0px 0px",
    //     threshold: [1.0, 1.0, 1.0, 0.4]
    // });

    // document.querySelectorAll('.section').forEach(section => {
    //     sectionObserver.value.observe(section);
    // });
});

onUnmounted(() => {
    navbarObserver.value.disconnect();
    sectionObserver.value.disconnect();
});
</script>