<template>
  <v-btn
    v-if="!auth.isAuthorised"
    prepend-icon="mdi-account"
    flat
    @click="auth.toggleDialog()"
    >Воити
  </v-btn>
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
</template>
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
</script>
