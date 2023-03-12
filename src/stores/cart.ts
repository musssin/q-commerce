import { ref, } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'
import axios from 'axios';
import type Product from '@/components/entities/Product';
import Cart from '@/components/entities/Cart';
export const useCartStore = defineStore('cart', () => {
  let cart = useStorage('cart', Cart.emptyInstance());

  function getCart(userId: number) {
    axios.get(`carts/user/${userId}`)
      .then((response) => {
        cart.value = new Cart(response.data)
      })
  }
  function addToCart(product: Product){
    cart.value.products.push(product)
    
    axios.put(`carts/${cart.value.id}`, JSON.stringify({products: cart.value.products}))
  }
  return { getCart, addToCart };
});
