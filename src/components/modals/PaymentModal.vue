<template>
  <v-dialog v-model="cart.showPaymentDialog" width="500" @keyup.enter="submit">
    <v-card class="ma-3">
      <v-card-text class="text-center text-h5"> Оплата </v-card-text>
      <v-card-text class="text-subtitle"> Номер карты</v-card-text>
      <v-text-field class="ml-6 mr-6" type="number" v-model="number" ></v-text-field>
      <v-card-text class="text-subtitle"> Имя держателя </v-card-text>
      <v-text-field class="ml-6 mr-6" type="text" v-model="username"></v-text-field>
      <v-row>
        <v-col cols="6">
          <v-card-text class="text-subtitle"> Срок действия </v-card-text>
          <v-text-field class="ml-6 mr-6" type="text" v-model="date" />
        </v-col>
        <v-col cols="6">
          <v-card-text class="text-subtitle"> CVV </v-card-text>
          <v-text-field class="ml-2 mr-6" type="text" v-model="cvv" />
        </v-col>
      </v-row>

      <v-card-actions class="col">
        <v-col>
          <v-btn color="white" class="bg-primary ma-1" block @click="submit">Воити</v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-snackbar
      v-model="showSnackBar"
      timeout="3000"
      color="accent"
    >
      Покупка успешно совершена!

      <template v-slot:actions>
        <v-btn
          color="primary"
          variant="text"
          @click="showSnackBar = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';
const cart = useCartStore();
const number = ref('')
const username = ref('')
const date = ref('')
const cvv = ref('')
const showSnackBar = ref(false)
function submit() {
  cart.showPaymentDialog = false
  cart.removeAllFromCart()
  showSnackBar.value = true
}
</script>
