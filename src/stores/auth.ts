import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useCartStore } from './cart';
import axios from 'axios';
import User from '@/entities/User';
export const useAuthStore = defineStore('auth', () => {
  const showDialog = ref(false);
  const userInstance = User.emptyInstance({});
  const user = useStorage('user', userInstance);
  const cartStore = useCartStore();
  const isAuthorised = useStorage('isAuthorised', ref(false));
  const errorText = ref('');

  async function login(username: string, password: string) {
    const body = {
      username: username,
      password: password,
    };
    axios
      .post('auth/login', JSON.stringify(body))
      .then((response) => {
        user.value = response.data;
        isAuthorised.value = true;
        showDialog.value = false;
        cartStore.getCart(user.value?.id);
      })
      .catch((error) => {
        errorText.value = error?.response?.data?.message;
      });
  }
  function logout() {
    user.value = {};
    isAuthorised.value = false;
    cartStore.clearCart();
  }
  async function register(username: string, email: string, password: string) {
    const payload = {
      username,
      email,
      password,
    };
    axios
      .post('/user/add', payload)
      .then((response) => {
        user.value = response.data;
        isAuthorised.value = true;
        showDialog.value = false;
        cartStore.getCart(user.value?.id);
      })
      .catch((error) => {
        console.log(error);
        errorText.value = error?.response?.data?.message;
      });
  }
  function toggleDialog() {
    showDialog.value = !showDialog.value;
  }

  return {
    user,
    login,
    register,
    showDialog,
    toggleDialog,
    isAuthorised,
    logout,
    errorText,
  };
});
