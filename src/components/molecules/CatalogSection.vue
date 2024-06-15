<template>
  <div class="border shadow rounded p-4">
    <div @click="toggleExpanded" class="sticky-title cursor-pointer flex justify-between items-center max-h-20">
      <div class="max-h-full md:w-1/12 w-3/12 flex items-center">
        <img class="h-full max-w-full" :src="require(`@/assets/images/${props.brandImg}`)" alt="Brand Logo">
      </div>
      <div class="md:w-1/12 w-2/12 p-4 flex items-center justify-center">
        <div v-if="!expanded">
          <img class="max-h-6" src="../../assets/images/commands/down-arrows.png" alt="Expand">
        </div>
        <div v-else>
          <img class="max-h-6" src="../../assets/images/commands/up-arrows.png" alt="Collapse">
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="expanded" class="catalog-container flex flex-wrap w-full mt-8 justify-center gap-4">
        <CatalogCard class="w-full md:w-4/12 lg:w-3/12 flex justify-center mb-8" v-for="(item, index) in items" :key="index" :imageName="item.cover" :pdfPath="item.catalog" />
      </div>
    </transition>
  </div>
</template>
  
<script setup lang="ts">
import CatalogCard from '@/components/atoms/CatalogCard.vue';
import { ref } from 'vue';

interface Catalog {
  cover: string;
  catalog: string;
}

const props = defineProps<{
  brandImg: string;
  items: Catalog[];
}>();

const expanded = ref(false);

const toggleExpanded = () => {
  expanded.value = !expanded.value;
};
  </script>
  
  <style scoped>
  .sticky-title {
    position: sticky;
    top: 0;
    padding: 10px;
  }
  
  .catalog-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  