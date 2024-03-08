import { createStore } from "vuex";

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
      console.log(userId);
      if (userId) {
        state.cart.id = userId;
      }
    },
    addToCart(state, product) {
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
      console.log(userId);
      fetch(databaseUrl, {
        method: "PUT",
        body: JSON.stringify(state.cart.products),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update cart in the database");
          }
          console.log("Cart updated in the database successfully");
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
      const databaseUrl = `https://online-store-70f91-default-rtdb.europe-west1.firebasedatabase.app/carts/${userId}/products.json`;  

      fetch(databaseUrl, {
        method: 'PUT',
        body: JSON.stringify(state.cart.products),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update cart in the database');
          }
          console.log('Cart updated in the database successfully');
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
    },
    setCart(state, cartData) {
      state.cart = cartData;
    },
  },
  actions: {
    async fetchCartFromFirebase({ commit, state }) {
      const userId = state.user ? state.user.uid : null;
      if (userId) {
        const databaseUrl = `https://online-store-70f91-default-rtdb.europe-west1.firebasedatabase.app/carts/${userId}.json`;

        try {
          const response = await fetch(databaseUrl);

          if (!response.ok) {
            throw new Error("Failed to fetch cart from Firebase");
          }

          const cartData = await response.json();
          if (cartData) {
            commit("setCart", cartData);
            console.log("successfully");
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
