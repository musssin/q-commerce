import { ref, } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'
import axios from 'axios';
export const useAuthStore = defineStore('auth', () => {
  
  const showDialog = ref(false);
  let user = useStorage('user',{});
  const isAuthorised = useStorage('isAuthorised',ref(false));
  async function getCurrentUser(): Promise<Object> {
    return {};
  }

  async function login(username: string, password: string) {
      const body = {
        username: username,
        password: password
      }
      axios.post('auth/login', JSON.stringify(body))
        .then((response) => {
          user.value = response.data
          isAuthorised.value = true
          showDialog.value = false
        })
  }
  function logout(){
    user.value = {}
    isAuthorised.value = false
  }
  async function register(username: string, email: string, password: string) {
    // const user = new Parse.User();
    // user.set('email', email);
    // user.set('password', password);
    // user.set('username', username);
    try {
      return true;
    } catch (error) {
      return false;
    }
  }
  function toggleDialog(){
    showDialog.value = !showDialog.value
  }

  return { user, login, register, showDialog, toggleDialog, isAuthorised, logout };
});
