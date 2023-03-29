<template>
  <v-dialog
    v-model="auth.showDialog"
    width="500"
    @keyup.enter="submit"
  >
    <v-card
      class="ma-3"
      v-if="mode === 'login'"
    >
      <v-card-text class="text-center"> Авторизация </v-card-text>
      <v-card-text class="text-subtitle"> Имя пользователя </v-card-text>
      <v-text-field
        class="ml-6 mr-6"
        v-model="username"
      ></v-text-field>
      <v-card-text class="text-subtitle"> Пароль </v-card-text>
      <v-text-field
        class="ml-6 mr-6"
        type="password"
        v-model="password"
      ></v-text-field>
      <v-card-actions class="col">
        <v-col>
          <v-btn
            color="white"
            class="bg-primary ma-1"
            block
            @click="submit"
            >Воити</v-btn
          >
          <v-btn
            color="primary"
            class="text-center ma-1"
            block
            @click="setMode('register')"
            >Нет аккаунта? Зарегистрироватся</v-btn
          >
        </v-col>
      </v-card-actions>
    </v-card>
    <v-card
      class="ma-3"
      v-if="mode === 'register'"
    >
      <v-card-text class="text-center"> Регистрация </v-card-text>
      <v-card-text class="text-subtitle"> Имя пользователя </v-card-text>
      <v-text-field
        class="ml-6 mr-6"
        v-model="username"
      ></v-text-field>
      <v-card-text class="text-subtitle"> E-mail </v-card-text>
      <v-text-field
        class="ml-6 mr-6"
        v-model="email"
      ></v-text-field>
      <v-card-text class="text-subtitle"> Пароль </v-card-text>
      <v-text-field
        class="ml-6 mr-6"
        type="password"
        v-model="password"
      ></v-text-field>
      <v-card-actions class="col">
        <v-col>
          <v-btn
            color="white"
            class="bg-primary ma-1"
            block
            
            @click="submit"
            >Регистрация</v-btn
          >
          <v-btn
            color="primary"
            class="text-center ma-1"
            block
            @click="setMode('login')"
            >Уже есть аккаунт? Воити</v-btn
          >
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
const mode = ref('login');
async function setMode(m: string) {
  mode.value = m;
}
const email = ref('');
const password = ref('');
const username = ref('');

async function submit(){
  if (mode.value === 'login') {
    auth.login(username.value, password.value);
  } else {
    auth.register(username.value, email.value, password.value);
  }
}
</script>
