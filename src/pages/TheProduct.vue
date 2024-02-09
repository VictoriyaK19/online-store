<template>
    <div v-if="product">
        <div class="img-wrap">
        <img :src="require(`@/assets/products/${product.image}`)" :alt="product.name">
    </div>
    <div class="product-details">
        <h1>{{ product.name }}</h1>
        <h3 class="price">{{ product.price }}</h3>
        <button class="add-to-cart">Add to cart</button>
    </div>
    </div>
    <div v-else>
        <not-found></not-found>
    </div>

</template>

<script>
import { products } from "../temp-data";
import NotFound from "./NotFound.vue";

export default {
    data () {
        return {
            product: products.find(product => product.id === this.$route.params.productId)
        }
    },
    components: {
        "not-found": NotFound
    }
}
</script>