import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
      cart: [
        // { id: "124", name: "iPhone", price: "1230,99$", image: "product2.png" },
        {
          id: "124",
          name: "iPhone",
          price: "1230,99$",
          image: "product2.png",
          quantity: 1,
        },
      ],
    };
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, product) {
      state.cart = state.cart.filter(p => p.id !== product.id);
    }
  },
  getters: {
    totalCart(state) {
      const total = state.cart.reduce(
        (total, product) => total + parseFloat(product.price.replace(",", ".")),
        0
      );
      const formattedTotal = total.toFixed(2);
      const parts = formattedTotal.split(".");
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return integerPart + "," + parts[1];
    },
  },
});

export default store;
