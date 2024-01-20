<template>
  <header>
    <nav>
      <div :class="!isResponsive ? 'topnav' : 'topnav responsive'">
        <div class="left">
          <router-link to="/"><h1>Brand name</h1></router-link>
        </div>
        <div class="center">
          <router-link to="/store">Store</router-link>
          <router-link to="/aboutus">About<span>&nbsp;</span>us</router-link>
          <router-link to="/faq">FAQ</router-link>
        </div>
        <div class="right">
          <router-link to="/mycart">
            <font-awesome-icon icon="cart-shopping" />
          </router-link>
          <router-link to="/myprofile">
            <font-awesome-icon icon="user" />
          </router-link>
        </div>
        <div :class="!isResponsive ? 'list' : 'list topnav responsive'">
          <router-link to="/store">Store</router-link>
          <router-link to="/aboutus">About us</router-link>
          <router-link to="/faq">FAQ</router-link>
          <router-link to="/mycart">My Cart</router-link>
          <router-link to="/my profile">My profile</router-link>
        </div>
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
header nav {
  margin: auto;
  width: 90%;
  align-items: center;
}
header div {
  list-style: none;
  margin: 0.5rem 0 0 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  margin: 0;
  color: white;
  text-align: left;
}
header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
.topnav .bars {
  display: none;
  justify-content: space-between;
}
.list a {
  display: none;
}

.left,
.center,
.right {
  display: flex;
  align-items: center;
}

.left {
  width: 30%;
  flex-grow: 1; /* Takes up remaining space */
  justify-content: flex-start;
}

.center {
  width: 33%;
  flex-grow: 2; /* Takes up twice as much space as the others */
  justify-content: center;
}

.right {
  width: 33%;
  flex-grow: 1; /* Takes up remaining space */
  justify-content: flex-end; /* Align items to the right */
}

@media screen and (max-width: 722px) {
  .topnav div:not(:first-child) {
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
@media screen and (max-width: 722px) {

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
