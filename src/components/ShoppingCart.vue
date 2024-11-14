<template>
    <div>
        This is cart page {{ id }}
    </div>
</template>

<script>

    export default {
        props: ['id'],
        
        data() {
                return {
                    product: "",
                };
            },

            // created() {
            //     this.fetchProducts();
            // },

            // methods: {
            //     async fetchProducts() {
            //         try {
            //             const response = await axios.get(`product/${this.id}`);
            //             this.product = response.data;
            //         } catch (error) {
            //             console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
            //         }
            //     }
            // }
    }

</script>

<style>

</style>