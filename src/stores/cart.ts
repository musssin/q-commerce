import { ref, } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'
import { DataService } from '@/services/DataService';
import axios from 'axios';
import type Product from '@/entities/Product';
import Cart from '@/entities/Cart';
export const useCartStore = defineStore('cart', () => {
  let cart = useStorage('cart', Cart.emptyInstance());

  async function getCart(userId: number) {
    cart.value = await DataService.getCart(userId)
  }
  function addToCart(product: Product){
    cart.value.products.push(product)
    
    DataService.updateCart(cart.value)
  }
  function removeFromCart(product: Product){
    cart.value.products = cart.value.products.filter(p => p.id != product.id)
    
    DataService.updateCart(cart.value)
  }
  return { getCart, addToCart,removeFromCart,  cart };
});
