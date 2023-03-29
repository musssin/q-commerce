import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'
import { DataService } from '@/services/DataService';
import type Product from '@/entities/Product';
import Cart from '@/entities/Cart';
import { ref } from 'vue'
export const useCartStore = defineStore('cart', () => {
  // let cart = useStorage('cart', Cart.emptyInstance());
  let cart = useStorage('cart', Cart.emptyInstance());
  let timeout: NodeJS.Timeout;
  const showPaymentDialog = ref(false);
  async function getCart(userId: number) {
    cart.value = await DataService.getCart(userId)
  }
  async function clearCart() {
    cart.value = Cart.emptyInstance()
  }
  function addToCart(product: Product){
    const quantity = cart.value.products.filter(p => p.id === product.id).length
    if (quantity === 0) {
      product.quantity = 1
      cart.value.products.push(product)
    } else if (quantity > 0) {
      cart.value.products.forEach(p => {
        if (p.id === product.id) {
          p.quantity++
        }
      });
    } 
    DataService.updateCart(cart.value)
  }
  function removeFromCart(product: Product){
    cart.value.products = cart.value.products.filter(p => p.id != product.id)
    DataService.updateCart(cart.value)
  }
  function removeAllFromCart(){
    cart.value.products = []
    DataService.updateCart(cart.value)
  }
  function setProduct(product: Product){
    clearTimeout(timeout)
    cart.value.products.forEach(p => {
      if (p.id === product.id) {
        p = product
      }
    });
    timeout = setTimeout(() => {
      DataService.updateCart(cart.value)
    }, 3000);
    
  }
  return { getCart,clearCart, addToCart,removeFromCart, setProduct,  cart, showPaymentDialog, removeAllFromCart };
});
