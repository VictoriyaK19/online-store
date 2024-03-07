import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
      cart: { 
        id: null,
        products: [] 
      },
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.products.find((p) => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.products.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, product) {
      state.cart.products = state.cart.products.filter((p) => p.id !== product.id);
    },
    decreaseQuantity(state, product) {
      const existingProduct = state.cart.products.find((p) => p.id === product.id);
      if (existingProduct.quantity === 1) {
        state.cart.products = state.cart.products.filter((p) => p.id !== product.id);
      } else {
        existingProduct.quantity--;
      }
    },
  },
  
  getters: {
    totalCart(state) {
      const total = state.cart.products.reduce(
        (total, product) =>
          total +
          parseFloat(product.price.replace(",", ".")) * product.quantity,
        0
      );
      const formattedTotal = total.toFixed(2);
      const parts = formattedTotal.split(".");
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return integerPart + ", " + parts[1];
    },
  },
});

export default store;
