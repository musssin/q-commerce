<template>
  <v-row no-gutters>
    <v-col
      v-for="(i, index) of items"
      :key="index"
    >
      <VBtn
        :flat="true"
        align-self="end"
        :active="$route.name === i.route"
        @click="router.push({ name: i.route })"
        >{{ i.label }}</VBtn>
    </v-col>
    <v-col
    v-if="auth.user.role === 'admin'"
    >
      <VBtn

        :flat="true"
        align-self="end"
        :active="$route.name === 'admin'"
        @click="router.push({ name: 'admin' })"
        >{{ 'Админ' }}</VBtn>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
const items = [
  {
    label: 'Главная',
    route: 'home',
  },
  {
    label: 'Каталог',
    route: 'products',
  },
  {
    label: 'Мои заказы',
    route: 'orders',
  },
];
const auth = useAuthStore()
</script>
