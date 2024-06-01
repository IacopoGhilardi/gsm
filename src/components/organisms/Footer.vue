<script setup lang="ts">
import Navbar from '../molecules/Navbar.vue';
 const infoItems = [
 {
    title: 'GSM s.r.l.',
    info: ''
  },
  {
    title: 'P.iva',
    info: '02370530509'
  },
  {
    title: 'Abbigliamento professionale'
  }
 ]
</script>
<template>
 <footer class="p-8 flex justify-center">
   <div class="text-center w-full">
    <Navbar></Navbar>
    
    <div class="text-sm mt-4 flex-col flex md:flex-row justify-center">
        <div v-for="(infoItem, index) in infoItems" :key="index" class="flex items-center text-slate-400 justify-center">
          <span>{{ infoItem.title }} {{ infoItem.info }}</span>
          <span class="px-2 hidden md:block" v-if="index != infoItems.length - 1">-</span>
        </div>
      </div>


   </div>
 </footer>
</template>