<template>
  <header>
    <nav>
      <router-link to="/"><h1>Brand name</h1></router-link>
      <ul>
        <li><router-link to="/store">Store</router-link></li>
        <li><router-link to="/aboutus">About us</router-link></li>
        <li><router-link to="/faq">FAQ</router-link></li>
      </ul>
      <ul>
        <li>
          <router-link to="/"> <font-awesome-icon icon="cart-shopping" /></router-link>
        </li>
        <li>
          <router-link to="/"> <font-awesome-icon icon="user" /></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 1rem 1.5rem;
  border: 1px solid transparent;
}

ul a:active,
ul a:hover,
ul a.router-link-active {
  border: 1px solid #e0e0e0;
  border-radius: 30px;
}

h1 {
  margin: 0;
  color: white;
}

/* h1 a {
  color: white;
  margin: 0;
} */

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
