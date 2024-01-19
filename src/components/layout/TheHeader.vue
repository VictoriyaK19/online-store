<template>
  <header>
    <nav>
      
      <div :class="!isResponsive ? 'topnav' : 'topnav responsive'">
        <router-link to="/" class="left">Brand name</router-link>
        <router-link to="/store" class="center1">Store</router-link>
        <router-link to="/aboutus" class="center">About us</router-link>
        <router-link to="/faq" class="center2">FAQ</router-link>
        <router-link to="/mycart" class="right">
          <font-awesome-icon icon="cart-shopping" />
        </router-link>
        <router-link to="/myprofile" class="right">
          <font-awesome-icon icon="user" />
        </router-link>
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
h1 {
  margin: 0;
  color: white;
}

h2,
p {
  color: white;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

header nav {
  padding-top: 1rem;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topnav {
  overflow: hidden;
}

.topnav a {
  margin: 0;
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

.topnav router-link {
  text-decoration: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 1rem;
}

.topnav .left {
  margin-right: auto;
  font-size: 25px;
  font-weight: bold;
}
.topnav .center1 {
  margin: 0 0vw 0 17vw;

}
.topnav .center {
  margin: 0 3vw;
}

.topnav .center2 {
  margin: 0 20vw 0 0;
}

.topnav .right {
  margin-left: 2vw;
}

@media screen and (max-width: 667px) {
  .topnav a:not(:first-child) {
    display: none;
  }

  .topnav .bars {
    display: block;
    text-decoration: none;
    color: #ffffff;
    padding: 1.5rem 1.5rem;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .topnav.responsive .bars {
    display: block;
    text-decoration: none;
    color: #ffffff;
    padding: 1.5rem 1.5rem;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav .center1,
  .topnav .center,
  .topnav .center2,
  .topnav .right   {
  margin: 0;
}
}


</style>
