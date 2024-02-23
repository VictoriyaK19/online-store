<template>
  <div class="container">
    <form @submit.prevent="submitForm" class="form">
      <div class="form-control">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model.trim="firstName" />
      </div>
      <div class="form-control">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model.trim="lastName" />
      </div>

      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <div class="form-control">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          v-model.trim="confirmPassword"
        />
      </div>
      <div class="form-control">
        <button class="submit-button" @click="register">Submit</button>
      </div>

      <div class="form-control">
        <button @click="signInWithGoogle">Sign In With Google</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

const register = () => {
  if (password.value !== confirmPassword.value) {
    alert("Password and confirmation password do not match.");
    return;
  }

  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully registered!");
      router.push("/store");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {};
</script>
