<template>
    <header-e/>
    <div style="padding-top: 5px;"></div>
    <router-view/>
  
</template>

<script>

export default {
  data() {
    return {
      selectedSubcategory: null
    };
  },
  methods: {
    updateSelectedSubcategory(subcategory) {
      this.selectedSubcategory = subcategory;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: auto;
  position: relative;
}
</style>
