<template>
    <section class="pt-[120px] pb-[100px]">
        <div class="container">
            <div class="flex shadow-cart px-10 py-6 mb-10 items-center">
                <div class="w-[30%]">
                    <span class="text-[#000] text-[16px] font-poppins font-normal leading-6">Product</span>
                </div>
                <div class="w-[30%]">
                    <span class="text-[#000] text-[16px] font-poppins font-normal leading-6">Price</span>
                </div>
                <div class="w-[20%]">
                    <span class="text-[#000] text-[16px] font-poppins font-normal leading-6">Quantity</span>
                </div>
                <div class="w-[20%] text-right">
                    <span class="text-[#000] text-[16px] font-poppins font-normal leading-6">Subtotal</span>
                </div>
            </div>
            <div v-for="(cart, index) in carts" :key="cart.id" class="flex shadow-cart px-10 py-6 mb-10 items-center">
                <div class="w-[30%]">
                    <img src="" alt="">
                    <span class="text-[#000] text-[16px] font-poppins font-normal leading-6">{{ cart.name }}</span>
                </div>
                <div class="w-[30%]">
                    <span class="text-[#000] text-[16px] font-poppins font-normal leading-6">${{ cart.price }}</span>
                </div>
                <div class="w-[20%]">
                    <div class="flex justify-between items-center w-[72px] border-1 border-[rgba(0,0,0,0.39)] rounded-[4px] py-[6px] px-3">
                        <p class="text-[16px] text-[#000] font-poppins font-normal leading-6">
                            <input type="text" :value="cart.quantity" class="text-[16px] text-[#000] font-poppins font-normal leading-6 w-full outline-0">
                        </p>
                        <p>
                            <i class="fa fa-chevron-up" @click="increment(index)"></i>
                            <i class="fa fa-chevron-down" @click="decrement(index)"></i>
                        </p>
                    </div>
                </div>
                <div class="w-[20%] text-right">
                    <span class="text-[#000] text-[16px] font-poppins font-normal leading-6">${{ cart.price * cart.quantity }}</span>
                </div>
            </div>
            <div class="flex justify-between">
                <a href="" class="border-1 border-[rgba(0,0,0,0.5)] py-4 px-12 rounded-[4px] font-poppins font-medium text-[16px] leading-6">Return to Shop</a>
                <button type="submit" class="border-1 border-[rgba(0,0,0,0.5)] py-4 px-12 rounded-[4px] font-poppins font-medium text-[16px] leading-6">Update Cart</button>
            </div>
           <div class="flex justify-end pt-[130px]">
             <div class="w-[40%] border-1 border-[#000] rounded-[4px] py-8 px-6">
                 <h3 class="text-[20px] text-[#000] font-poppins font-medium leading-7 pb-6">Cart Total</h3>

                 <div class="flex justify-between border-b border-[#000] pb-4 mb-4">
                    <span>Subtotal</span>
                    <span>${{ subtotal }}</span>
                 </div>
                 <div class="flex justify-between border-b border-[#000] pb-4 mb-4">
                    <span>Shipping</span>
                    <span>Free</span>
                 </div>
                 <div class="flex justify-between mb-4">
                    <span>Total</span>
                    <span>${{ subtotal }}</span>
                 </div>
                 <div class="text-center">
                    <router-link to="/checkout" class="bg-[#DB4444] text-[#fff] py-4 px-12 rounded-[4px] font-poppins font-medium text-[16px] leading-6">Procees to checkout</router-link>
                 </div>
            </div>
           </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
const carts = ref([
    {
        id:1,
        name: 'LCD Monitor',
        price: 650,
        image: 'https://placehold.co/50',
        quantity:1,
    },
    {
        id:2,
        name: 'H1 Gamepad',
        price: 550,
        image: 'https://placehold.co/50',
        quantity:2,
    },
])

const increment = (index) => {
    carts.value[index].quantity++
}
const decrement = (index) => {
    if (carts.value[index].quantity > 1) {
        carts.value[index].quantity--
    }
}

const subtotal = computed(()=>
    carts.value.reduce((acc, cart) => acc + cart.price * cart.quantity, 0)
);


</script>
