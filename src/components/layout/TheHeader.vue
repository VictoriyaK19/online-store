<template>
  <header>
    <nav>
      <div :class="!isResponsive ? 'topnav' : 'topnav responsive'">
        <router-link to="/"><h1>Brand name</h1></router-link>

        <router-link to="/store">Store</router-link>
        <router-link to="/aboutus">About us</router-link>
        <router-link to="/faq">FAQ</router-link>

        <router-link to="/mycart">
          <font-awesome-icon icon="cart-shopping"
        /></router-link>

        <router-link to="/myprofile">
          <font-awesome-icon icon="user"
        /></router-link>

        <font-awesome-icon class="bars" icon="bars" @click="changeStyle" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isResponsive: false,
    };
  },
  methods: {
    changeStyle() {
      this.isResponsive = !this.isResponsive;
    },
  },
};
</script>

<style scoped>
h2,
p {
  color: white;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
header nav {
  width: 90%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
}
.topnav {
  overflow: hidden;
}

.topnav a {
  margin: 0 ;
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 1rem 1.5rem;
  border: 1px solid transparent;

}

.topnav a:hover {
  font-weight: bold;
}

.topnav .bars {
  display: none;
}

h1 {
  margin: 0;
  color: white;
}

/* 





 h1 a {
  color: white;
  margin: 0;
} 

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
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
} */

@media screen and (max-width: 667px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav .bars {
    float: right;
    display: block;
    text-decoration: none;
    color: #ffffff;
    padding: 1.5rem 1.5rem;
  }
}

@media screen and (max-width: 667px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .bars {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
