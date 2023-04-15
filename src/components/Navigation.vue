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
        >{{ i.label }}</VBtn
      >
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import router from '@/router';
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
  {
    label: 'Админ',
    route: 'admin',
  }
];
</script>
