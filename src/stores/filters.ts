import { ref } from 'vue';
import { defineStore } from 'pinia';
import { DataService } from '@/services/DataService';
import type { Brand } from '@/entities/Brand';
import type { Category } from '@/entities/Category';

export const useFilterStore = defineStore('filters', () => {
  const categories = ref(Array<Category>());
  const brands = ref(Array<Brand>());

  const selectedCategories = ref(Array<Category>());
  const selectedBrands = ref(Array<Brand>());
  const startPrice = ref(0);
  const endPrice = ref(10000000);
  // async function getCategories() {
  //   if (!categories.value) {
  //     categories.value = await fetchCategories();
  //   }
  //   return categories.value;
  // }
  // async function getBrands() {
  //   if (!brands.value) {
  //     brands.value = await fetchBrands();
  //   }
  //   return brands.value;
  // }
  async function fetchCategories() {
    categories.value = await DataService.getCategories();
  }
  async function fetchBrands() {
    brands.value = await DataService.getBrands();
  }
  function selectCategory(category: Category) {
    if (selectedCategories.value.find((c) => c === category)) {
      selectedCategories.value = selectedCategories.value.filter(
        (c) => c !== category
      );
    } else {
      selectedCategories.value.push(category);
    }
  }
  function selectBrand(brand: Brand) {
    if (selectedBrands.value.find((c) => c === brand)) {
      selectedBrands.value = selectedBrands.value.filter((c) => c !== brand);
    } else {
      selectedBrands.value.push(brand);
    }
  }
  return {
    selectedCategories,
    selectedBrands,
    brands,
    fetchBrands,
    fetchCategories,
    selectCategory,
    selectBrand,
    startPrice,
    endPrice,
  };
});
