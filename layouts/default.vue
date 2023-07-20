<template>
    <Navbar :currentSection="currentSection" />

    <div class="mt-16 md:mt-24 lg:mt-36"></div>

    <slot />

    <Footer />
</template>

<script setup>
useHead({
    bodyAttrs: {
        class: 'bg-dark text-gray-300 text-[14px] md:text-base'
    }
});

let navbar = ref();
let navbarObserver = ref();

let currentSection = ref();
let sectionObserver = ref();

function callbackObserver(entries) {
    navbar.value.classList.toggle('navbar-blur', !entries[0].isIntersecting);
}

onMounted(() => {
    // pada saat onMounted set navbar value ambil dari id navbar di layouts/default.vue 
    navbar.value = document.querySelector('#my-navbar');

    // Navbar observer
    navbarObserver.value = new IntersectionObserver(callbackObserver, {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 1.0
    });
    navbarObserver.value.observe(document.querySelector('section'));

    sectionObserver.value = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                currentSection.value = entry.target.getAttribute('id');
            }
        })
    }, {
        root: null,
        rootMargin: "-30px 0px 0px 0px",
        threshold: 1.0
    });

    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.value.observe(section);
    });
});

onUnmounted(() => {
    navbarObserver.value.disconnect();
    sectionObserver.value.disconnect();
});
</script>