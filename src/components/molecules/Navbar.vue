<template lang="">
    <nav class="w-full flex justify-center font-bold md:flex-row flex-col">
      <div v-for="(item, index) in navItems" :key="index" class="flex items-center justify-center">
            <router-link class=" py-2 px-4" :class="{ 'text-orange': $route.path === item.path }" :to="item.path" @click="removeSidebar">{{ item.title }}</router-link>
            <span class="font-thin hidden md:block" v-if="index != navItems.length - 1 && props.divider">|</span>
        </div>
    </nav>
</template>

<script setup lang="ts">
export interface Props {
    divider?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    divider: true
})

    const navItems = [
        {
        title: "Home",
        path: "/"
        },
        {
        title: "Chi siamo",
        path: "/chi-siamo"
        },
        {
            title: "Cataloghi",
            path: "/cataloghi"
        },
        {
            title: "Contatti",
            path: "/contatti"
        }
    ]

</script>
