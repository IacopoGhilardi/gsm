<template>
  <div class="flex flex-row md:flex-col md:justify-center justify-between items-center px-8 md:px-0">
    <div class="py-6">
      <router-link to="/">
        <img class="md:h-24 h-12" src="../../assets/images/gsm-logo.png" alt="Logo">
      </router-link>
    </div>

    <div class="border-t border-b border-solid border-slate-300 w-full hidden md:block">
      <navbar :divider="false"></navbar>
    </div>
  <sidebar></sidebar>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../molecules/Navbar.vue';
import Sidebar from '../molecules/Sidebar.vue';
import { ref } from 'vue';

const showSidebar = ref(false);

const toggleSidebar = () => {  
  showSidebar.value = !showSidebar.value;
};
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