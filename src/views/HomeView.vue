<template>
    <div>
      <div class="relative">
        <div class="text-primary-grey w-full h-full min-h-96 relative" id="principal-banner">
          <img class="md:block hidden h-full max-w-full" :src="require(`@/assets/images/sfondo-removebg-preview.png`)" alt="endi logo">
          <div class="md:hidden block absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${require('@/assets/images/sfondo-removebg-preview.png')})` }"></div>
        </div>
        <div class="absolute top-0 right-0 md:w-6/12 w-full h-full p-4 text-center flex flex-col justify-evenly bg-black md:bg-opacity-0 bg-opacity-60">
          <h3 class="md:text-4xl text-2xl font-bold md:text-primary-grey text-white">Una soluzione professionale per le tue esigenze</h3>

          <div class="w-full flex flex-col md:flex-row justify-center items-center md:space-x-4">
            <div class="rounded bg-primary-dark text-primary hover:bg-primary hover:text-primary-dark w-max cursor-pointer transition-all hover:border hover:border-primary-dark border border-primary-dark md:mb-0 mb-4">
              <router-link class="w-full h-full px-4 py-2 block" to="/cataloghi">Sfoglia i nostri cataloghi</router-link>
            </div>

            <div class="rounded bg-primary text-primary-dark hover:bg-primary-dark hover:border-primary hover:text-primary w-max cursor-pointer transition-all border border-primary-grey">
              <router-link class="w-full h-full px-4 py-2 block" to="/chi-siamo">Scopri chi siamo</router-link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="text-center p-8">
          <h3 class="md:text-4xl text-2xl my-6  font-bold text-primary-grey">Cosa offriamo</h3>

          <p class="font-semibold text-primary-grey">Esperienza personalizzata di abbigliamento da lavoro: offriamo un servizio unico in cui ti portiamo direttamente i campioni da provare, disponibili subito o ordinabili rapidamente. Scopri la differenza tra un semplice negozio online e un'esperienza su misura pensata appositamente per te.</p>
        </div>

          <div class="md:flex hidden">
            <div v-for="(item, index) in services" :key="index" class="w-4/12">
              <Service :image="item.image">
              {{ item.title }}</Service>
            </div>
          </div>

          <div class="md:hidden">
            <Carousel type="service" :items="services"></Carousel>
          </div>
      </div>
  
      <div>
        <div class="text-center p-8">
          <h3 class="md:text-4xl text-2xl my-6 font-bold text-primary-grey">I nostri partners</h3>
        </div>

        <Partners></Partners>
      </div>
    </div>
</template>

<script setup lang="ts">
import Service from '@/components/molecules/Service.vue';
import Partners from '@/components/molecules/Partners.vue';
import Carousel from '@/components/molecules/Carousel.vue';

const services = [
  {
    title: 'Gadget promozionali',
    image: 'gadget.png'
  },
  {
    title: 'Abbigliamento da lavoro',
    image: 'apron.png'
  },
  {
    title: 'Stampe e ricami',
    image: 'embroidery.png'
  }
]
</script>

<style>
  .expanded {
    /* width: calc(66.666% - 16px); 2/3 of the screen */
    transition: width 0.3s ease;
  }
  
  .contracted {
    /* width: calc(100% / 3); 2/3 of the screen */
    transition: width 0.3s ease;
  }

  #principal-banner {
    background: rgb(238,238,238);
    background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(234,227,224,1) 35%, rgba(235,231,229,1) 65%, rgba(238,238,238,1) 100%);
  }
</style>
