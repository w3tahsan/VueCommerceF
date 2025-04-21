<template>
    <section class="pt-[80px] pb-[180px]">
        <div class="container">
            <div class="flex justify-between gap-x-10">
                <div class="w-[20%]">
                    <ul class="space-y-3">
                        <li class="text-[16px] text-[#000] font-poppins font-medium leading-6"><a href="">My Account</a></li>
                        <li class="text-[16px] text-[#000] font-poppins font-medium leading-6"><a href="">My Order</a></li>
                        <li class="text-[16px] text-[#000] font-poppins font-medium leading-6"><a href="">My Wishlist</a></li>
                        <li v-if="user" @click="handleLogout"  class="text-[16px] text-[#000] font-poppins font-medium leading-6"><a class="cursor-pointer">Logout</a></li>
                        
                    </ul>
                </div>
                <div class="w-[80%] shadow-profile">
                    <div class="py-10 px-20">
                        <h1 class="pb-4 text-3xl" v-if="user">Welcome, <strong>{{ user.name}}</strong></h1>
                        <h2 class="text-[20px] text-[#DB4444] font-medium leading-7 font-poppins">Edit Your Profile</h2>
                        
                        <form action="" class="pt-4">
                            <div class="flex w-full gap-x-12 pb-6">
                                <div class="flex w-1/2 flex-col space-y-2">
                                    <label for="" class="text-[16px] text-[#000] font-poppins font-normal">First Name</label>
                                    <input type="text" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal">
                                </div>
                                <div class="flex w-1/2 flex-col space-y-2">
                                    <label for="" class="text-[16px] text-[#000] font-poppins font-normal">Last Name</label>
                                    <input type="text" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal">
                                </div>
                            </div>
                            <div class="flex w-full gap-x-12 pb-6">
                                <div class="flex w-1/2 flex-col space-y-2">
                                    <label for="" class="text-[16px] text-[#000] font-poppins font-normal">Email</label>
                                    <input type="text" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal">
                                </div>
                                <div class="flex w-1/2 flex-col space-y-2">
                                    <label for="" class="text-[16px] text-[#000] font-poppins font-normal">Address</label>
                                    <input type="text" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal">
                                </div>
                            </div>
                            <div class="flex w-full gap-x-12 pb-6">
                                <div class="w-full flex flex-col space-y-3">
                                    <label for="" class="text-[16px] text-[#000] font-poppins font-normal">Password Changes</label>
                                    <input type="text" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal" placeholder="Current Passwod">
                                    <input type="text" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal" placeholder="New Passwod">
                                    <input type="text" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal" placeholder="Confirm New Passwod">
                                </div>
                            </div>
                            <div class="flex  justify-end items-center gap-x-10 ">
                                <a href="" class="font-poppins text-[16px] font-normal leading-6">Cancel</a>
                                <a href="" class="px-12 py-4 bg-[#DB4444] text-white font-poppins text-[16px] font-medium leading-6 rounded-[4px]">Save Changes</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> 
    input:focus{
        outline:  none!important;
    }
</style>

<script setup>
import useAuth from '@/composables/useAuth'

const { user, isAuthenticated, handleLogout } = useAuth()
</script>
