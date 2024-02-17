<template>
  <div class="cart-container">
    <h1>Shopping Cart</h1>
    <div
      v-if="$store.state.cart && $store.state.cart.length > 0"
      class="cart-items"
    >
      <div
        class="product"
        v-for="product in $store.state.cart"
        :key="product.id"
      >
        <img
          :src="require(`@/assets/products/${product.image}`)"
          class="product-image"
          :alt="product.name"
        />
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </div>
        <div class="quantity">
              <button class="quantity-button" @click="decreaseQuantity(product)">−</button>
              <span class="quantity-text">{{ product.quantity }}</span>
              <button class="quantity-button" @click="addToCart(product)">+</button>
            </div>
        <button class="remove-button" @click="removeFromCart(product)">
          X
        </button>
      </div>
      <div class="total-cart">Total: {{ totalCart }} $</div>
      <button class="checkout-button">Proceed to checkout</button>
    </div>
    <div v-else>
      <p class="empty-cart-message">Your cart is currently empty!</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalCart() {
      return this.$store.getters.totalCart;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    removeFromCart(product) {
      this.$store.commit("removeFromCart", product);
    },
    decreaseQuantity(product) {
      this.$store.commit("decreaseQuantity", product);
    },
  },
};
</script>

<style scoped>
h1 {
  color: #fff;
}
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cart-items {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}

.product {
  margin: 1vw 1vh;
  text-align: left;
  min-width: 97%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
}

.product-details {
  flex-grow: 1;
}

.product-name {
  margin: 0;
  font-size: 1.2rem;
}

.price {
  margin: 0 0 10px;
  font-size: 1rem;
  color: #007bff;
}

.remove-button {
  background-color: transparent;
  color: #dc3545;
  border: none;
  border-radius: 50%;
  padding: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #f8d7da;
}

.total-cart {
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  padding-left: 1rem;
}

.checkout-button {
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background-color: #0056b3;
}

.empty-cart-message {
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
  color: #fff;
  min-height: 50vh;
  margin-top: 3rem;
}
.quantity {
  display: flex;
  /* flex-direction: column; for mobiles*/
  align-items: center;
  margin-right: 1rem;
}

.quantity-button {
  margin: 0 1vw;
  padding: 1vw;
  background-color: transparent;
  border: none;
  border-radius: 80%;
  padding: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quantity-button:hover {
  background-color: #f0f0f0;
}

.quantity-text {
  margin: 0 5px; 
  font-size: 1.2rem;
}

</style>
