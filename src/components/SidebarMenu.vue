<template>
  <div class="sidebar-menu" @mouseleave="hideProducts">
    <ul class="menu-list">
      <li
        v-for="category in categories"
        :key="category.id"
        @mouseover="showProducts(category.id)"
        class="menu-item"
      >
        <router-link to="/sidebar_products">{{ category.name }}</router-link>
      </li>
    </ul>

    <div class="product-list" v-if="hoveredCategory !== null" @mouseenter="keepProductsVisible">
      
        <div
          v-for="(product, index) in products"
          :key="index"
          class="product-item"
        >
          <div class="product">
            <div class="img">
              <img :src="product.imgURL" alt="">
            </div>
            <div>
              {{ product.name }}
            </div>
          </div>
          
        </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      hoveredCategory: null,
      categories: [],
      products: [],
    };
  },

  created() {
    this.fetchCategory();
  },

  methods: {
    async fetchCategory() {
      try {
        const response = await axios.get('category');
        this.categories = response.data;
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu danh mục:', error);
      }
    },
    async fetchProducts() {
      try {
        const id = this.hoveredCategory;
        const response = await axios.get(`productsByCategory/${id}`);
        this.products = response.data;
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
      }
    },
    showProducts(id) {
      this.hoveredCategory = id;
      this.fetchProducts();
    },
    hideProducts() {
      this.hoveredCategory = null;
    },
    keepProductsVisible() {
    },
  },
};
</script>

<style scoped>
.sidebar-menu {
  display: flex;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 185px;
}

.menu-item {
  padding: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #d0d0d0;
}

.product-list {
  padding-left: 20px;
  background-color: #f9f9f9;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 800px;
  border-left: 2px black solid;
}

.product-item {
  width: 16.6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
}

a {
  text-decoration: none;
  color: black;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.img {
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
