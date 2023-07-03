<template>
  <v-card style="width: 1000px">
    <v-card-title>Фильтры</v-card-title>
    <v-card-subtitle>Цена</v-card-subtitle>
    <VueSimpleRangeSlider
      v-model="state.range"
      :min="0"
      :max="1000000"
      class="px-3"
    >
    </VueSimpleRangeSlider>
    <v-btn @click="brands.map((b) => (b.name = '123'))">asdasd</v-btn>
    <v-card-subtitle>Бренды</v-card-subtitle>
    {{ brands1 }}
    <!-- <v-chip
      v-for="(b, bIndex) of brands"
      :key="'brand' + bIndex"
      class="ma-2"
      closable
      @click:close="b.isSelected"
    >
      {{ b.name }}
    </v-chip> -->
  </v-card>
  <!-- <v-expansion-panels
    v-model="panel"
    multiple
  >
    <v-expansion-panel>
      <v-expansion-panel-title>Цена</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row class="mt-2">
          <v-text-field
            v-model="startPrice"
            label="От"
            class=""
            type="number"
          />
          <v-text-field
            v-model.lazy="endPrice"
            label="До"
            class=""
            type="number"
          />
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title>Категории</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list>
          <v-list-item
            v-for="category in categories"
            :key="'1' + category"
          >
            <template #prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn
                  :model-value="isActive"
                  @click="filterStore.selectCategory(category)"
                ></v-checkbox-btn>
              </v-list-item-action>
            </template>

            <v-list-item-title>{{ $t(category.toString()) }}</v-list-item-title>
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
            :key="'1' + brand"
          >
            <template #prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn
                  :model-value="isActive"
                  @click="filterStore.selectBrand(brand)"
                ></v-checkbox-btn>
              </v-list-item-action>
            </template>

            <v-list-item-title>{{ $t(brand.toString()) }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels> -->
</template>
<script setup lang="ts">
import VueSimpleRangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/css';
import { useFilterStore } from '@/stores/filters';
import { ref, onBeforeMount } from 'vue';
import { computed } from 'vue';
const { brands, fetchBrands, fetchCategories } = useFilterStore();
interface VueSimpleRangeSliderInterface {
  range: [number, number];
  number: number;
}
const stateInstance: VueSimpleRangeSliderInterface = {
  range: [20, 1000],
  number: 10,
};
const state = ref(stateInstance);
// watch(startPrice, () => {
//   clearTimeout(timeout);
//   timeout = setTimeout(() => {
//     filterStore.startPrice = startPrice.value;
//   }, 1000);
// });
// watch(endPrice, () => {
//   clearTimeout(timeout2);
//   timeout2 = setTimeout(() => {
//     filterStore.endPrice = endPrice.value;
//   }, 1000);
// });
onBeforeMount(async () => {
  fetchBrands();
  fetchCategories();
});
const brands1 = computed(() => {
  return brands;
});
</script>
