import { ref } from 'vue';
import { defineStore } from 'pinia';
import { DataService } from '@/components/services/DataService';
import type Category from '@/components/entities/Category';
import type Brand from '@/components/entities/Brand';
export const useCategoryStore = defineStore('category', () => {
  const categories = ref(new Array<String>());
  const brands = ref(new Array<String>);
  async function getCategories() {
    categories.value = await DataService.getCategories();
  }
  async function getBrands() {
    brands.value = await  DataService.getBrands();
  }

  return { categories, brands, getCategories, getBrands };
});
