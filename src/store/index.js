import { createStore } from "vuex";
import router from "@/router";

const store = createStore({
  state() {
    return {
      cart: {
        id: null,
        products: [],
      },
    };
  },
  mutations: {
    setUser(state, userId) {
      if (userId) {
        state.cart.id = userId;
      }
    },
    clearCart(state) {
      state.cart.id = null;
      state.cart.products = [];
    },
    addToCart(state, product) {
      if (!state.cart.id) {
        router.push('/auth');
        return;
      }
      const existingProduct = state.cart.products.find(
        (p) => p.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.products.push({ ...product, quantity: 1 });
      }

      const userId = state.cart.id;

      const databaseUrl = `https://online-store-70f91-default-rtdb.europe-west1.firebasedatabase.app/carts/${userId}/products.json`;

      fetch(databaseUrl, {
        method: "PUT",
        body: JSON.stringify(state.cart.products),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update cart in the database");
          }
      
        })
        .catch((error) => {
          console.error("Error updating cart in the database:", error);
        });
    },

    removeFromCart(state, product) {
      state.cart.products = state.cart.products.filter(
        (p) => p.id !== product.id
      );

      const userId = state.cart.id;
      const databaseUrl = `https://online-store-70f91-default-rtdb.europe-west1.firebasedatabase.app/carts/${userId}.json`;  

      fetch(databaseUrl, {
        method: 'PUT',
        body: JSON.stringify(state.cart.products),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update cart in the database');
          }
          
        })
        .catch(error => {
          console.error('Error updating cart in the database:', error);
        });
    
    },
    decreaseQuantity(state, product) {
      const existingProduct = state.cart.products.find(
        (p) => p.id === product.id
      );
      if (existingProduct.quantity === 1) {
        state.cart.products = state.cart.products.filter(
          (p) => p.id !== product.id
        );
      } else {
        existingProduct.quantity--;
      }
      const userId = state.cart.id;
    const databaseUrl = `https://online-store-70f91-default-rtdb.europe-west1.firebasedatabase.app/carts/${userId}/products.json`;  

    fetch(databaseUrl, {
      method: 'PUT',
      body: JSON.stringify(state.cart.products),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update cart in the database');
        }
       
      })
      .catch(error => {
        console.error('Error updating cart in the database:', error);
      });
    },
    setCart(state, cartData) {
      state.cart.products = cartData;
    },
  },
  actions: {
    async fetchCartFromFirebase({ commit, state }) {
      const userId = state.cart.id;
      if (userId) {
        const databaseUrl = `https://online-store-70f91-default-rtdb.europe-west1.firebasedatabase.app/carts/${userId}/products.json`;

        try {
          const response = await fetch(databaseUrl);

          if (!response.ok) {
            throw new Error("Failed to fetch cart from Firebase");
          }

          const cartData = await response.json();
          if (cartData) {
            commit("setCart", cartData);

          }
        } catch (error) {
          console.error("Error fetching cart from Firebase:", error);
        }
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
