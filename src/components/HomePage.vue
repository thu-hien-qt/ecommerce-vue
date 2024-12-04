<template>
  <div id="main" class="container">
    <div class="container">
      <div class="slide-wrapper" ref="slideWrapper" :style="{ transform: `translate3d(-${active * 100}%, 0, 0)` }">
        <!-- Clone cuối -->
        <div v-for="(x, index) in dice.slice(-1)" :key="'start-' + index" class="slide">
          <img :src="x.image" alt="" />
        </div>

        <!-- Slide chính -->
        <div v-for="(x, index) in dice" :key="'main-' + index" class="slide">
          <img :src="x.image" alt="" />
        </div>

        <!-- Clone đầu -->
        <div v-for="(x, index) in dice.slice(0, 1)" :key="'end-' + index" class="slide">
          <img :src="x.image" alt="" />
        </div>
      </div>
    </div>
    <div class="container1">
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
      product: [],
      dice: [
        { image: require('@/assets/image/banner-dien-may-21.jpg'), title: 'Slide 1' },
        { image: require('@/assets/image/banner-lunar.jpg'), title: 'Slide 2' },
        { image: require('@/assets/image/josivn-banner.png'), title: 'Slide 3' },
      ],
      active: 1, // Slide đầu tiên (đã bao gồm clone đầu và cuối)
      slideInterval: null, // Dùng để lưu bộ đếm thời gian
    };
  },
  methods: {
    nextSlide() {
      this.active++;
      const wrapper = this.$refs.slideWrapper;
      if (wrapper) {
        wrapper.style.transitionDuration = '500ms';
        wrapper.style.transform = `translate3d(-${this.active * 100}%, 0, 0)`;
      }

      if (this.active === this.dice.length + 1) {
        setTimeout(() => this.resetPosition(1), 500); // Reset về slide đầu
      }
    },
    prevSlide() {
      this.active--;
      const wrapper = this.$refs.slideWrapper;
      if (wrapper) {
        wrapper.style.transitionDuration = '500ms';
        wrapper.style.transform = `translate3d(-${this.active * 100}%, 0, 0)`;
      }

      if (this.active === 0) {
        setTimeout(() => this.resetPosition(this.dice.length), 500); // Reset về slide cuối
      }
    },
    resetPosition(index) {
      const wrapper = this.$refs.slideWrapper;
      if (wrapper) {
        wrapper.style.transitionDuration = '0ms'; // Không có hiệu ứng
        wrapper.style.transform = `translate3d(-${index * 100}%, 0, 0)`;
      }
      this.active = index; // Cập nhật vị trí
    },
    async fetchProducts() {
      try {
        const response = await axios.get('products');
        this.products = response.data;
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
      }
    },
  },
  created() {
    this.fetchProducts();
  },
  mounted() {
    this.slideInterval = setInterval(this.nextSlide, 3000);
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  }

}
</script>

<style scoped>
.container {
  width: 100%;
  overflow: hidden; /* Ẩn phần tử ngoài khung */
  position: relative;
}

.slide-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out; /* Hiệu ứng mượt */
  will-change: transform; /* Tối ưu hiệu suất */
}

.slide {
  flex: 0 0 100%;
  /* Mỗi slide chiếm toàn bộ chiều rộng */
  text-align: center;
  box-sizing: border-box;
}

.slide img {
  width: 100%;
  height: 500px;
}


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

.banner {
  position: relative;
  overflow: hidden;
}

.banner-slide {
  min-width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
}

.banner-slide.active {
  opacity: 1;
  position: relative;
}

img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.dice-enter-from {
  opacity: 0;
  translate: 200px 0;
  rotate: 360deg;
}

.dice-enter-to {
  opacity: 1;
  translate: 0 0;
  rotate: 0deg;
}

.dice-enter-active,
.dice-leave-active,
.dice-move {
  transition: all 0.7s;
}

.dice-leave-active {
  position: absolute;
}

.dice-leave-from {
  opacity: 1;
}

.dice-leave-to {
  opacity: 0;
}

.diceDiv {
  margin: 10px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  border: solid black 1px;
  border-radius: 5px;
  display: inline-block;
}
</style>
