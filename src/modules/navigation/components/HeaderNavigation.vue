<template>
  <v-row no-gutters>
    <v-col
      v-for="(i, index) of navigationList"
      :key="index"
      :cols="xs ? '12' : 'auto'"
    >
      <v-btn
        :flat="true"
        align-self="end"
        class="w-100"
        :prepend-icon="i.icon"
        :active="$route.name === i.route"
        @click="router.push({ name: i.route })"
      >
        {{ sm ? '' : i.label }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify';
import router from '@/router';
import { navigationList } from '../navigationList';
const { xs, sm } = useDisplay();
</script>
