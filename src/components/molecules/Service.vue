<template>
    <div class="flex flex-col justify-center items-center">
        <div class="max-w-24 border border-primary-grey rounded-full p-4 flex justify-center items-center mb-4">
            <img class="w-full max-h-full" :src="require(`@/assets/images/services/${props.image}`)" alt="">
        </div>

        <div class="text-primary-dark font-semibold text-lg">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
        const props = defineProps({
            image: String
        })
</script>