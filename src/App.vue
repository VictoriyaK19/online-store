<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    "the-header": TheHeader,
    "the-footer": TheFooter,
  },
  beforeMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit("setUser", user.uid);
        this.$store.dispatch("fetchCartFromFirebase");
      } else {
        this.$store.commit("clearCart");
      }
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  background: linear-gradient(0.25turn, #004aad, #cb6ce6) fixed;
  overflow-x: hidden; 
}

div.background {
  position: relative;
  overflow: hidden;
  background-color: white;
  border-radius: 25px;
  margin: 20px; 
  box-sizing: border-box;
  width: calc(100% - 40px); 
  min-height: 80vh;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
