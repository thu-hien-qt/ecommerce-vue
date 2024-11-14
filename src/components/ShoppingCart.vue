<template>
    <form @submit.prevent="handleSubmit">
      <div>
        <input type="text" placeholder="Name" v-model="contact.name" required />
      </div>

      <div>
        <input type="text" placeholder="Phone number" v-model="contact.phone" required />
      </div>
      
      <div>
        <input type="text" placeholder="Address" v-model="contact.address" required />
      </div>
      <button type="submit">Gửi</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['id'],

    data() {
      return {
        contact: {
          name: '',
          phone: '',
          address: '',
          productId: this.id,
        },
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await axios.post('contact', this.contact);
          console.log(response.data);
          alert('Thông tin đã được gửi thành công!');
        } catch (error) {
          console.error('Lỗi khi gửi thông tin:', error);
          alert('Gửi thông tin thất bại. Vui lòng thử lại sau.');
        }
      },
    },
  };
  </script>
  