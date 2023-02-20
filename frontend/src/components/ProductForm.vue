<template>
  <div class="created__form">
    <Input v-model="product.name"/>
    <Select v-model="product.type" :options="productOptions"/>
    <Button :isDisabled="!Boolean(product.type)" :isLoading="loading" :handleClick="createProduct">Создать</Button>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useProductsStore} from "@/store/prodcuts";
import Select from '@/components/base/Select.vue';
import Button from '@/components/base/Button.vue';
import Input from '@/components/base/Input.vue';
import axios from "axios";


interface Product {
  name: string;
  type: string | null;
}

export default defineComponent({
  components: {
    Input,
    Button,
    Select,
  },
  setup() {
    const product = ref<Product>({
      name: '',
      type: '',
    });

    const loading = ref<Boolean>(false)

    const productOptions = [
      {
        label: 'Не выбрано',
        value: '',
      },
      {
        label: 'Сделка',
        value: 'leads',
      },
      {
        label: 'Контакт',
        value: 'contacts',
      },
      {
        label: 'Компания',
        value: 'companies',
      },
    ];
    const productStore = useProductsStore()

    const createProduct = async():Promise<void> => {
      try {
        loading.value = true;
        const {data} = await axios.post('http://localhost:3000/api/products/create', product.value)
        productStore.addProduct(data)
        product.value = {name: '', type: ''};
      } catch (e) {
        console.log(e)
      } finally {
        setTimeout(() => {
          loading.value = false;
        },1500)

      }

    }

    return {
      product,
      productOptions,
      createProduct,
      loading
    };
  },
});
</script>

<style scoped>

.created__form {
  max-width: 140px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>