import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
      cart: [
        { id: "124", name: "iPhone", price: "1230,99$", image: "product2.png" },
        { id: "124", name: "iPhone", price: "1230,99$", image: "product2.png" },
      ],
    };
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    }
  },
  actions: {
    addToCartAction({ commit }, product) {
      commit('addToCart', product);
    }
  },
  getters: {
    totalCart(state) {
      return state.cart.reduce((total, product) => total + product.price, 0);
    }
  }
  
});

export default store;
