<template lang="">
    <div>
        <MainTitle text="I nostri cataloghi" subtitle="Tutte le collezioni dei nostri partners, scegli il brand che preferisci e clicca sull'immagine per viualizzare il catalogo."></MainTitle>
        
        <div class="flex-col space-y-4 mt-8 px-4">
            <CatalogSection v-for="(partner, index) in partners" :brandImg="partner" :key="index" :items="catalogList"></CatalogSection>
        </div>
    </div>
</template>
<script setup lang="ts">
import MainTitle from '@/components/atoms/MainTitle.vue';
import CatalogSection from '@/components/molecules/CatalogSection.vue'

const partners = [
'logo-isacco.png','logo-endi.gif','logo-jrc.jpg','makito-logo.png'
]

const catalogList = [
    {
        imageName: "endi_1.jpg",
        pdfPath: "https://gsm-abbigliamento.s3.amazonaws.com/CatalogoENDI-2022.pdf"
    }
]
</script>