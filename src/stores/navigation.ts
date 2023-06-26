import { ref } from 'vue';
import { defineStore } from 'pinia';
export const useNavigationStore = defineStore('navigation', () => {
  const drawer = ref(false);
  async function setDrawer(status: boolean) {
    drawer.value = status;
  }
  return {
    drawer,
    setDrawer,
  };
});
