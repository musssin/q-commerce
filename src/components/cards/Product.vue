<template>
  <v-card class="pa-0 mt-0">
    <v-img
      cover
      height="250"
      :src="product?.thumbnail"
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product?.title }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <v-row class="mx-0">
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

      <div class="my-4 text-subtitle-1">{{ product?.price * 1 }} KZT</div>

      <div>{{ product?.description }}</div>
      <v-sheet
        v-if="product?.balance < 10"
        class="text-red"
      >
        Осталось: {{ product?.balance }} шт.</v-sheet
      >
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
      <v-btn
        color="primary"
        class=""
        :disabled="product?.balance < 1"
        @click="addToCart(product)"
        v-text="'Добавить в корзину'"
      />
      <!-- <v-btn v-text="'Купить'" color="primary" class=""/> -->
    </v-card-actions>
    <v-snackbar
      v-model="snackbar"
      color="primary"
      variant="flat"
    >
      {{ snackbarText }}
      <template
        v-if="snackbarText === 'Пожалуйста, авторизуйтесь для этого!'"
        #actions
      >
        <v-btn
          variant="text"
          @click="auth.showDialog = true"
        >
          Войти
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { ref } from 'vue';
import Product from '../../entities/Product';
import { useCartStore } from '../../stores/cart';
import { useAuthStore } from '@/modules/auth';
const { width } = useDisplay();
const snackbar = ref(false);
const snackbarText = ref('');
const cart = useCartStore();
const auth = useAuthStore();
function addToCart(p: Product) {
  if (auth.isAuthorised) {
    cart.addToCart(p);
    snackbar.value = true;
    snackbarText.value = 'Товар добавлен в корзину!';
  } else {
    snackbar.value = true;
    snackbarText.value = 'Пожалуйста, авторизуйтесь для этого!';
  }
}
defineProps({
  product: Product,
});
</script>
@/modules/auth/auth