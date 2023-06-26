<template>
  <v-card :border="false">
    <v-expansion-panels
      v-model="panel"
      multiple>
      <v-expansion-panel>
        <v-expansion-panel-title>Цена</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-row class="mt-2">
            <v-text-field
              label="От"
              class=""
              type="number"
              v-model="startPrice" />
            <v-text-field
              label="До"
              class=""
              type="number"
              v-model.lazy="endPrice" />
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Категории</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list>
            <v-list-item
              v-for="category in categories"
              :key="'1' + category">
              <template v-slot:prepend="{ isActive }">
                <v-list-item-action start>
                  <v-checkbox-btn
                    :model-value="isActive"
                    @click="
                      filterStore.selectCategory(category)
                    "></v-checkbox-btn>
                </v-list-item-action>
              </template>

              <v-list-item-title>{{
                $t(category.toString())
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Бренд</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list>
            <v-list-item
              v-for="brand in brands"
              :key="'1' + brand">
              <template v-slot:prepend="{ isActive }">
                <v-list-item-action start>
                  <v-checkbox-btn
                    :model-value="isActive"
                    @click="filterStore.selectBrand(brand)"></v-checkbox-btn>
                </v-list-item-action>
              </template>

              <v-list-item-title>{{ $t(brand.toString()) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
<script setup lang="ts">
import { useFilterStore } from '@/stores/filters';
import { ref, onMounted, watch } from 'vue';
const panel = ref([0, 1]);
const filterStore = useFilterStore();
const categories = ref(Array<String>());
const brands = ref();
const startPrice = ref(0);
const endPrice = ref(1000000);
let timeout: number | undefined;
let timeout2: number | undefined;
watch(startPrice, () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    filterStore.startPrice = startPrice.value;
  }, 1000);
});
watch(endPrice, () => {
  clearTimeout(timeout2);
  timeout2 = setTimeout(() => {
    filterStore.endPrice = endPrice.value;
  }, 1000);
});
onMounted(async () => {
  categories.value = await filterStore.getCategories();
  brands.value = await filterStore.getBrands();
});
</script>
