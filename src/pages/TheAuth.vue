<template>
  <div class="container">
  <the-registration v-if="mode === 'signup'"></the-registration>
  <the-login v-else></the-login>
  <div class="button-container">
  <button type="button" class="switch-mode-button" @click="switchAuthForm">
    {{ switchModeButtonCaption }}
  </button>
</div>
</div>
</template>

<script>
import TheRegistration from "@/components/auth/TheRegistration";
import TheLogin from "@/components/auth/TheLogin";

export default {
  components: {
    "the-registration": TheRegistration,
    "the-login":  TheLogin
  },
  data() {
    return {
      mode: "login",
    };
  },
  computed: {
    submitButtonCaption() {
      return this.mode === "login" ? "Login" : "Signup";
    },
    switchModeButtonCaption() {
      return this.mode === "login" ? "Signup instead" : "Login instead";
    },
  },
  methods: {
    //     submitForm() {
    //       this.formIsValid = true;
    //       if (
    //         this.email === "" ||
    //         !this.email.includes("@") ||
    //         this.password.length < 6 ||
    //         (this.mode === "signup" &&
    //           (this.firstName === "" ||
    //             this.lastName === "" ||
    //             this.confirmPassword === "" ||
    //             this.password !== this.confirmPassword))
    //       ) {
    //         this.formIsValid = false;
    //         return;
    //       }
    //       // send http request...
    //     },
    switchAuthForm() {
      this.mode = this.mode === "login" ? "signup" : "login";
    },
    //     clearValidation() {
    //       this.formIsValid = true;
    //     },
  },
};
</script>

<style>
.container {
  margin-top: 1rem;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin-bottom: 20px;
}

.form-control {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

.error-message {
  color: #dc3545;
}

.submit-button {
  background-color: #146ce0e4;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0062ca;
}
.button-container {
  text-align: center;
}
.switch-mode-button {
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  display: inline-block;
}

.switch-mode-button:hover {
  color: #fff;
}
</style>
