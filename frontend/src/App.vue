<template>
  <div class="main__page">
    <h1>AmoCRM</h1>
    <ProductForm/>
    <ProductList/>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue"
import Button from "@/components/base/Button.vue";
import ProductForm from "@/components/ProductForm.vue";


export default {
  components: {
    ProductList,
    Button,
    ProductForm,
  }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main__page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: #c96060;
}

</style>
