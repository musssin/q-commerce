import { ref } from 'vue';
import { defineStore } from 'pinia';
import { DataService } from '@/components/services/DataService';
export const useFilterStore = defineStore('category', () => {
  const categories = ref();
  const brands = ref();
  const selectedCategories = ref(Array<String>());
  const selectedBrands = ref(Array<String>());
  async function getCategories() {
    if (!categories.value) {
      await fetchCategories()
    }
   return categories.value
  }
  async function getBrands() {
    if (!brands.value){
      await fetchBrands()
    }
    return brands.value
  }
  async function fetchCategories() {
    categories.value = await DataService.getCategories();
  }
  async function fetchBrands() {
    brands.value = await  DataService.getBrands();
  }
  function selectCategory(category: String){
    if (selectedCategories.value.find(c => c===category)) {
      selectedCategories.value = selectedCategories.value.filter(c => c !== category)
    } else {
      selectedCategories.value.push(category);
    }
  }
  function selectBrand(brand: String){
    if (selectedBrands.value.find(c => c===brand)) {
      selectedBrands.value = selectedBrands.value.filter(c => c !== brand)
    } else {
      selectedBrands.value.push(brand);
    }
  }
  return { selectedCategories, selectedBrands, getCategories, getBrands, selectCategory, selectBrand };
});
