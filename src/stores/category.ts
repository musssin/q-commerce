import { ref } from "vue";
import { defineStore } from "pinia";
import Parse from 'parse/dist/parse.min.js';
export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);
  const brands = ref([]);
  async function getCategories(){
    const parseQuery = new Parse.Query('Category');
    // parseQuery.contains('name', 'Adam');

    try {
      categories.value = await parseQuery.find();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error}`);
      return false;
    }
  }
  async function getBrands(){
    const parseQuery = new Parse.Query('Brand');
    // parseQuery.contains('name', 'Adam');

    try {
      brands.value = await parseQuery.find();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error}`);
      return false;
    }
  }
  

  return { categories, brands, getCategories, getBrands };
});
