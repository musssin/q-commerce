<script setup lang="ts">
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'
import { Line } from 'vue-chartjs'
import { watchEffect, ref, onMounted, computed } from "vue";
import { DataService } from '@/services/DataService';
import type Order from '@/entities/Order';
import type User from '@/entities/User';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)
const tab = ref(1)
const loading = ref(true)

const options = ref({
  height: '1500px',
  responsive: true,
})
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
const data = computed(() =>{
  const ordersData = [0,0,0,0,0,0,0,0,0,0,0,0]
  orders.value.forEach(order => {
    ordersData[order.createdAt.getMonth()] += 1
  });
  const usersData = [0,0,0,0,0,0,0,0,0,0,0,0]
  users.value.forEach(user => {
    usersData[user.createdAt?.getMonth()] += 1
  });
  return {
  labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  datasets: [
    {
      label: 'Пользователи',
      backgroundColor: '#f87979',
      data: usersData
    },
    {
      label: 'Заказы',
      backgroundColor: '#f82579',
      data: ordersData
    },
  ]
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
      <v-window-item v-for="n in 2" :key="n" :value="n">
        <v-container fluid v-if="!loading">
          <v-row>
            <v-col cols="12" md="7">
              <Line :data="data" :options="options" />
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>

  </v-container>
</template>
<style></style>
