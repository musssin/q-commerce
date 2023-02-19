<template>
    <v-row no-gutters>
        <v-col v-for="(i, index) of items" :key="index" >
            <VBtn :flat="true" align-self="end" @click="router.push({name: i.route})">{{ i.label }}</VBtn>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
const items = ref([
    {
        label: 'Главная',
        route: 'home'
    },
    {
        label: 'Каталог',
        route: 'categories'
    },
    {
        label: 'О проекте',
        route: ''
    },
    {
        label: 'Связаться с нами',
        route: ''
    }
    ])
</script>