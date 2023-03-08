import { ref } from 'vue';
import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', () => {
  const showDialog = ref(false);
  const user = ref({});
  async function getCurrentUser(): Promise<Object> {
    return {};
  }

  async function login(username: string, password: string) {
    try {
      getCurrentUser();
      return true;
    } catch (error: any) {
      return false;
    }
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

  return { user, login, register, showDialog };
});
