<template>
  <v-row class="ma-0">
    <v-col
      v-if="width > 800"
      cols="3"
      sm="12"
      md="3"
      class="d-flex flex-wrap"
    >
      <ProductsFilters
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
      sm="12"
      xs="12"
      md="9"
      data-id="123"
      style="height: 120vh; overflow-y: scroll; overflow-x: hidden"
    >
      <v-row>
        <v-col
          v-for="(product, pKey) of filteredProducts"
          :key="'product' + pKey"
        >
          <ProductVue :product="product" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import ProductsFilters from '@/components/ProductsFilters.vue';
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
