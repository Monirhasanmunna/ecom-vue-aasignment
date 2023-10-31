<script setup>
    import {onBeforeMount} from 'vue'
    import { Icon } from '@iconify/vue';
    import {userAuth} from '../store/auth';
    import { home } from '../store/home';
    import { products } from '../store/products';
    import { order } from '../store/order';

    const auth = userAuth();
    const homeStore = home();
    const productStore = products();
    const orderStore = order();
    
    onBeforeMount(()=>{
        productStore.getProducts();
        orderStore.GetOrderList()
    })
    
</script>

<template>
    <div class="bg-white ">
        <div class=" ">
            <div class="lg:stats shadow-lg shadow-indigo-200">
                <div class="stat">
                    <div class="stat-figure text-primary">
                        <Icon  class="inline-block w-14 h-14 stroke-current mt-2" icon="ri:product-hunt-line" />
                    </div>
                    <div class="stat-title">Total Products</div>
                    <div class="stat-value text-primary">{{ homeStore.totalProduct }}</div>
                </div>
                
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <Icon  class="inline-block w-14 h-14 stroke-current mt-2"  icon="ri:product-hunt-line" />
                    </div>
                    <div class="stat-title">Total Cart</div>
                    <div class="stat-value text-secondary">{{ homeStore.totalCart }}</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <Icon  class="inline-block w-14 h-14 stroke-current mt-2"  icon="ri:product-hunt-line" />
                    </div>
                    <div class="stat-title">Total Order</div>
                    <div class="stat-value text-secondary">{{ homeStore.totalCart }}</div>
                </div>
            </div>
        </div>
    </div>
</template>