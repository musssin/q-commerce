<template>
    <v-col cols="12">
          <v-card
            color="#1F7087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Заказ номера: {{ order?.id }}
                </v-card-title>
                <v-row justify="space-between" class="ml-2 mt-2">
                  <v-card-subtitle style="color: whitesmoke;opacity: 1; ">На сумму: {{ order?.total }} KZT</v-card-subtitle>
                <v-card-subtitle style="color: whitesmoke;opacity: 1; " class="text-h6" v-if="auth.user.role === 'admin'">Почта заказчика: {{ order?.userEmail }} </v-card-subtitle>

                </v-row>
                
                <v-card-actions>
                  <v-card-subtitle style="color: whitesmoke;opacity: 1; ">Количество товаров: {{ order?.totalQuantity }} шт.</v-card-subtitle><br/>
                  
                </v-card-actions>
                <v-card-actions>
                  <v-card-subtitle style="color: whitesmoke;opacity: 1; ">Дата составление: {{  new Date(order?.createdAt).toLocaleString('ru') }} </v-card-subtitle>
                  <v-card-subtitle style="color: whitesmoke;opacity: 1; ">Дата доставки: {{ new Date(order?.deliveryDate).toLocaleString('ru') }} </v-card-subtitle>
                  
                </v-card-actions>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
             
                <v-img :src="order?.products[0].thumbnail" ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
  </template>
  <script setup lang="ts">
  import { useDisplay } from 'vuetify';
  import {ref} from 'vue';
import {useCartStore} from '../../stores/cart'
import Order from '@/entities/Order';
import { useAuthStore } from '@/stores/auth';
  const { width } = useDisplay();
  const loading = ref(false);
  const cart = useCartStore()
  const auth = useAuthStore()
  const props = defineProps({
    order: Order
  })
  </script>
  