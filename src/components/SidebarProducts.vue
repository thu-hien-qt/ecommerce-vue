<template>
    <div class="product-list">
      <h3>{{ selectedSubcategory ? selectedSubcategory.title : "Chọn một danh mục" }}</h3>
      <ul v-if="selectedSubcategory">
        <li v-for="product in selectedSubcategoryProducts" :key="product.id">
          <img :src="product.image" alt="" class="product-icon" />
          <span>{{ product.name }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedSubcategory: Object
    },
    computed: {
      selectedSubcategoryProducts() {
        if (!this.selectedSubcategory) return [];
  
        const products = [
          { id: 1, name: "Product 1", image: "path-to-image-1" },
          { id: 2, name: "Product 2", image: "path-to-image-2" },
        ];
  
        return products;
      }
    }
  };
  </script>
  
  <style scoped>
  .product-list {
    padding: 10px;
  }
  
  .product-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .product-list li {
    display: flex;
    align-items: center;
    padding: 5px 0;
  }
  
  .product-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  </style>
  