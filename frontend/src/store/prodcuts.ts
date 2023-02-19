import {defineStore} from 'pinia';
import {ref} from 'vue';

interface Product {
    id: number;
}

export const useProductsStore = defineStore('products', () => {
    const products = ref<Product[]>([]);

    const addProduct = (product: Product) => {
        products.value.push(product);
    }

    return {
        products,
        addProduct,
    }
});