<template>
  <v-btn
    v-if="!isAuthorised"
    prepend-icon="mdi-account"
    flat
    @click="toggleDialog()"
    >Воити
  </v-btn>
  <v-btn
    v-else
    append-icon="mdi-arrow-down"
    flat
    >{{ user.username }}

    <v-menu activator="parent">
      <v-list>
        <v-list-item @click="logout">
          <v-list-item-title>Выйти</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/modules/auth';
const { isAuthorised, user, logout, toggleDialog } = useAuthStore();
</script>
