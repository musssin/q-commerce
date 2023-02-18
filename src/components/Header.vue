<template>
    <v-container class="">
        <v-row no-gutters :justify="'space-between'">
            <v-col cols="2">
                <v-sheet class="text-h5 font-weight-bold pt-1">Q-Commerce</v-sheet>
            </v-col>
            <v-col cols="2">
                <SearchInput />
            </v-col>
            <v-col cols="6" v-if="width > 800">
                <Navigation class="pl-2" />
            </v-col>
            <v-col cols="2" class=" pl-2" v-if="width > 800">
                <!-- <v-icon icon="mdi-cart" class=""></v-icon>
                Корзина -->
                <VBtn :flat="true" prepend-icon="mdi-cart">Корзина</VBtn>
            </v-col>
            <v-col cols="2" class="pa-1 pl-2" v-if="width < 800">
                <v-icon icon="mdi-menu" class=""></v-icon>
                Меню
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify'
import SearchInput from './inputs/SearchInput.vue';
import Navigation from './Navigation.vue';
const { width } = useDisplay()

</script>