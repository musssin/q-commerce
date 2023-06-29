<template>
  <v-navigation-drawer
    v-if="xs"
    v-model="navigation.drawer"
    class=""
  >
    <div class="fill-height d-flex flex-column justify-space-between">
      <div>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          :title="`${isAuthorised ? user.username : 'Анонимный клиент'}`"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list
          density="comfortable"
          nav
        >
          <HeaderNavigation />
        </v-list>
      </div>
      <v-list-item class="mb-10 align-self-center">
        <v-btn
          v-if="isAuthorised"
          :prepend-icon="'mdi-logout'"
          color="red"
          @click="logout"
          >Выити</v-btn
        >
        <v-btn
          v-else
          :prepend-icon="'mdi-login'"
          color="primary"
          outlined
          @click="login"
          >Воити</v-btn
        >
      </v-list-item>
    </div>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation';
import { useDisplay } from 'vuetify';
import { useAuthStore } from '@/stores/auth';
import HeaderNavigation from './HeaderNavigation.vue';
const navigation = useNavigationStore();
const { xs } = useDisplay();
const { user, login, logout, isAuthorised } = useAuthStore();
</script>
