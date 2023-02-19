<template>
  <div class="table-container">
    <div class="row header">
      <div class="cell">ID</div>
    </div>
    <div class="row" v-for="product in products" :key="product.id">
      <div class="cell">{{ product.id }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProductsStore } from "@/store/prodcuts";

export default defineComponent({
  setup() {
    const productsStore = useProductsStore();

    return {
      products: productsStore.products,
    };
  },
});
</script>

<style>
.table-container {
  min-width: 350px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-direction: row;
}

.header {
  font-weight: bold;
}

.cell {
  flex: 1;
  border: 1px solid #53f8c2;
  padding: 0.5rem 1rem;
}

.cell:not(:last-child) {
  border-right: none;
}
</style>

