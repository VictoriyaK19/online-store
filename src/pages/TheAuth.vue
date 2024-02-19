<template>
  <div class="container">
    <form @submit.prevent="submitForm" class="form">
      <div v-if="mode === 'login'">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input
            type="email"
            id="email"
            v-model.trim="email"
            @focus="clearValidation"
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model.trim="password"
            @focus="clearValidation"
          />
        </div>
      </div>
      <!-- Fields for signup -->
      <div v-if="mode === 'signup'">
        <div class="form-control">
          <label for="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            v-model.trim="firstName"
            @focus="clearValidation"
          />
        </div>
        <div class="form-control">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            v-model.trim="lastName"
            @focus="clearValidation"
          />
        </div>
        
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input
            type="email"
            id="email"
            v-model.trim="email"
            @focus="clearValidation"
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model.trim="password"
            @focus="clearValidation"
          />
        </div>
        <div class="form-control">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model.trim="confirmPassword"
            @focus="clearValidation"
          />
        </div>
      </div>

      <!-- Error message -->
      <p v-if="!formIsValid" class="error-message">
        Please enter valid information (email, password, first name, last name,
        and confirmation password must be provided, and password must be at
        least 6 characters long).
      </p>
      <button class="submit-button">{{ submitButtonCaption }}</button>
    </form>
    <button type="button" class="switch-mode-button" @click="switchAuthForm">
      {{ switchModeButtonCaption }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "", // New field
      firstName: "", // New field
      lastName: "", // New field
      formIsValid: true,
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
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6 ||
        (this.mode === "signup" &&
          (this.firstName === "" ||
            this.lastName === "" ||
            this.confirmPassword === "" ||
            this.password !== this.confirmPassword))
      ) {
        this.formIsValid = false;
        return;
      }
      // send http request...
    },
    switchAuthForm() {
      this.mode = this.mode === "login" ? "signup" : "login";
    },
    clearValidation() {
      this.formIsValid = true;
    },
  },
};
</script>

<style scoped>
.container {
  height: 70vh;
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

.switch-mode-button {
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.switch-mode-button:hover {
  color: #fff;
}
</style>
