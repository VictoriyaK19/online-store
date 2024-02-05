<template>
  <div class="background">
    <div class="store">
      <div class="product" v-for="(product, index) in products" :key="index">
        <img :src="require(`@/assets/products/${product.image}`)" :alt="product.name" />
        <p>{{ products.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      products: [
    { name: 'Product 1', image: 'product1.jpg' },
    { name: 'Product 2', image: 'product2.png' },
    { name: 'Product 3', image: 'product3.jpg' },
  ]
    };
  },
};
</script>


<style>
.store {
  display: flex;
  flex-wrap: wrap;
}

.product {
  flex: 1 1 200px; 
  margin: 10px;
  text-align: center;
}

.product img {
  max-width: 100%;
  height: auto;
}
</style>