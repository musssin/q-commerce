<template>
  <v-autocomplete
    :clearable="true"
    :items="results"
    hint="Поиск"
    :focused="false"
    class=""
    :density="'compact'"
    prepend-inner-icon="mdi-magnify"
  >
    <!-- <template v-slot:append>
            <v-icon color="red">
                mdi-plus
            </v-icon>
        </template> -->
  </v-autocomplete>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const results = ref(['Apple', 'Samsung', 'Huawei']);
</script>
