import { defineStore } from "pinia";
import { ref } from "vue";
import { cart } from "./cart";
import { products } from "./products";
import { order } from "./order";


const home = defineStore('Home',()=>{
    const totalProduct = ref(null);
    const totalCart    = ref(null);
    const totalOrders  = ref(null);

    const cartStore = cart();
    const productStore = products();
    const orderStore = order();

    
    totalCart.value = cartStore.totalCartItem;
    totalProduct.value = productStore.products.length;
    totalOrders.value = orderStore.getOrders.length;

    console.log(totalProduct.value)

    return {totalCart, totalOrders, totalProduct}
})

export {home}