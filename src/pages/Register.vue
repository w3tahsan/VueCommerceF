<template>
    <section>
        <div class="container">
            <div class="flex justify-end pt-15 pb-[140px] gap-x-[140px] items-center">
                <div class="w-70%">
                    <img :src="reg" alt="">
                </div>
                <div class="w-[30%]">
                    <h3 class="font-poppins text-[36px] text-[#000000] font-medium leading-7 pb-6">Create an account
                    </h3>
                    <p class="font-poppins text-[16px] text-[#000000] font-normal leading-6">Enter your details below
                    </p>

                    <div class="mt-6 py-4 px-4 bg-green-200 text-green-700" v-if="successMsg">
                        <strong>{{ successMsg }}</strong>
                    </div>

                    <form @submit.prevent="register" class="flex flex-col gap-y-10 pt-12">
                        <div>
                            <input v-model="name" type="text" placeholder="Name"
                                class="border-b border-[rgba(0,0,0,0.41)] w-full pb-2 font-poppins text-[16px] text-[rgba(0,0,0,0.41)] font-normal leading-6 outline-0">
                            <strong class="text-red-500" v-if="errors.name">{{ errors.name[0] }}</strong>
                        </div>
                        <div>
                            <input v-model="email" type="email" placeholder="Email"
                                class="border-b border-[rgba(0,0,0,0.41)] w-full pb-2 font-poppins text-[16px] text-[rgba(0,0,0,0.41)] font-normal leading-6 outline-0">
                            <strong class="text-red-500" v-if="errors.email">{{ errors.email[0] }}</strong>
                        </div>
                        <div>
                            <input v-model="password" type="password" placeholder="Password"
                                class="border-b border-[rgba(0,0,0,0.41)] w-full pb-2 font-poppins text-[16px] text-[rgba(0,0,0,0.41)] font-normal leading-6 outline-0">
                            <strong class="text-red-500" v-if="errors.password">{{ errors.password[0] }}</strong>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <button type="submit"
                                class="bg-[#DB4444] py-4 text-[#fafafa] text-[16px] font-medium font-poppins leading-6 w-full rounded-[4px]">Create
                                Account</button>
                            <button type="submit"
                                class="border-1 border-[rgba(0,0,0,0.4)] py-4 text-[#000000] text-[16px] font-medium font-poppins leading-6 w-full rounded-[4px] flex justify-center space-x-4">
                                <img :src="google" alt=""> <span>Sign up with Google</span>
                            </button>
                        </div>
                        <div class="text-center">
                            <p class="font-poppins text-[16px] text-[rgba(0,0,0,0.7)] font-normal leading-6">Already
                                have account? <router-link to="/login" class="font-semibold">Log in</router-link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import google from '@/assets/images/google.png'
import reg from '@/assets/images/reg-image.png'

import { ref, watch } from 'vue'

import axios from 'axios'

const name = ref('');
const email = ref('');
const password = ref('');
const errors = ref({});
const successMsg = ref('');

const register = () => {
    axios.post('http://127.0.0.1:8000/api/customer/register', {
        name:name.value,
        email:email.value,
        password:password.value,
    })
    .then(response => {
        cleardata()
        successMsg.value = response.data.message
    })
    .catch(error => {
        if (error.response?.data?.errors) {
            errors.value = error.response.data.errors
        }
    })
}

const cleardata = () => {
    name.value =''
    email.value =''
    password.value =''
}

watch(name, () => {
    if(errors.value.name) delete errors.value.name
})
watch(email, () => {
    if (errors.value.email) delete errors.value.email
})
watch(password, () => {
    if (errors.value.password) delete errors.value.password
})


    
</script> 
