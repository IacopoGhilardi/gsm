<template lang="">
    <div>
        <MainTitle text="I nostri cataloghi" subtitle="Tutte le collezioni dei nostri partners, scegli il brand che preferisci e clicca sull'immagine per viualizzare il catalogo."></MainTitle>
        
        <div class="flex-col space-y-4 mt-8 px-4">
            <CatalogSection v-for="(partner, index) in catalogList" :brandImg="partner.image" :key="index" :items="partner.catalogs"></CatalogSection>
        </div>
    </div>
</template>
<script setup lang="ts">
import MainTitle from '@/components/atoms/MainTitle.vue';
import CatalogSection from '@/components/molecules/CatalogSection.vue'

const catalogList = [
        {
            name: "isacco",
            baseUrl: "https://gsm-abbigliamento.s3.amazonaws.com/",
            image: "logo-isacco.png",
            catalogs: [
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/isacco/copertine/chef_line.jpeg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/isacco/CHEF_LINE_2024.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/isacco/copertine/hair_stylist.jpeg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/isacco/HAIR_STYLIST_2024.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/isacco/copertine/horeca.jpeg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/isacco/HORECA_2024.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/isacco/copertine/antinfortunistica.jpeg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/isacco/MEDICALE_2024.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/isacco/copertine/onesize.jpeg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/isacco/ONE_SIZE_2024.pdf"
                }
            ]
        },

        {
            name: "endi",
            baseUrl: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/",
            image: "logo-endi.gif",
            catalogs: [
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/ENDI-Estetica-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/cat+estetica+2008+web.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/ENDI-Ristorazione-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/cat+ristorazione+03-08.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/cat_endi2018-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/catalogo_ENDI.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/copertina-horeca-2022-240x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/CatalogoENDI-2022.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/Schermata-2020-02-14-alle-08.31.52-240x300.png",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/catalogoENDI2020-web.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/Cop-Medical_ENDI-2021-240x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/def_Cat-Medical_ENDI-2021.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/ENDI-New-Collection-2013-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/endi_firma_white.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/Endi-Beauty-Medical-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/Endi-Beauty-Medical.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/Cop-beauty_ENDI-2021-240x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/def_CatalogoENDI-estetica-2021.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/Endi-Bistrot-Food-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/Endi-Bistrot-Food.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/ENDI-Only-size-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/ENDI-Only-size.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/ESTETICO_baggio-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/ESTETICO_baggio.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/MEDICALE_baggio-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/MEDICALE_baggio.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/ENDI-Collection-Glamour-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/menabo_catalogo_DEFINITIVO.indd.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/ristorazione_baggio-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/ristorazione_baggio.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/ristorazione-new-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/ristorazione-new.pdf"
                },
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/copertine/ENDI-Mix-200x300.jpg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/endi/untitled.pdf"
                },
            ]
        }, 
        
        {
            name: "jrc",
            baseUrl: "https://gsm-abbigliamento.s3.amazonaws.com/",
            image: "logo-jrc.jpg",
            catalogs: [
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/jrc/copertine/jrc.jpeg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/jrc/Catalogo-2024_it.pdf"
                }
            ]
        },
        {
            name: "mackito",
            baseUrl: "https://gsm-abbigliamento.s3.amazonaws.com/",
            image: "makito-logo.png",
            catalogs: [
                {
                    cover: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/mackito/copertine/mackito_2024.jpeg",
                    catalog: "https://gsm-website.s3.eu-north-1.amazonaws.com/cataloghi/mackito/General+Catalogue+2024+Italia+Neutral.pdf"
                }
            ]
        },
    ]
</script>