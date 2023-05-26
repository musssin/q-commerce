<template>
  <v-col cols="12">
    <v-card
      color="#1F7087"
      theme="dark"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">
            {{ product?.title }}
          </v-card-title>
          <v-card-subtitle style="color: whitesmoke; opacity: 1"
            >{{ product?.price }} KZT</v-card-subtitle
          >

          <v-card-actions>
            <v-btn
              :disabled="product?.quantity < 2"
              class="ms-2"
              variant="outlined"
              size="small"
              @click="changeQuantity('-')"
              v-text="'-'"
            />
            <v-card-subtitle style="color: whitesmoke; opacity: 1"
              >{{ product?.quantity }} шт.</v-card-subtitle
            >
            <v-btn
              class="ms-1"
              variant="outlined"
              size="small"
              v-text="'+'"
              @click="changeQuantity('+')"
            />
            <v-btn
              class="ms-3"
              variant="flat"
              size="small"
              color="black"
              icon="mdi-delete"
              @click="cart.removeFromCart(product)"
            />
          </v-card-actions>
        </div>

        <v-avatar
          class="ma-3"
          size="125"
          rounded="0"
        >
          <v-img :src="product?.thumbnail"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-col>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { ref } from 'vue';
import Product from '../../entities/Product';
import { useCartStore } from '../../stores/cart';
const { width } = useDisplay();
const loading = ref(false);
const cart = useCartStore();
const props = defineProps({
  product: Product,
});
async function changeQuantity(operation: string) {
  const p = props.product;
  if (operation === '-') {
    p.quantity = parseInt(p?.quantity - 1);
  } else {
    p.quantity = parseInt(p?.quantity + 1);
  }
  cart.setProduct(p);
}
</script>
