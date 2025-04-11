<template>
    <section>
        <div class="container">
            <div class="flex justify-end pt-15 pb-[140px] gap-x-[140px] items-center">
                <div class="w-70%">
                    <img :src="reg" alt="">
                </div>
                <div class="w-[30%]">
                    <h3 class="font-poppins text-[36px] text-[#000000] font-medium leading-7 pb-6">Log in to Exclusive
                    </h3>
                    <p class="font-poppins text-[16px] text-[#000000] font-normal leading-6">Enter your details below
                    </p>

                    <form @submit.prevent="login" class="flex flex-col gap-y-10 pt-12">

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
                        <div class="flex items-center justify-between">
                            <button type="submit" class="bg-[#DB4444] py-4 px-12 text-[#fafafa] text-[16px] font-medium font-poppins leading-6 rounded-[4px]">Login</button>
                            <a class="font-poppins text-[16px] text-[#DB4444] font-normal leading-6">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import reg from '@/assets/images/reg-image.png'

import { ref, watch } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import store from '@/store'

const router = useRouter()

const email = ref('')
const password = ref('')
const errors = ref({});

const login = () => {
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('http://127.0.0.1:8000/api/customer/login', {
            email: email.value,
            password: password.value,
        })
        .then(response => {
            const status = true;
            const token = response.data.token;
            store.dispatch('SetAuthStatus', status)  
            store.dispatch('SetCustomerToken', token)  
            router.push({name: 'profile'})
        })
        .catch(error => {
            if (error.response?.data?.errors) {
                errors.value = error.response.data.errors
            }
        })
    });
    
}

watch(email, () => {
    if (errors.value.email) delete errors.value.email
})
watch(password, () => {
    if (errors.value.password) delete errors.value.password
})

    
</script> 
