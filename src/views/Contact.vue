<template lang="">
    <div>
        <MainTitle text="Mettiti in contatto"></MainTitle>

        <Service class="mt-12 px-8 md:px-0" image="contact-book.png">
            <ul class="text-left font-semibold text-primary-grey space-y-2">
             <li>Telefono: +39 3473568443</li>
             <li>Email: gsmabbigliamentodalavoro@gmail.com</li>
            </ul>
        </Service>
    </div>
</template>
<script setup lang="ts">
    import MainTitle from '../components/atoms/MainTitle.vue'
    import Service from '@/components/molecules/Service.vue';
</script>