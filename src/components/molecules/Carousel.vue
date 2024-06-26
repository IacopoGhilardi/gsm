<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="(item, index) in props.items" :key="index">
      <div class="carousel__item" v-if="type === 'image'">
        <img class="w-40 max-w-full" :src="require(`@/assets/images/${item}`)" alt="Abbigliamento da lavoro a Pisa - Uniformi professionali">
      </div>

      <div v-else-if="type === 'service'">
        <Service :image="(item as ServiceItem).image">
          {{ (item as ServiceItem).title }}
        </Service>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import Service from './Service.vue';

interface ServiceItem {
  image: string;
  title: string;
}

const props = defineProps({
  items: Array,
  type: String
});
</script>
