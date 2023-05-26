<template>
  <v-container class="">
    <v-row
      no-gutters
      :justify="'space-between'"
    >
      <v-col cols="2">
        <v-sheet class="text-h5 font-weight-bold pt-1">Q-Commerce</v-sheet>
      </v-col>
      <v-col cols="2">
        <!-- <SearchInput /> -->
      </v-col>
      <v-col
        cols="5"
        v-if="width > 800"
      >
        <Navigation class="pl-2" />
      </v-col>
      <v-col
        cols="1"
        class="align-end pl-2"
        v-if="width > 800"
      >
        <VBtn
          v-if="auth.isAuthorised"
          :flat="true"
          prepend-icon="mdi-cart"
          class="me-auto"
          @click="router.push({ name: 'cart' })"
          >Корзина</VBtn
        >
      </v-col>
      <v-col
        cols="auto"
        class="align-end pl-2"
        v-if="width > 800"
      >
        <v-btn
          v-if="!auth.isAuthorised"
          prepend-icon="mdi-account"
          flat
          @click="auth.toggleDialog()"
          >Воити</v-btn
        >

        <v-btn
          v-else
          append-icon="mdi-arrow-down"
          flat
          >{{ auth.user?.username }}

          <v-menu activator="parent">
            <v-list>
              <v-list-item @click="auth.logout()">
                <v-list-item-title>Выйти</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </v-col>
      <v-col
        cols="2"
        class="pa-1 pl-2"
        v-if="width < 800"
      >
        <v-icon
          icon="mdi-menu"
          class=""
        ></v-icon>
        Меню
      </v-col>
    </v-row>
  </v-container>
  <AuthModal />
  <PaymentModal />
</template>
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useDisplay } from 'vuetify';
import SearchInput from './inputs/SearchInput.vue';
import AuthModal from './modals/AuthModal.vue';
import Navigation from './Navigation.vue';
import router from '@/router';
import PaymentModal from './modals/PaymentModal.vue';
const { width } = useDisplay();
const auth = useAuthStore();
</script>
