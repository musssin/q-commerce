<template>
  <v-dialog
    v-model="cart.showPaymentDialog"
    width="500"
    @keyup.enter="submit"
  >
    <v-card class="ma-3">
      <v-card-text class="text-center text-h5"> Оплата </v-card-text>
      <v-text-field
        v-model="number"
        class="ml-6 mr-6"
        type="number"
        label=" Номер карты"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
        v-model="username"
        class="ml-6 mr-6"
        type="text"
        label="Имя держателя"
        :rules="[rules.required]"
      ></v-text-field>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="date"
            class="ml-6 mr-6"
            type="text"
            label="Срок действия"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="cvv"
            class="ml-2 mr-6"
            type="text"
            label="CVV "
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-divider
        :color="'black'"
        class="ma-2"
      />
      <v-text-field
        v-model="address"
        class="ml-6 mr-6"
        type="text"
        label="Адрес доставки"
        :rules="[rules.required]"
      ></v-text-field>
      <v-card-actions class="col">
        <v-col>
          <v-btn
            color="white"
            class="bg-primary ma-1"
            block
            @click="submit"
            >Купить</v-btn
          >
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-snackbar
    v-model="showSnackBar"
    timeout="3000"
    :color="snackBarColor"
  >
    {{ snackBarText }}

    <template #actions>
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
const number = ref('');
const username = ref('');
const date = ref('');
const cvv = ref('');
const address = ref('');
const showSnackBar = ref(false);
const snackBarText = ref('Заполните все поля');
const snackBarColor = ref('accent');
const rules = {
  required: (value: any) => !!value || 'Необходимое поле',
};
function submit() {
  if (username.value.length < 1) {
    snackBarColor.value = 'red';
    snackBarText.value = 'Заполните имя держателя!';
    showSnackBar.value = true;
    return;
  }
  if (number.value.length < 1) {
    snackBarColor.value = 'red';
    snackBarText.value = 'Заполните номер карты!';
    showSnackBar.value = true;
    return;
  }
  if (date.value.length < 1) {
    snackBarColor.value = 'red';
    snackBarText.value = 'Заполните срок карты!';
    showSnackBar.value = true;
    return;
  }
  if (cvv.value.length < 1) {
    snackBarColor.value = 'red';
    snackBarText.value = 'Заполните CVV!';
    showSnackBar.value = true;
    return;
  }
  if (address.value.length < 1) {
    snackBarColor.value = 'red';
    snackBarText.value = 'Заполните адрес доставки!';
    showSnackBar.value = true;
    return;
  }
  snackBarColor.value = 'accent';
  snackBarText.value = 'Покупка успешно совершена!';
  cart.showPaymentDialog = false;
  cart.createOrder(address.value);
  showSnackBar.value = true;
}
</script>
