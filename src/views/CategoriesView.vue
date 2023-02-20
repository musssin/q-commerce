<script setup lang="ts">
import CategoriesSideBar from '@/components/CategoriesSideBar.vue';
</script>

<template>
  <v-row>
    <v-col
      cols="3"
      sm="11"
      md="3"
    >
      <CategoriesSideBar />
    </v-col>
  </v-row>
</template>
<style>
.block-top {
  background-image: url('../src/assets/blue_blur.jpg');
  background-size: cover;
  height: 600px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-style: normal;
  font-weight: bolder;
  font-size: xx-large;
}
</style>
