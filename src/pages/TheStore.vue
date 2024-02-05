<template>
  <div class="background">
    <div class="store">
      <div class="product" v-for="(product, index) in products" :key="index">
        <img :src="require(`@/assets/products/${product.image}`)" :alt="product.name" />
        <p>{{ product.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      products: [
    { name: 'Laptop', image: 'product1.jpg' },
    { name: 'iPhone', image: 'product2.png' },
    { name: 'Headphones', image: 'product3.jpg' },
  ]
    };
  },
};
</script>


<style>
.store {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {
  margin: 1rem;
  padding: 1rem;
  flex: 1 1 200px; /* Adjusted flex basis to maintain consistent width */
  text-align: center;
  max-width: 200px;
  border-radius: 10px;
  border: 2px solid #004aad;
  transition: transform 0.3s ease; 
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product:hover {
  transform: scale(1.05); 
}

.product img {
  max-width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0; 
}

p {
  margin: 0;
  font-size: 16px; 
}

</style>