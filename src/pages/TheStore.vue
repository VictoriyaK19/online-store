<template>
  <div class="background">
    <div class="store">
      <div class="product" v-for="product in products" :key="product.productId">
        <div v-if="!product.imageLoaded" class="loading-gif">
          <img src="https://i.gifer.com/ZKZg.gif" />
        </div>
        <img
          :src="require(`@/assets/products/${product.image}`)"
          @load="product.imageLoaded = true"
        />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}</p>
        <router-link class="view-details-link" :to="'/store/' + product.id">
          View Details
        </router-link>

        <button class="add-to-cart-button" @click="addToCart(product)">
          Add to cart
        </button>
      </div>
    </div>
    <ProductAddedMessage v-if="addedToCart" :product="addedToCartProduct" />
  </div>
</template>

<script>
import { products } from "../temp-data";
import ProductAddedMessage from "@/components/messages/ProductAddedMessage.vue";

export default {
  data() {
    return {
      products,
      addedToCart: false,
      addedToCartProduct: null
    }
  },
  components: {
    ProductAddedMessage
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
  },
  mounted() {
    this.products.forEach((product) => {
      product.imageLoaded = false;
    });
  },
  async addToCart(product) {
      try {
        // Your logic to add the product to Firebase
        // Example with Firebase:
        // await firebase.firestore().collection('cart').add(product);
        this.$store.commit("addToCart", product);
        this.addedToCart = true;
        this.addedToCartProduct = product;
        setTimeout(() => {
          this.addedToCart = false;
          this.addedToCartProduct = null;
        }, 5000); // Hide after 5 seconds, adjust as needed
      } catch (error) {
        console.error("Error adding product to cart:", error);
        // Handle error if necessary
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

.loading-overlay {
  position: relative;
}

.loading-gif {
  padding-top: 1rem;
  margin: 0 auto;
  min-height: 194px;
  max-width: 70%;
  height: auto;
  border-radius: 10px 10px 0 0;
}
</style>
