<template>
    <v-col cols="12">
          <v-card
          :border="true"
          theme="light"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  {{ product?.title }}
                </v-card-title>
                <v-card-subtitle style="color: black;opacity: 1; ">{{ product?.price }} KZT</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                  :disabled="product?.balance === 0 "
                    class="ms-2"
                    variant="outlined"
                    size="small"
                    @click="changeBalance('-')"
                    v-text="'-'"
                  />
                  <v-card-subtitle style="color: black;opacity: 1; ">{{ product?.balance }} шт.</v-card-subtitle>
                  <v-btn
                    class="ms-1"
                    variant="outlined"
                    size="small"
                    v-text="'+'"
                    @click="changeBalance('+')"
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
  import {ref} from 'vue';
import Product from '../../entities/Product';
import {useCartStore} from '../../stores/cart'
import { DataService } from '@/services/DataService';
  const { width } = useDisplay();
  const loading = ref(false);
  const cart = useCartStore()
  const props = defineProps({
    product: Product
  })
  async function changeBalance(operation: string) {
    if (!props.product) {
      return
    }
    const p = props.product
    if (operation === '-') {
      p.balance = p?.balance - 1
    } else {
      p.balance = p?.balance + 1
    }
    DataService.updateProduct(p)
  }
  </script>
  