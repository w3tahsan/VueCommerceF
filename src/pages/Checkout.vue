<template>
    <section class="py-[180px]">
        <div class="container">
            <div class="flex gap-x-[170px] justify-between">
                <div class="w-[40%]">
                    <h3 class="text-[36px] text-[#000] font-poppins leading-7 font-medium">Billing Details</h3>
                    <div class="pt-12">
                        <form action="">
                            <div class="field mb-8">
                                <p class="pb-2">Full name<sup class="text-[rgba(219,68,68,0.4)]">*</sup></p>
                                <input type="text" class="bg-[#F5F5F5] py-4 w-full px-4 rounded-[4px]">
                            </div>
                            <div class="field mb-8">
                                <p class="pb-2">Company Name</p>
                                <input type="text" class="bg-[#F5F5F5] py-4 w-full px-4 rounded-[4px]">
                            </div>
                            <div class="field mb-8">
                                <p class="pb-2">Street Address<sup class="text-[#DB4444]">*</sup></p>
                                <input type="text" class="bg-[#F5F5F5] py-4 w-full px-4 rounded-[4px]">
                            </div>
                            <div class="field mb-8">
                                <p class="pb-2">Apartment, floor, etc. (optional)</p>
                                <input type="text" class="bg-[#F5F5F5] py-4 w-full px-4 rounded-[4px]">
                            </div>
                            <div class="field mb-8">
                                <p class="pb-2">Town/City<sup class="text-[#DB4444]">*</sup></p>
                                <input type="text" class="bg-[#F5F5F5] py-4 w-full px-4 rounded-[4px]">
                            </div>
                            <div class="field mb-8">
                                <p class="pb-2">Phone Number<sup class="text-[#DB4444]">*</sup></p>
                                <input type="text" class="bg-[#F5F5F5] py-4 w-full px-4 rounded-[4px]">
                            </div>
                            <div class="field mb-8">
                                <p class="pb-2">Email Address<sup class="text-[#DB4444]">*</sup></p>
                                <input type="text" class="bg-[#F5F5F5] py-4 w-full px-4 rounded-[4px]">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="w-[60%] pt-27">
                    <div class="flex justify-between items-center pb-8" v-for="cart in carts" :key="cart.id">
                        <div class="flex items-center space-x-6">
                            <img :src="cart.image" alt="">
                            <span class="text-[16px] text-[#000] font-poppins font-normal leading-6">{{ cart.name }}</span>
                        </div>
                        <div>
                            <span class="text-[16px] text-[#000] font-poppins font-normal leading-6">${{ cart.price }}</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center pb-4 mb-4 border-b border-[#000]">
                        <span class="text-[16px] text-[#000] font-poppins font-normal leading-6">Subtotal</span>
                        <span class="text-[16px] text-[#000] font-poppins font-normal leading-6">${{ subtotal }}</span>
                    </div>
                    <div class="flex justify-between items-center pb-4 mb-4 border-[#000] border-b">
                        <span class="text-[16px] text-[#000] font-poppins font-normal leading-6">Shipping</span>
                        <span class="text-[16px] text-[#000] font-poppins font-normal leading-6">Free</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-[16px] text-[#000] font-poppins font-normal leading-6">Total</span>
                        <span class="text-[16px] text-[#000] font-poppins font-normal leading-6">${{ subtotal }}</span>
                    </div>

                    <div class="pt-8 flex flex-col gap-y-8">
                        <div>
                            <label for="method1">
                                <div class="flex items-center space-x-2">
                                    <input type="radio" id="method1" name="payment_method">
                                    <span>Stripe</span>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label for="method2">
                                <div class="flex items-center space-x-2">
                                    <input type="radio" id="method2" name="payment_method">
                                    <span>SSLCOMMERZ</span>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label for="method3">
                                <div class="flex items-center space-x-2">
                                    <input type="radio" id="method3" name="payment_method">
                                    <span>Cash on Delivery</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div class="pt-8 flex items-center space-x-4">
                        <input type="text" placeholder="Coupon code" class="px-6 py-4 border-1 border-[#000] rounded-[4px] text-[16px] text-[#000] font-poppins font-normal leading-6 grow">
                        <button class="bg-[#DB4444] px-12 py-4 rounded-[4px] [16px] text-[#fff] font-poppins font-normal leading-6">Apply Coupon</button>
                    </div>
                    <div class="pt-8">
                        <button class="bg-[#DB4444] px-12 py-4 rounded-[4px] [16px] text-[#fff] font-poppins font-normal leading-6">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
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

    const subtotal = computed(()=>
        carts.value.reduce((acc, cart) => acc + cart.price * cart.quantity, 0)
    );

</script>

<style scoped>
    .field input:focus {
        outline: none!important;
    }
    input[type="radio"]{
        appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: grid;
        place-content: center;
        border: 1px solid #000;
    }
    input[type="radio"]::before{
        content: '';
        width: 17px;
        height: 17px;
        border-radius: 50%;
        transform: scale(0);
        transition:  12ms transform ease-in-out;
        background: #000;
        border: 2px solid #fff;
    }
    input[type="radio"]:checked::before{
        transform:  scale(1);
    }
</style>