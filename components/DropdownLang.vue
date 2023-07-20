<template>
    <Listbox as="div" class="relative z-10" :model-value="locale" @update:modelValue="newValue => setLang(newValue)">
        <div class="inline-flex p-[1px] bg-white rounded-md bg-gradient-to-tr from-purple-500 to-pink-500">
            <ListboxButton
                class="inline-flex w-[104px] gap-2 uppercase font-medium items-center rounded-md px-4 py-2.5 bg-dark text-center">
                <template v-if="locale === 'en'">
                    <div v-html="locales[0].icon"></div>
                </template>
                <template v-else>
                    <div v-html="locales[1].icon"></div>
                </template>
                <div>{{ locale }}</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </ListboxButton>
        </div>
        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-150"
            leave-to-class="opacity-0">
            <ListboxOptions
                class="mt-2 rounded-md overflow-hidden absolute left-0 right-0 shadow-lg shadow-pink-500/5 w-[104px]">
                <ListboxOption v-for="lang in locales" :key="lang.id" :value="lang" v-slot="{ active, selected }">
                    <div :class="[
                        active ? 'bg-gray-800' : 'bg-gray-900',
                        'w-full flex items-center gap-2 px-4 py-[10px] uppercase cursor-pointer'
                    ]">
                        <div v-html="lang.icon"></div>
                        <div v-if="locale === lang.code" class="flex items-center gap-2">
                            <div class="font-medium">{{ lang.code }}</div>
                            <span class="inline-block w-[6px] h-[6px] rounded-full bg-green-400"></span>
                        </div>
                        <div v-else>
                            {{ lang.code }}
                        </div>
                    </div>
                </ListboxOption>
            </ListboxOptions>
        </transition>
    </Listbox>
</template>

<script setup>
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

function setLang(newValue) {
    if (newValue.code === locale) {
        return;
    }
    locale.value = newValue.code;
    window.location.href = switchLocalePath(newValue.code)
}

</script>