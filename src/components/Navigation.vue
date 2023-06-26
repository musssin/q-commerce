<template>
  <v-row no-gutters>
    <v-col
      v-for="(i, index) of items"
      :key="index"
    >
      <v-btn
        :flat="true"
        align-self="end"
        :active="$route.name === i.route"
        @click="router.push({ name: i.route })"
      >
        {{ i.label }}
      </v-btn>
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
    label: 'Админ',
    route: 'admin',
  },
];
const auth = useAuthStore();
</script>
