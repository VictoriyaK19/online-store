<template>
  <form @submit.prevent="submitForm" class="form">
    <div>
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <div v-if="errMsg" class="form-control">
        <p class="error-message">{{ errMsg }}</p>
      </div>
      <div class="form-control">
        <button class="submit-button" @click="register">Submit</button>
      </div>
      <div class="button-container">
        <button @click="signInWithGoogle" class="google-signin-button">
          <span class="button-text">Sign In With Google</span>
          <div class="google-icon-container">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Logo"
              class="google-icon"
            />
          </div>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log("Successfully signed in!");
      router.push("/store");
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Wrong password.";
          break;
        default:
          errMsg.value = "Invalid credentials!";
          break;
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/store");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
