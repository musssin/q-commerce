<template>
  <v-container>
    <Banner />
    <v-sheet class="text-h6 font-weight-bold pt-1 ma-2">Мои заказы</v-sheet>
    <v-spacer />
    <v-row>
      <v-col
        v-if="!loading"
        cols="12"
      >
        <OrderItem
          v-for="(order, oIndex) of orders"
          :key="'order_item' + oIndex"
          :order="order"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import Banner from '@/components/BannerTop.vue';
import OrderItem from '@/components/cards/OrderItem.vue';
import type Order from '@/entities/Order';
import { DataService } from '@/services/DataService';
import { useAuthStore } from '@/stores/auth';
import { ref, onMounted } from 'vue';
const orders = ref(Array<Order>());
const loading = ref(true);
const auth = useAuthStore();
onMounted(() => {
  if (auth.user.role === 'admin') {
    DataService.getOrders().then((result) => {
      orders.value = result;
      loading.value = false;
    });
  } else {
    DataService.getOrdersByUser().then((result) => {
      orders.value = result;
      loading.value = false;
    });
  }
});
</script>

<style></style>
