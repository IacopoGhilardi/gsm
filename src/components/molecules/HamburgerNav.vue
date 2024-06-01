<template>
    <div @click="toggleMenu" class="grid place-content-center">
        <div class="
        w-12
        h-1
        bg-black
        rounded-full
        before:content-['']
        before:absolute
        before:w-12
        before:h-1
        before:bg-black
        before:rounded-full
        before:-translate-y-3
        after:content-['']
        after:absolute
        after:w-12
        after:h-1
        after:bg-black
        after:rounded-full
        after:translate-y-3
        transition-all duration-150, before:transition-all before:duration-150, after:transition-all after:duration-150"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
    console.log('Toggle', isOpen.value);
    isOpen.value = !isOpen.value
    console.log('Toggle', isOpen.value);
}
</script>