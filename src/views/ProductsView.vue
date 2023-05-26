<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Banner from '@/components/Banner.vue';
import Filters from '@/components/Filters.vue';
import type Product from '@/entities/Product';
import { DataService } from '@/services/DataService';
import ProductVue from '@/components/cards/Product.vue';
import { useFilterStore } from '@/stores/filters';
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

<template>
  <Banner />
  <v-row>
    <v-col
      cols="3"
      sm="12"
      md="3"
    >
      <Filters />
    </v-col>
    <v-col
      cols="9"
      sm="12"
      md="9"
    >
      <v-row
        v-if="loading"
        class="justify-center mt-16"
      >
        <v-progress-circular
          class="col-6"
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-row>
      <v-row
        v-else
        class="mt-3"
      >
        <ProductVue
          v-for="(product, pKey) of filteredProducts"
          :product="product"
          :key="'product' + pKey"
          class="col-3"
        />
      </v-row>
    </v-col>
  </v-row>
</template>
