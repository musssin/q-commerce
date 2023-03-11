<template>
  <v-container class="">
    <v-col>
      <!-- <v-sheet class="text-h6">Категории</v-sheet> -->
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel>
          <v-expansion-panel-title>Категории</v-expansion-panel-title>
            <v-list>
              <div v-for="category in categories" :key="'1' + category">
                <v-list-item >
                  <template v-slot:prepend="{ isActive }">
                    <v-list-item-action start>
                      <v-checkbox-btn :model-value="isActive" @click="filterStore.selectCategory(category)" ></v-checkbox-btn>
                    </v-list-item-action>
                  </template>

                  <v-list-item-title>{{ $t(category.toString()) }}</v-list-item-title>
                </v-list-item>
              </div>
            </v-list>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Бренд</v-expansion-panel-title>
            <v-list>
              <div v-for="brand in brands" :key="'1' + brands">
                <v-list-item >
                  <template v-slot:prepend="{ isActive }">
                    <v-list-item-action start>
                      <v-checkbox-btn :model-value="isActive" @click="filterStore.selectBrand(brand)" ></v-checkbox-btn>
                    </v-list-item-action>
                  </template>

                  <v-list-item-title>{{ $t(brand.toString()) }}</v-list-item-title>
                </v-list-item>
              </div>
            </v-list>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-sheet>Цена</v-sheet>
    </v-col>
  </v-container>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useFilterStore } from '@/stores/filters';
import { ref, onMounted } from 'vue';
const { width } = useDisplay();
const panel = ref([0, 1]);
const filterStore = useFilterStore();
const categories = ref(Array<String>());
const brands = ref();

onMounted(async () => {
  categories.value = await filterStore.getCategories()
  brands.value = await filterStore.getBrands()
})
</script>
