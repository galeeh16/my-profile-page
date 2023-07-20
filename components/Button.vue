<template>
    <button :type="props.type" @click="$emit('clickHandler')"
        class="px-6 py-3 rounded-3xl font-medium text-white bg-primary hover:bg-primary/80 duration-150 text-[14px] md:text-base">
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