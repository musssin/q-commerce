<template>
    <v-row no-gutters>
        <v-col v-for="(i, index) of items" :key="index" >
            <VBtn :flat="true" align-self="end">{{ i }}</VBtn>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const items = ref(["Главная", 'Каталог', 'О проекте', 'Связаться с нами'])
</script>