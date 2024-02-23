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
            <p>{{ errMsg }}</p>
        </div>
        <div class="form-control">
          <button class="submit-button" @click="register">Submit</button>
        </div>
        <div class="form-control">
        <button @click="signInWithGoogle">Sign In With Google</button>
      </div>
      </div>
    </form>

</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";


const email = ref("");
const password = ref("");
const errMsg = ref()
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
      alert(error.message);
    });
};

const signInWithGoogle = () => {};
</script>
