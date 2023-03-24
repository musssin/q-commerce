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

                <v-card-subtitle>{{ product?.category }}</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                    START RADIO
                  </v-btn>
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
  const { width } = useDisplay();
  const loading = ref(false);
  const cart = useCartStore()
  defineProps({
    product: Product
  })
  </script>
  