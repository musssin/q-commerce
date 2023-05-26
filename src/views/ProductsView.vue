<template>
  <v-container class="d-flex flex-wrap">
    <Banner />
    <ProductsList />
  </v-container>
</template>
<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import ProductsList from '@/modules/ProductsList.vue';
</script>
