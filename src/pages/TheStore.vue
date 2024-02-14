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
        <router-link class="view-details-link" :to="'/store/' + product.id">
          View Details
        </router-link>
        
        <button class="add-to-cart-button" @click="addToCartAction(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { products } from "../temp-data";

export default {
  data() {
    return {
      products
    };
  },
  methods: {
    ...mapActions(['addToCartAction'])
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
.view-details-link {
  color: #004aad;
  text-decoration: none;
  font-size: 14px;
  display: block;
  margin-top: 0.5rem;
  transition: color 0.3s ease;
}

.view-details-link:hover {
  color: #002b72;
}

.add-to-cart-button {
  background-color: #004aad;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-top: 0.5rem;
}

.add-to-cart-button:hover {
  background-color: #002b72;
}
</style>
