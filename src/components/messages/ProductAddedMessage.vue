<template>
  <div class="added-to-cart">
    <img :src="require(`@/assets/products/${product.image}`)" :alt="product.name"/>
    <p>{{ product.name }} has been added to your cart!</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
.added-to-cart {
  position: fixed;
  bottom: 20px; 
  right: 20px; 
  background-color: white;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex; 
  align-items: center;
}
.added-to-cart img {
  width: 50px;
  height: 50px;
  margin-right: 10px; 
}
.added-to-cart p {
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 600px) {

  .added-to-cart img {
    width: 3rem;
    height: 3rem; 
  }

  .added-to-cart p {
    font-size: 12px; 
  }
}
</style>