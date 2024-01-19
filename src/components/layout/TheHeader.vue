<template>
  <header>
    <nav>
      
      <div :class="!isResponsive ? 'topnav' : 'topnav responsive'">
        <router-link to="/" class="left">Brand name</router-link>
        <router-link to="/store" class="center">Store</router-link>
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
}
.topnav {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topnav a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;

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

.left {
  margin-right: auto;
  font-size: 25px;
  font-weight: bold;
}

.center {
  margin: 0 3rem;
}
.center2 {
  margin: 0 29vw 0 3rem ;
}
.right {
  margin-left: 2rem;
}


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
