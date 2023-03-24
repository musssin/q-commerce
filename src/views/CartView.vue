<script setup lang="ts">
import CartItem from '@/components/cards/CartItem.vue';
import {useCartStore} from '../stores/cart'
const cartStore = useCartStore()
const cart =  cartStore.cart
</script>

<template>
  <v-col cols="12">
    <v-sheet class="text-h6 font-weight-bold pt-1">Корзина Q-Commerce</v-sheet>
    <CartItem :product="p" v-for="p of cart.products"/>
  </v-col>
</template>
<style>
</style>
