<template>
    <div v-if="show" class="product-added-message">
      <img :src="product.image" class="product-image" :alt="product.name" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: Boolean,
      message: String,
      product: Object
    }
  };
  </script>
  
  <style scoped>
.product-added-message {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  align-items: center;
}

.product-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
  </style>