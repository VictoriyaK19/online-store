<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <div class="product-container" v-for="product in cartItems" :key="product.id">
    <img
      class="product-image"
      :src="require(`@/assets/products/${product.image}`)"
      alt=""
    />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
    <button class="remove-button" @click="removeFromCart(product)">Remove from cart</button>
  </div>
  <div class="total-cart">Total: {{ totalCart }}$</div>
  <button class="checkout-button">Proceed to checkout</button>
  </div>
  <div v-else>
    You current have no items in your cart!
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        { id: "124", name: "iPhone", price: "1230,99$", image: "product2.png" },
      ],
    };
  },
  computed: {},
  methods: {
    removeFromCart(product) {
      this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    }
  }
};
</script>
