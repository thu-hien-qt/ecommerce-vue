<template>
  <div class="menu">
    <div class="container">
      <ul class="list">
        <li @mouseover="showCategory" @mouseleave="hideCategory">
          <div class="category">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'list']" />
            </div>
            <span>Danh mục sản phẩm</span>
          </div>

          <div v-if="isCategoryVisible" class="dropdown">
            <SidebarMenu/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue';

export default {
  components: {
    SidebarMenu
  },
  data() {
    return {
      isCategoryVisible: false,
    };
  },
  methods: {
    showCategory() {
      this.isCategoryVisible = true;
    },
    hideCategory() {
      this.isCategoryVisible = false;
    },
    selectSubcategory(subcategory) {
      this.$emit('update-category', subcategory);
    }
  }
};
</script>

<style scoped>
.menu {
  background-color: #e2e2e2;
  text-align: left;
}

.list {
  display: flex;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  position: relative;
}

.category {
  padding: 10px 5px;
  background-color: #016da0;
  color: white;
  display: flex;
  cursor: pointer;
}

.category .icon {
  margin-right: 10px;
  display: inline;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  min-width: 100%;
  z-index: 1;
}
</style>
