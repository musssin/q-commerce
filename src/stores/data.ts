import { ref } from 'vue';
import { defineStore } from 'pinia';
import { DataService } from '@/components/services/DataService';
import type Category from '@/components/entities/Category';
import type Brand from '@/components/entities/Brand';
export const useCategoryStore = defineStore('category', () => {
  const categories = ref(new Array<Category>());
  const brands = ref(new Array<Brand>);
  async function getCategories() {
    categories.value = DataService.getCategories();
  }
  async function getBrands() {
    brands.value = DataService.getBrands();
  }

  return { categories, brands, getCategories, getBrands };
});
