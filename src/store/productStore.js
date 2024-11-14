import { defineStore } from 'pinia';
import axios from '@/axios';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      if (this.products.length) return;

      try {
        const response = await axios.get('/products');
        this.products = response.data;
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
      }
    }
  }
});
