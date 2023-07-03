<template>
  <v-dialog
    v-model="showDialog"
    width="500"
    @keyup.enter="submit"
  >
    <v-card
      v-if="mode === 'login'"
      class="ma-3"
    >
      <v-card-text class="text-center"> Авторизация </v-card-text>
      <v-card-text class="text-subtitle"> Имя пользователя </v-card-text>
      <v-text-field
        v-model="username"
        class="ml-6 mr-6"
      ></v-text-field>
      <v-card-text class="text-subtitle"> Пароль </v-card-text>
      <v-text-field
        v-model="password"
        class="ml-6 mr-6"
        type="password"
      ></v-text-field>
      <v-sheet class="text-red ma-5">{{
        errorText === 'Invalid credentials'
          ? 'Неправильный логин или пароль'
          : errorText
      }}</v-sheet>
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
      v-if="mode === 'register'"
      class="ma-3"
    >
      <v-card-text class="text-center"> Регистрация </v-card-text>
      <v-card-text class="text-subtitle"> Имя пользователя </v-card-text>
      <v-text-field
        v-model="username"
        class="ml-6 mr-6"
      ></v-text-field>
      <v-card-text class="text-subtitle"> E-mail </v-card-text>
      <v-text-field
        v-model="email"
        class="ml-6 mr-6"
      ></v-text-field>
      <v-card-text class="text-subtitle"> Пароль </v-card-text>
      <v-text-field
        v-model="password"
        class="ml-6 mr-6"
        type="password"
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
import { useAuthStore } from '@/modules/auth';
// TO-DO: implement form validation
const { login, register, showDialog, errorText } = useAuthStore();
const mode = ref('login');
async function setMode(m: string) {
  mode.value = m;
}
const email = ref('');
const password = ref('');
const username = ref('');

async function submit() {
  if (mode.value === 'login') {
    login(username.value, password.value);
  } else {
    register(username.value, email.value, password.value);
  }
}
</script>
