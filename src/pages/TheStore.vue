<template>
  <div class="background">
    <div class="store">
      <div class="product" v-for="product in products" :key="product.productId">
        <img
          :src="require(`@/assets/products/${product.image}`)"
          :alt="product.name"
        />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}</p>
        <button @click="viewDetails(product)">View Details</button>
        <button @click="addToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../temp-data";

export default {
  data() {
    return {
      products
    };
  },
  methods: {
    viewDetails(product) {
      console.log (product);
    }
  }
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
  flex: 1 1 200px; 
  text-align: center;
  max-width: 230px;
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
h3 {
  margin: 0;
  padding-bottom: 0.5rem;
}
p {
  margin: 0;
  font-size: 16px;
  padding-bottom: 0.5rem;

}
</style>
