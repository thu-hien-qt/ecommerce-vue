<template>
    <div>
        <h1>{{ product.name }}</h1>
        <div>giá: {{ product.price }}</div>
        <div>dòng máy: {{ product.brand }}</div>
        <div>mô tả: {{ product.description }}</div>
        This is cart page {{ id }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],

    data() {
        return {
            product: "",
        };
    },

    created() {
        this.fetchProducts();
    },

    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get(`product/${this.id}`);
                this.product = response.data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
            }
        }
    }
}

</script>

<style></style>