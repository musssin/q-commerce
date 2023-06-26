<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainHeader from '@/components/MainHeader.vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';
</script>

<template>
  <v-layout>
    <MainHeader />
    <NavigationDrawer />
    <!-- <RouterView /> -->
  </v-layout>

  <!-- </main> -->
</template>
