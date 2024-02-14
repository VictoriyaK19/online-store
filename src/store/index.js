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
});

export default store;
