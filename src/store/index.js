import { createStore } from "vuex";
import firebase from 'firebase/app';
import 'firebase/database';

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
      if(user) {
        state.cart.id = user.uid;
      }
    },
    addToCart(state, product) {
      const existingProduct = state.cart.products.find((p) => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.products.push({ ...product, quantity: 1 });
      }
      firebase.database().ref(`carts/${state.user.uid}`).set(state.cart);
    },
    removeFromCart(state, product) {
      state.cart.products = state.cart.products.filter((p) => p.id !== product.id);
      firebase.database().ref(`carts/${state.user.uid}`).set(state.cart);
    },
    decreaseQuantity(state, product) {
      const existingProduct = state.cart.products.find((p) => p.id === product.id);
      if (existingProduct.quantity === 1) {
        state.cart.products = state.cart.products.filter((p) => p.id !== product.id);
      } else {
        existingProduct.quantity--;
      }
      firebase.database().ref(`carts/${state.user.uid}`).set(state.cart);
    },
    setCart(state, cartData) {
      state.cart = cartData;
    },
  },
  actions: {
    async fetchCartFromFirebase({ commit, state }) {
      const userId = state.user ? state.user.uid : null;
      if (userId) {
        firebase.database().ref(`carts/${userId}`).once('value')
          .then(snapshot => {
            const cartData = snapshot.val();
            if (cartData) {
              commit('setCart', cartData);
            }
          })
          .catch(error => {
            console.error('Error fetching cart from Firebase:', error);
          });
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
