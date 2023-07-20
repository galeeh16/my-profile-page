<template>
    <div class="flex items-center gap-3">
        <div class="font-medium text-lg flex gap-2 items-center cursor-pointer tracking-wide"
            :class="{ 'text-primary': locale === 'id' }" @click="swithLang('id')">
            <div v-html="locales[1].icon"></div>
            ID
        </div>
        <div class="text-gray-500">|</div>
        <div class="font-medium text-lg flex gap-2 items-center cursor-pointer tracking-wide"
            :class="{ 'text-primary': locale === 'en' }" @click="swithLang('en')">
            <div v-html="locales[0].icon"></div>
            EN
        </div>
    </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
// const router = useRouter()

function swithLang(newValue) {
    if (newValue === locale.value) {
        return;
    }
    locale.value = newValue;
    window.location.href = switchLocalePath(newValue);
    // router.replace(switchLocalePath(newValue));
}
</script>