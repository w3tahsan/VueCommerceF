<template>
    <header class="bg-[#000000] py-3">
        <div class="container">
            <div class="flex">
                <div class="w-[70%] text-right">
                    <p class="text-[14px] font-poppins text-[#FAFAFA] leading-5 font-normal">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="" class="font-semibold ms-2">ShopNow</a></p>
                </div>
                <div class="w-[30%] text-right">
                    <select name="" id="" class="text-[14px] font-poppins text-[#fff] leading-5 font-normal focus:outline-none">
                        <option class="text-[#000]" value="" selected>English</option>
                        <option class="text-[#000]" value="">Bangla</option>
                    </select>
                </div>
            </div>
        </div>
    </header>

    <nav class="mt-10 pb-4 border-b border-[rgba(0,0,0,0.3)]">
        <div class="container">
            <div class="flex items-center">
                <div class="w-[20%]">
                    <img :src="logo" alt="">
                </div>
                <div class="w-[40%]">
                    <ul class="flex justify-center">
                        <li class="text-[16px] mr-12 text-[#000000] font-poppins font-normal leading-6"><router-link to="/">Home</router-link></li>
                        <li class="text-[16px] mr-12 text-[#000000] font-poppins font-normal leading-6"><a href="">Contact</a></li>
                        <li class="text-[16px] mr-12 text-[#000000] font-poppins font-normal leading-6"><a href="">About</a></li>
                        <li class="text-[16px] mr-12 text-[#000000] font-poppins font-normal leading-6"><a href="">Sign Up </a></li>
                    </ul>
                </div>
                <div :class="['w-[25%]',{ 'ml-auto': ['login', 'register'].includes($route.name) }]">
                    <div class="bg-[#F5F5F5] relative">
                        <input type="text" placeholder="What are you looking for?" class="py-[10px] ps-5 pe-3 w-full">
                        <button type="submit" class="absolute top-[50%] right-3 -translate-[50%]"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                
                <div class="w-[15%] text-right space-x-4" v-if="!['login', 'register'].includes($route.name)">
                    <router-link to="/wishlist"><i class="fa-regular fa-heart text-[18px] hover:text-white w-[32px] h-[32px] hover:bg-[#DB4444] rounded-full text-center !leading-[32px]"></i></router-link>
                    <router-link to="/cart" class="relative"><i class="fa-solid fa-cart-plus text-[18px] hover:text-white w-[32px] h-[32px] hover:bg-[#DB4444] rounded-full text-center !leading-[32px]"></i>
                        <i class="w-[17px] h-[17px] bg-[#DB4444] rounded-full absolute top-[-10px] right-[-5px] text-center !leading-[17px] text-[#fff] text-[12px] font-poppins">2</i>
                    </router-link>
                    <router-link to="/profile"><i class="fa-regular fa-user text-[18px] hover:text-white w-[32px] h-[32px] hover:bg-[#DB4444] rounded-full text-center !leading-[32px]"></i></router-link>
                    <i @click="handleLogout" v-if="user" title="logout" class="fa-solid fa-right-from-bracket"></i>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
import useAuth from '@/composables/useAuth'
import { watch } from 'vue'
const { user, isAuthenticated, handleLogout } = useAuth()
import { useStore } from 'vuex'
const store = useStore()

watch(user, (newUser) => {
  if (newUser) {
    store.dispatch('getCarts', newUser.id)
  }
}) 

const carts = store.state.carts

</script>