<script setup lang="ts">
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'
import { watchEffect, ref, onMounted, computed } from "vue";
import { DataService } from '@/services/DataService';
import type Order from '@/entities/Order';
import type User from '@/entities/User';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
const tab = ref(1)
const loading = ref(true)
const years = ['2022', '2023', '2024']
const selectedYear = ref('2023')
const selectedDatasets = ref([{ active: false, label: 'Количество пользователей' }, { active: false, label: 'Количество заказов' }, { active: true, label: 'Общая сумма заказов' }])
const options = ref({
  height: '1500px',
  responsive: true,
})
const ordersTotal = ref(0)
const orders = ref(new Array<Order>())
const users = ref(new Array<User>())
onMounted(async () => {
  orders.value = await DataService.getOrders()
  users.value = await DataService.getAllUsers()
  loading.value = false
})
// const ordersData = computed(()=> {
//   return data
// })
const data = computed(() => {
  const datasets = []
  if (selectedDatasets.value[0].active) {
    const usersData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    users.value.forEach(user => {
      if (user.createdAt.getFullYear.toString() === selectedYear.value) {
        usersData[user.createdAt?.getMonth()] += 1
      }
    });
    datasets.push({
      label: selectedDatasets.value[1].label,
      backgroundColor: '#f87979',
      data: usersData
    })
  }
  if (selectedDatasets.value[1].active) {
    const ordersData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    orders.value.forEach(order => {
      console.log(order.createdAt.getFullYear().toString())
      if (order.createdAt.getFullYear().toString() === selectedYear.value) {
        ordersData[order.createdAt.getMonth()] += 1
      }
    });
    datasets.push({
      label: selectedDatasets.value[0].label,
      backgroundColor: '#f87979',
      data: ordersData
    })
  }
  if (selectedDatasets.value[2].active) {
    ordersTotal.value = 0
    const ordersData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    orders.value.forEach(order => {
      console.log(order.createdAt.getFullYear().toString())
      if (order.createdAt.getFullYear().toString() === selectedYear.value) {
        ordersData[order.createdAt.getMonth()] += order.total
        ordersTotal.value += order.total
      }
    });
    datasets.push({
      label: selectedDatasets.value[2].label,
      backgroundColor: '#f87979',
      data: ordersData
    })
  }




  return {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: datasets
  }
})
</script>

<template>
  <v-container>
    <!-- <v-sheet class="text-h6 font-weight-bold pt-1 ma-2">Админстрирование Q-Commerce</v-sheet>
                  <v-spacer/> -->
    <v-tabs v-model="tab" color="primary">
      <v-tab :value="1">Статистика</v-tab>
      <v-tab :value="2">Управление товарами</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item :value="1">
        <v-container fluid v-if="!loading">
          <v-row>
            <v-col cols="12" md="7">
              <Line :data="data" :options="options" />
            </v-col>
            <v-col cols="12" md="4">
              <v-row class="my-2">
                <v-sheet class="pa-2">Год: </v-sheet>
                <v-btn v-for="y of years" class="mx-2" flat :active="y === selectedYear" @click="selectedYear = y"
                  variant="outlined">
                  <span class="hidden-sm-and-down">{{ y }}</span>

                  <v-icon end>
                    mdi-calendar
                  </v-icon>
                </v-btn>
              </v-row>
              <v-sheet class="pa-1">Данные для отображение: </v-sheet>
              <v-btn v-for="d of selectedDatasets" class="w-100 my-1" flat :active="d.active" :title="d.label"
                variant="outlined" @click="d.active = !d.active">
                {{ d.label }}
                <!-- <span class="hidden-sm-and-down">{{ d.label }}</span> -->
              </v-btn>
              <v-row>
                <v-col cols="4">
                  <v-card >
                <template v-slot:title>
                  {{ users.length }}
                </template>

                <v-card-text>
                  пользователей
                </v-card-text>
              </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card >
                <template v-slot:title>
                  {{ orders.length }}
                </template>

                <v-card-text>
                  Заказов
                </v-card-text>
              </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card >
                <template v-slot:title>
                  {{ ordersTotal }}₸
                </template>

                <v-card-text>
                 Общая сумма заказов
                </v-card-text>
              </v-card>
                </v-col>
              </v-row>
              
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>

  </v-container>
</template>
<style></style>
