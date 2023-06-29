<template>
  <v-app-bar
    flat
    class="mt-0"
  >
    <v-container>
      <v-row
        no-gutters
        :justify="'space-between'"
      >
        <v-col cols="auto">
          <v-sheet class="text-h6 font-weight-bold">Q - commerce</v-sheet>
        </v-col>

        <v-col cols="auto">
          <HeaderNavigation v-if="smAndUp" />
        </v-col>
        <v-col
          v-if="smAndUp"
          cols="auto"
          class="align-end"
        >
          <AuthButton />
        </v-col>
        <v-col
          v-else
          cols="2"
        >
          <v-btn
            prepend-icon="mdi-menu"
            :density="'compact'"
            @click="navigation.setDrawer(!navigation.drawer)"
          >
            Меню
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <AuthModal />
  <PaymentModal />
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { AuthButton, AuthModal } from '@/modules/auth/';
import HeaderNavigation from './HeaderNavigation.vue';
import PaymentModal from '@/components/modals/PaymentModal.vue';
import { useNavigationStore } from '@/stores/navigation';
const { smAndUp } = useDisplay();
const navigation = useNavigationStore();
</script>
