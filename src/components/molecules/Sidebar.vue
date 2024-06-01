<template>
    <div>
      <div class="md:hidden block" @click="toggleSidebar">
        <img class="w-6" :src="require(`@/assets/images/commands/more.png`)" alt="hamburger">
      </div>

     <div v-if="showSidebar" @click="toggleSidebar" class="md:hidden block absolute left-0 top-0 w-4/12 h-screen z-50 bg-primary-dark bg-opacity-60"></div>
     <transition name="sidebar-slide">
      <div v-if="showSidebar" class="md:hidden block absolute top-0 right-0 bg-white w-8/12 text-right h-screen z-50">
        <div @click="toggleSidebar" class="flex justify-end p-9 border-b border-solid border-slate-300 mb-4">
          <img class="w-6" :src="require(`@/assets/images/commands/close.png`)" alt="hamburger">
        </div>
        <div>
          <navbar :divider="true"></navbar>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import Navbar from '../molecules/Navbar.vue';
import { ref } from 'vue';

const showSidebar = ref(false);

const toggleSidebar = () => {  
  showSidebar.value = !showSidebar.value;
};

const closeSidebar = () => {
  showSidebar.value = false;
}
</script>
<style scoped>
.sidebar-slide {
  transition: transform 0.3s;
}

.sidebar-slide-enter-active, .sidebar-slide-leave-active, .sidebar-slide-leave-to {
  transition: transform 0.3s;
}
.sidebar-slide-enter, .sidebar-slide-leave-to {
  transform: translateX(100%);
}
.sidebar-slide-enter {
  transform: translateX(100%);
}
</style>