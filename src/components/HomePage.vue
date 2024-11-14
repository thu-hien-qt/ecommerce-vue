<template>
  <div class="product">
    <div class="container">
      <div class="productList">
        <div v-for="product in products" :key="product.id" class="product" style="width: 194px;">
          <a href="#">
            <div class="image">
              <img :src="product.imgURL" alt="" />
            </div>
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Giá: {{ product.price }}</p>
          </a>
          <router-link :to="{ name: 'cart', params: { id: product.id } }">
            <button>Mua ngay</button>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios';
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('products'); // Endpoint của API
        this.products = response.data;
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
      }
    }
  }
};
</script>

<style scoped>
.product {
  border: 1px solid #dddee0;
  margin: 5px;
  padding: 5px;
  border-radius: 6px;
}

.productList {
  display: flex;
  margin: 5px;
}

img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

.image {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: black;
}

h2::first-letter {
  text-transform: uppercase;
}

button {
  width: 100%;
  display: inline;
  margin: auto;
  text-align: center;
  color: rgba(42, 131, 233, 1);
  font-size: 20px;
  font-weight: 700;
  color: #2a83e9;
  border: 1px solid #dddee0;
}
</style>
