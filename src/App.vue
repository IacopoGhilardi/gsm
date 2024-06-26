<template>
  <div class="bg-primary flex flex-col min-h-screen w-full">
    <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | GSM` : `GSM` }}</template>
  </metainfo>
  <Header></Header>
    <router-view class="relative flex-grow max-w-screen-xl w-full max-w-10/12 mx-auto"/>
    <Footer></Footer>
    <noscript>
      <div style="padding: 20px; background-color: #f8d7da; color: #721c24; text-align: center;">
        <h2>Attenzione!</h2>
        <p><strong>GSM - Abbigliamento da Lavoro</strong>. Offriamo una vasta gamma di divise, uniformi e abbigliamento professionale di alta qualità per ogni settore.</p>
      </div>
    </noscript>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
</script>