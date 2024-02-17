import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
      cart: [{ id: "124", name: "iPhone", price: "1230,99$", image: "product2.png", quantity: 2 }],
    };
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find(p => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, product) {
      state.cart = state.cart.filter(p => p.id !== product.id);
    },
    decreaseQuantity(state, product) {
      const existingProduct = state.cart.find(p => p.id === product.id);
      if (existingProduct.quantity === 1) {
        state.cart = state.cart.filter(p => p.id !== product.id);
      } else {
        existingProduct.quantity--;
      }
    }
  },
  getters: {
    totalCart(state) {
      const total = state.cart.reduce(
        (total, product) => total + (parseFloat(product.price.replace(",", ".")) * product.quantity),
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
