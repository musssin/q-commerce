<template>
  <v-container class="">
    <v-col>
      <!-- <v-sheet class="text-h6">Категории</v-sheet> -->
      <v-expansion-panels v-model="panel" multiple >
        <v-expansion-panel>
          <v-expansion-panel-title>Категории</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list>
              <v-list-item-group v-model="selectedCategory">
                <v-list-item v-for="category in categoriesStore.categories" :key="category.id" :value="category.id">
                    <template v-slot:prepend="{ isActive }">

                      <v-list-item-action start>
                        <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                      </v-list-item-action>
                    </template>
                    <v-list-item-title>{{ category.name }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Бренды</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list>
              <v-list-item-group v-model="selectedBrand">
                <v-list-item v-for="brand in categoriesStore.brands" :key="brand.id" :value="brand.name">
                  <template v-slot:prepend="{ isActive }">

                      <v-list-item-action start>
                        <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                      </v-list-item-action>
                    </template>
                    <v-list-item-title>{{ brand.name }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-sheet>Цена</v-sheet>
    </v-col>
  </v-container>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useCategoryStore } from '@/stores/data';
import { ref, onMounted } from 'vue';
const { width } = useDisplay();
const panel = ref([0,1]);
const selectedCategory = ref({});
const selectedBrand = ref({});
const categoriesStore = useCategoryStore();
onMounted(() => {
  if (categoriesStore.categories.length === 0) {
    categoriesStore.getCategories();
  }
  if (categoriesStore.brands.length === 0) {
    categoriesStore.getBrands();
  }
})
</script>
