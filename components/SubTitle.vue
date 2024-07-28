<template>
    <div class="flex justify-center">
        <h2
            class="text-center ica-rubrik uppercase tracking-widest inline-block font-bold text-2xl md:text-3xl lg:text-[30px] xl:text-[40px] md:leading-[52px] lg:leading-[70px] xl:leading-[80px] text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-primary">
            {{ props.title }}</h2>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        required: true,
        type: String,
        default: 'No Title'
    }
})
</script>