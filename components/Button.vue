<template>
    <button :type="props.type" @click="$emit('clickHandler')"
        class="px-6 py-3 rounded-3xl font-medium text-white bg-gradient-to-r from-violet-400 to-primary hover:bg-gradient-to-l hover:from-violet-400 hover:to-primary duration-300 ease-in-out text-[14px] md:text-base shadow-lg shadow-pink-400/20">
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        required: false,
        default: 'button'
    },
});
</script>