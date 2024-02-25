<template>
  <div v-if="isLoggedIn" class="background my-profile ">
    <h2>My Profile</h2>
    <div class="profile-info">
      <div class="details">
        <p><strong>Name:</strong> {{ user.firstName }} {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
    </div>
    <div class="orders">
      <h3>My Orders</h3>
      <ul>
        <li v-for="order in orders" :key="order.id">
          <p><strong>Order ID:</strong> {{ order.id }}</p>
          <p><strong>Date:</strong> {{ order.date }}</p>
          <p><strong>Total:</strong> ${{ order.total }}</p>
        </li>
      </ul>
    </div>
    <div>
      <button @click="handleLogOut">Logout</button>
    </div>
  </div>
  <the-auth v-else></the-auth>
</template>

<script setup>
import TheAuth from "../TheAuth.vue";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

    const router = useRouter();

    const user = ref({
      firstName: "",
      lastName: "",
      email: "",
    });

    const orders = [
      {
        id: 1,
        date: "2024-02-18",
        total: 50.0,
      },
      {
        id: 2,
        date: "2024-02-16",
        total: 75.0,
      },
    ];

    const isLoggedIn = ref(false);

    let auth;
    onMounted(() => {
       auth = getAuth();
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          user.value.firstName = firebaseUser.displayName;
          user.value.email = firebaseUser.email;
          isLoggedIn.value = true;
        } else {
          isLoggedIn.value = false;
          console.log("User is signed out");
        }
      });
    });

    const handleLogOut = async () => {
  try {
    await signOut(auth);
    router.push("/");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
    };




</script>

<style scoped>
.my-profile {
  max-width: 800px;
  padding: 20px;
  margin: 1rem auto;
}

.details p {
  margin: 5px 0;
}

.orders {
  margin-top: 20px;
}

.orders li {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.orders li:last-child {
  border-bottom: none;
}
.my-profile button {
  background-color: #de4050; 
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.my-profile button:hover {
  background-color: #c82333; 
}
</style>
