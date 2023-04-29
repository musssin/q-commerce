<template>
  <v-col cols="12">
    <v-card :border="true" theme="light">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">
            {{ product?.title }}
          </v-card-title>
          <v-card-subtitle style="color: rgb(200, 10, 10);opacity: 1; ">{{ product?.price }} KZT</v-card-subtitle>
          <v-card-subtitle style="color: black;opacity: 1; ">{{ product?.description }}</v-card-subtitle>

          <v-card-actions>
            <v-sheet>Количество на складе:</v-sheet>
            <v-text-field v-model="newProduct.balance" variant="outlined" density="compact" color="primary"
              style="max-width: 100px;margin-left: 10px;" />
            <v-btn v-show="newProduct?.balance != product?.balance" class="ms-2" variant="outlined" size="small"
              @click="updateProduct" v-text="'Подтвердить'" />
          </v-card-actions>
          <v-card-actions>
            <v-btn class="ms-2" variant="outlined" size="small" color="primary"
              :append-icon="showEdit ? 'mdi-arrow-up-bold' : 'mdi-arrow-down-bold'"
              @click="showEdit = !showEdit">Редактировать</v-btn>
            <v-btn class="ms-2" variant="outlined" size="small" v-text="'Удалить'" style="color: rgb(200, 10, 10)"
              @click="deleteProduct" />
          </v-card-actions>
          <v-card-actions v-if="showEdit">
            <v-col>
              <v-text-field v-model="newProduct.title" placeholder="Название" label="Название" variant="filled" density="comfortable" color="primary"
                style="max-width: 300px;width:300px;margin-left: 10px;" />
              <v-text-field v-model="newProduct.description" placeholder="Описание" label="Описание" variant="filled" density="comfortable" color="primary"
                style="max-width: 300px;width:300px;margin-left: 10px;" />
              <v-text-field v-model="newProduct.brand" placeholder="Бренд" label="Бренд" variant="filled" density="comfortable" color="primary"
                style="max-width: 300px;width:300px;margin-left: 10px;" />
              <v-text-field v-model="newProduct.category" placeholder="Категория" label="Категория" variant="filled" density="comfortable" color="primary"
                style="max-width: 300px;width:300px;margin-left: 10px;" />
              <v-text-field v-model="newProduct.price" placeholder="Цена в KZT" label="Цена" variant="filled" density="comfortable" color="primary"
                style="max-width: 300px;width:300px;margin-left: 10px;" />
                <v-btn class="ms-2" variant="outlined" size="small" color="primary"
              :append-icon=" 'mdi-upload-multiple'"
              @click="updateProduct">Сохранить</v-btn>
            </v-col>

          </v-card-actions>
        </div>

        <v-avatar class="ma-3" size="125" rounded="0">
          <v-img :src="product?.thumbnail"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-col>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { ref } from 'vue';
import Product from '../../entities/Product';
import { useCartStore } from '../../stores/cart'
import { DataService } from '@/services/DataService';
import { onMounted } from 'vue';
const { width } = useDisplay();
const loading = ref(false);
const showEdit = ref(false)
const cart = useCartStore()
const props = defineProps({
  product: Product
})
const emits = defineEmits<{
  (event:'deleteProduct', id: Number): void,
  (event:'updateProduct', product: Product): void
}>()
const newProduct = ref(Product.emptyInstance())
onMounted(() => {
  newProduct.value = JSON.parse(JSON.stringify(props.product))
})

async function updateProduct() {
  if (!newProduct) {
    return
  }
  emits('updateProduct', newProduct.value)
  if (showEdit.value) showEdit.value = false
}
async function deleteProduct() {
  emits('deleteProduct', props.product?.id)
}
</script>
  