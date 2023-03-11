<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Filters from '@/components/Filters.vue';
import type Product from '@/components/entities/Product';
import { DataService } from '@/components/services/DataService'
import ProductVue from '@/components/cards/Product.vue';
import type Category from '@/components/entities/Category';
const products = ref(new Array<Product>())
const categories = ref(new Array<Category>())
const loading = ref(true)
onMounted(async () => {
  products.value = await DataService.getProducts()
  loading.value = false
})
</script>

<template>
  <v-row>
    <v-col cols="3" sm="12" md="3">
      <Filters />
    </v-col>
    <v-col cols="9" sm="12" md="9">
      <v-row v-if="loading" class="justify-center mt-16">
        <v-progress-circular
        class="col-6"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
      </v-row>
      <v-row v-else>
        <ProductVue v-for="product of products" v-bind:product="product" class="col-3"  @click="" />
      </v-row>

    </v-col>
  </v-row>
</template>
<style>
.block-top {
  background-image: url('../src/assets/blue_blur.jpg');
  background-size: cover;
  height: 600px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-style: normal;
  font-weight: bolder;
  font-size: xx-large;
}
</style>
