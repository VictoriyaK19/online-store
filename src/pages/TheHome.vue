<template>
  <div class="background">
    <section class="header">
      <span>Smart</span>
      <span>Tech,</span>
      <span>Pure</span>
      <span>Delight</span>
    </section>
    <section class="text">
      <p>
        At our online store, satisfaction isn't just a goal; it's a standard.
        Smart Tech, Pure Delight – because your journey into the future of
        technology should be nothing short of extraordinary. Welcome to a
        smarter, more delightful world of tech.
      </p>
      <section class="buttons">
        <button class="button1" @click="orderNow">Order Now</button>
        <button class="button2" @click="learnMore">Learn More</button>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    orderNow() {
      this.$router.push("/store");
    },
    learnMore() {
      this.$router.push("/aboutus");
    },
  },
};
</script>

<style scoped>
div {
  position: relative;
  overflow: hidden;
  background: url("../../src/assets/Untitled_design-removebg-preview.png")
    no-repeat;
  background-size: 55%;
  min-height: 100vh;
  display: flex;
}

section.header {
  flex: 1;
  padding-left: 6vw;
  padding-top: 3vw;
  font-size: 6vw;
  line-height: 5vw;
  color: #004aad;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 800;
}

section.header span {
  display: block;
}

section.text {
  width: 40vw;
  padding: 3vw;
  text-align: right;
}

section.text p {
  font-size: 1.5vw;
  color: #6c2eb7;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 500;
  padding-top: 6vw;
  padding-right: 6vw;
}

.buttons {
  margin-top: 2vw;
  display: flex;
  justify-content: flex-end;
  margin-right: 4vw;
  z-index: 1;
}

button {
  font-size: 1.5vw;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  border: 2px solid #6c2eb7;
  border-radius: 30px;
  padding: 0.8vw 2vw;
}

button.button1 {
  background-color: #6c2eb7;
}
button.button1 {
  text-decoration: none;
  color: white;
}
button.button2 {
  margin-left: 1vw;
  background-color: #fff;
}
button.button2 {
  text-decoration: none;
  color: #6c2eb7;
}

button.button1:hover {
  background-color: #935dd5;
  border: 2px solid #935dd5;
}

button.button2:hover {
  background-color: #935dd5;
  border: 2px solid #935dd5;
  color: white;
}

@media screen and (max-width: 722px) {
  div {
    background-size: 100%;
    flex-flow: column wrap;
  }

  section.header {
    flex: 1;
    padding-left: 12vw;
    padding-top: 8vw;
    font-size: 8vw;
    line-height: 7vw;
  }

  section.text {
    margin-top: 30vw;
    padding: 7vw;
    flex: 2;
    width: 100%;
    text-align: center;
  }

  section.text p {
    font-size: 4vw;
    padding-top: 0;
    padding-right: 0;
  }

  .buttons {
    margin-top: 1.5rem;
    margin-right: 0;
    justify-content: center;
  }

  button {
    font-size: 4vw;
    padding: 2vw 4vw;
  }
}
</style>
