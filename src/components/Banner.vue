<template>
  <v-card class="mt-3 mb-3">
    <v-img
      :src="card.src"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
      cover
    >
      <v-card-title
        class="text-white"
        v-text="card.title"
      ></v-card-title>
    </v-img>
  </v-card>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref, onMounted } from 'vue';

const cards = {
  home: {
    title: 'Главная',
    src: 'https://img.lovepik.com/background/20211021/medium/lovepik-cool-line-technology-banner-background-image_400112106.jpg',
    flex: 12,
  },
  products: {
    title: 'Все товары',
    src: 'https://arystorephone.com/wp-content/uploads/2023/04/slide-banner-v27e.webp',
    flex: 12,
  },
  cart: {
    title: 'Корзина',
    src: 'https://img.freepik.com/fotos-premium/compras-linea-ordenador-portatil-raton-pc-carro-supermercado-sobre-fondo-azul-clasico-color-2020-vista-superior_175682-21855.jpg?w=740',
    flex: 12,
  },
  admin: {
    title: 'Администрирование',
    src: 'https://inspirahub.rs/wp-content/uploads/2020/04/data_analytics_banner-1200x500.png',
    flex: 12,
  },
  orders: {
    title: 'Заказы',
    src: 'https://img.freepik.com/fotos-premium/compras-linea-ordenador-portatil-raton-pc-carro-supermercado-sobre-fondo-azul-clasico-color-2020-vista-superior_175682-21855.jpg?w=740',
    flex: 12,
  },
};
const card = ref({
  title: 'Главная',
  src: 'https://img.lovepik.com/background/20211021/medium/lovepik-cool-line-technology-banner-background-image_400112106.jpg',
  flex: 12,
});
onMounted(() => {
  card.value = cards[router.currentRoute.value.name];
});
</script>
