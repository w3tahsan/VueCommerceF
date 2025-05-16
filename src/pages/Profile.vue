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
                        <form @submit.prevent="update" class="pt-4">
                            <div class="flex w-full gap-x-12 pb-6">
                                <div class="flex w-1/2 flex-col space-y-2">
                                    <label for="" class="text-[16px] text-[#000] font-poppins font-normal">First Name</label>
                                    <input v-model="name" type="text" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal">
                                    <strong class="text-red-500" v-if="errors.name">{{ errors.name[0] }}</strong>
                                </div>
                                <div class="flex w-1/2 flex-col space-y-2">
                                    <label for="" class="text-[16px] text-[#000] font-poppins font-normal">Email</label>
                                    <input v-model="email" type="email" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal">
                                     <strong class="text-red-500" v-if="errors.email">{{ errors.email[0] }}</strong>
                                </div>
                            </div>
                            <div class="flex w-full gap-x-12 pb-6">
                                <div class="flex w-full flex-col space-y-2">
                                    <label for="" class="text-[16px] text-[#000] font-poppins font-normal">Address</label>
                                    <input v-model="address" type="text" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal">
                                    <strong class="text-red-500" v-if="errors.address">{{ errors.address[0] }}</strong>
                                </div>
                            </div>
                            <div class="flex w-full gap-x-12 pb-6">
                                <div class="w-full flex flex-col space-y-3">
                                    <label for="" class="text-[16px] text-[#000] font-poppins font-normal">Password Changes</label>
                                    <input v-model="current_password" type="password" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal" placeholder="Current Passwod">
                                    <strong class="text-red-500" v-if="wrongPass">{{ wrongPass }}</strong>
                                    <strong class="text-red-500" v-if="errors.current_password">{{ errors.current_password[0] }}</strong>
                                    <input v-model="password" type="password" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal" placeholder="New Passwod">
                                    <strong class="text-red-500" v-if="errors.password">{{ errors.password[0] }}</strong>
                                    <input v-model="password_confirmation" type="password" class="py-3 px-4 bg-[#F5F5F5] w-full rounded-[4px] text-[16px] text-[rgba(0,0,0,0.5)] font-poppins font-normal" placeholder="Confirm New Passwod">
                                    <strong class="text-red-500" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</strong>
                                </div>
                            </div>
                            <div class="flex  justify-end items-center gap-x-10 ">
                                <a href="" class="font-poppins text-[16px] font-normal leading-6">Cancel</a>
                                <button type="submit" class="px-12 py-4 bg-[#DB4444] text-white font-poppins text-[16px] font-medium leading-6 rounded-[4px]">Save Changes</button>
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
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import Swal from 'sweetalert2'

const { user, isAuthenticated, handleLogout } = useAuth()

const name = ref('')
const email = ref('')
const current_password = ref('')
const password = ref('')
const password_confirmation = ref('')
const address = ref('')
const errors = ref({})
const wrongPass = ref('')
const successMsg = ref('')

watchEffect(() => {
    if (user.value) {
        name.value = user.value.name || ''
        email.value = user.value.email || ''
        address.value = user.value.address || ''
    }
})

const update = () => {
    axios.post(`http://127.0.0.1:8000/api/customer/update/${user.value.id}`, {
        name:name.value,
        email:email.value,
        address:address.value,
        current_password:current_password.value,
        password:password.value,
        password_confirmation:password_confirmation.value,
    })
    .then(response => {
        if (response.data.passErr) {
            wrongPass.value = response.data.passErr
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'Profile Updated!',
                text: 'Your profile has been successfully updated.',
                timer: 2000,
                showConfirmButton: false
            });
            user.value.name = name.value;
            user.value.email = email.value;
            user.value.address = address.value;
        }
    })
    .catch(error => {
        if (error.response?.data?.errors) {
            errors.value = error.response.data.errors
        }
    })
}

</script>
