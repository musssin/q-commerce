<template>
  <v-row
    class="ma-0 mt-6"
    no-gutters
  >
    <v-col cols="3">
      <Filters
        cols="3"
        v-if="width > 800"
    /></v-col>

    <v-progress-circular
      v-if="loading"
      class="col-6"
      :size="50"
      color="primary"
      indeterminate
    />
    <v-col
      v-else
      cols="9"
    >
      <v-row class="d-flex flex-wrap">
        <ProductVue
          v-for="(product, pKey) of filteredProducts"
          :product="product"
          :key="'product' + pKey"

        />
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import Filters from '@/components/Filters.vue';
import ProductVue from '@/components/cards/Product.vue';
import type Product from '@/entities/Product';
import { DataService } from '@/services/DataService';
import { useFilterStore } from '@/stores/filters';
import { ref, onMounted, computed } from 'vue';
import { useDisplay } from 'vuetify';
const { width } = useDisplay();
const filterStore = useFilterStore();
const products = ref(new Array<Product>());
const loading = ref(false);
onMounted(async () => {
  products.value = await DataService.getProducts();
  loading.value = false;
});
const filteredProducts = computed(() => {
  let filteredProducts = products.value;
  if (filterStore.selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      filterStore.selectedCategories.includes(p.category)
    );
  }
  if (filterStore.selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      filterStore.selectedBrands.includes(p.brand)
    );
  }
  filteredProducts = filteredProducts.filter(
    (p) => p.price > filterStore.startPrice && p.price < filterStore.endPrice
  );

  return filteredProducts;
});
</script>
