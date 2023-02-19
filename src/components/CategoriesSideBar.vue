<template>
    <v-container class="">
        <v-col >
            <v-sheet>Категории</v-sheet>
            <v-sheet>Бренды</v-sheet>
            <v-sheet>Цена</v-sheet>
        </v-col>
    </v-container>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { useCategoryStore } from '@/stores/category'
const { width } = useDisplay()
const categoriesStore = useCategoryStore()
const categories  = categoriesStore.categories
</script>