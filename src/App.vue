<template>
  <div class="bg-primary flex flex-col min-h-screen w-full">
  <Header></Header>
    <router-view class="relative flex-grow max-w-screen-xl w-full max-w-10/12 mx-auto"/>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
</script>