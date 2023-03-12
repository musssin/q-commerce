<template>
    <v-card
    class="mx-1 my-3 "
    max-width="300"
  >

    <v-img
      cover
      height="250"
      :src="product?.thumbnail"
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product?.title }}</v-card-title>

      
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          {{ product?.rating }}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ (product?.price) * 400 }} KZT
      </div>

      <div>{{ product?.description }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
      <v-btn v-text="'Купить'" color="primary" class=""/>
    </v-card-actions>
  </v-card>
  </template>
  <script setup lang="ts">
  import { useDisplay } from 'vuetify';
  import {ref} from 'vue';
import Product from '../entities/Product';
  const { width } = useDisplay();
  const loading = ref(false);
  defineProps({
    product: Product
  })
  </script>
  