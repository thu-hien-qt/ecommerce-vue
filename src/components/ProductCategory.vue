<template>
    
    <div v-for="category in categories" :key="category" @mouseover="categoryID = true">
      <router-link to="/Category_products"><div class="category" >{{ category.name }}</div></router-link>
    </div>
    
</template>

<script>
  import Category_products from "./SidebarProducts.vue";

  export default {
    data() {
      return {
        categories: [],
        categoryID: false
      };
    },
    created() {
      this.fetchCategory();
    },
    methods: {
      async fetchCategory() {
        try {
          const response = await axios.get('category')
          this.categories = response.data;
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        }
      }
    }
  };
</script>

<style scoped>
.category::first-letter {
  text-transform: uppercase;
}

.dropdown {
  display: flexbox;
}

.category {
  padding-left: 10px;
  padding: 5px;
  border-top: 1px solid rgb(164, 164, 164);
}

a {
  text-decoration: none;
  color: black;
}

.producs_of_category {
  background-color: white !important;
  display: inline-flexbox;
}

</style>