<template>
  <v-container>
    <Banner />
    <v-sheet class="text-h6 font-weight-bold pt-1 ma-2"
      >Корзина Q-Commerce</v-sheet
    >
    <v-spacer />
    <v-row>
      <v-col cols="8">
        <CartItem
          v-for="p of cartStore.cart.products"
          :key="'products' + p"
          :product="p"
        />
      </v-col>
      <v-col cols="4">
        <v-card
          class="mx-auto"
          max-width="344"
          variant="outlined"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">Информация о корзине</div>
              <div class="text-h6">Всего товаров:</div>
              <div class="text-h5 mb-1">{{ count }}</div>
              <div class="text-h6">Количество:</div>
              <div class="text-h5 mb-1">{{ quantity }}</div>
              <div class="text-h6">На сумму:</div>
              <div
                class="text-h5 mb-1"
                style="color: "
              >
                {{ total }} KZT
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn
              variant="outlined"
              @click="cartStore.showPaymentDialog = true"
            >
              Оформить покупку
            </v-btn>
            <v-btn
              variant="flat"
              @click="cartStore.removeAllFromCart()"
            >
              Очистить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import CartItem from '@/components/cards/CartItem.vue';
import Banner from '@/components/BannerTop.vue';
import { useCartStore } from '../stores/cart';
import { watchEffect, ref } from 'vue';
const cartStore = useCartStore();
const total = ref(0);
const count = ref(0);
const quantity = ref(0);
watchEffect(() => {
  total.value = 0;
  count.value = 0;
  quantity.value = 0;
  cartStore.cart.products.forEach((p) => {
    count.value++;
    quantity.value += p.quantity;
    total.value += p.price * p.quantity;
  });
});
</script>
<style></style>
