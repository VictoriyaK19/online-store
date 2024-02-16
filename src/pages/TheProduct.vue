<template>
  <div class="product-page">
    <div v-if="product" class="product-container">
      <div class="img-wrap">
        <img
          :src="require(`@/assets/products/${product.image}`)"
          :alt="product.name"
        />
      </div>
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <h3 class="price">{{ product.price }}</h3>
        <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    <div v-else>
      <not-found></not-found>
    </div>
  </div>
</template>

<script>
import { products } from "../temp-data";
import NotFound from "./NotFound.vue";

export default {
  data() {
    return {
      product: products.find(
        (product) => product.id === this.$route.params.productId
      ),
    };
  },
  components: {
    "not-found": NotFound,
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    }
  }
};
</script>

<style scoped>
.product-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  padding: 20px;
}

.product-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.img-wrap {
  margin-right: 20px;
}

img {
  max-width: 300px;
  max-height: 300px;
  border-radius: 8px;
}

.product-details {
  flex-grow: 1;
}

.product-details h1 {
  margin: 0 0 10px;
  font-size: 24px;
}

.price {
  color: #007bff;
  margin: 0 0 20px;
  font-size: 18px;
}

.add-to-cart {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
}

.add-to-cart:hover {
  background-color: #0056b3;
}
</style>
