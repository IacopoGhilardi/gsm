<template>
    <div>
        <div class=" md:flex hidden">
            <div v-for="(item, index) in partners" :key="index" class="w-3/12">
                <div class="w-full h-full flex justify-center items-center p-4">
                    <img class="max-w-32 max-h-full" :src="require(`@/assets/images/${item}`)" alt="">
                </div>
            </div>
        </div>

        <div class="md:hidden block">
            <Carousel type="image" :items="partners"></Carousel>
        </div>
    </div>
</template>
<script setup lang="ts">
import Carousel from './Carousel.vue';

const partners = [
'logo-isacco.png','logo-endi.gif','logo-jrc.jpg','makito-logo.png'
]

</script>