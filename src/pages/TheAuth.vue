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
    "the-login": TheLogin,
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
    switchAuthForm() {
      this.mode = this.mode === "login" ? "signup" : "login";
    },
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

.button-container {
  display: flex;
  justify-content: center; /* Center the button horizontally */
}

.google-signin-button {
  background-color: #ffffff;
  color: #3e82fc;
  border: 1px solid #3e82fc;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
}

.google-signin-button:hover {
  background-color: #f0f7ff;
}

.google-icon-container {
  margin-left: 10px; 
}

.google-icon {
  width: 20px;
  height: 20px;
}
</style>
