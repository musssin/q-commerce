<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import Filters from '@/components/Filters.vue';
import type Product from '@/components/entities/Product';
import { DataService } from '@/components/services/DataService'
import ProductVue from '@/components/cards/Product.vue';
import { useFilterStore } from '@/stores/filters';
const filterStore = useFilterStore()
const products = ref(new Array<Product>())
const filteredProducts = ref(new Array<Product>())
const loading = ref(false)
onMounted(async () => {
  products.value = await DataService.getProducts()
  loading.value = false
})
watchEffect(()=>{
  filteredProducts.value = products.value
  if (filterStore.selectedCategories.length > 0) {
    filteredProducts.value = filteredProducts.value.filter(p => filterStore.selectedCategories.includes(p.category))
  }
  if (filterStore.selectedBrands.length > 0) {
    filteredProducts.value = filteredProducts.value.filter(p => filterStore.selectedBrands.includes(p.brand))
  }
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
        <ProductVue v-for="product of filteredProducts" v-bind:product="product" class="col-3"  @click="" />
      </v-row>

    </v-col>
  </v-row>
</template>
