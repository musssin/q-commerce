<script setup lang="ts">
import { RouterView } from 'vue-router';
import { MainHeader, NavigationDrawer } from '@/modules/navigation';
</script>

<template>
  <v-layout>
    <MainHeader />
    <NavigationDrawer />
    <RouterView />
  </v-layout>

  <!-- </main> -->
</template>
