<template>
  <div class="background">
    <div class="store">
      <div class="product" v-for="(product, index) in products" :key="index">
        <img src="required(@/assets/${product.image})" :alt="product.name" />
        <p>{{ products.productName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "@/store/store";

export default {
  data() {
    return {
      products: products,
    };
  },
};
</script>


<style>
.store {
  display: flex;
  flex-wrap: wrap;
}

.product {
  flex: 1 1 200px; /* Flexbox shorthand */
  margin: 10px;
  text-align: center;
}

.product img {
  max-width: 100%;
  height: auto;
}
</style>