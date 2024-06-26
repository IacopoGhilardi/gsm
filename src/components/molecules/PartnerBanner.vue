<template>
    <div 
      class="flex flex-col p-6 justify-center"
      :class="{
        [props.bgColor]: true, // Dynamically bind background color
        'expanded': isExpanded === columnNumber,
        'contracted': contracted !== columnNumber 
      }"
      @mouseenter="expandColumn"
      @mouseleave="resetColumns"
    >
      <div class="w-full flex justify-center">
        <img :src="require(`@/assets/images/${props.imageSrc}`)" alt="Abbigliamento da lavoro a Pisa - Partner">
      </div>
      <div class="p-4 w-full flex justify-center">
        <slot></slot>        
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const props = defineProps<{
    columnNumber: number;
    imageSrc: string;
    bgColor: string;
  }>();
  
  const isExpanded = ref(0);
  const contracted = ref(4);
  
  const expandColumn = () => {
    contracted.value = props.columnNumber;
    isExpanded.value = props.columnNumber;
  };
  
  const resetColumns = () => {
    isExpanded.value = 0;
    contracted.value = 4;
  };
  </script>
  