<template>
    <section class="py-[80px]">
        <div class="container">
            <div class="pb-15">
                <h3 class="text-[#000] text-[20px] font-poppins leading-6 font-normal">Wishlist (4)</h3>
            </div>
            <div class="flex gap-x-7">
                <div v-for="newArr in 4" :key="newArr" class="w-1/4">
                   <div class="flex justify-center bg-[#F5F5F5] py-12 mb-4 relative">
                        <img :src="newarrival" alt="">
                        <div class="bg-[#DB4444] py-2 px-3 absolute top-3 left-3 text-[12px] text-[#FAFAFA] font-poppins font-normal leading-5 rounded-[4px]">
                            -40%
                        </div>
                        <i class="fa fa-trash text-[#00] w-[34px] h-[34px] rounded-full bg-[#fff] !leading-[34px] text-center absolute top-3 right-3"></i>
                   </div>
                   <h3 class="font-poppins text-[16px] text-[#000] font-medium leading-6 pb-2">HAVIT HV-G92 Gamepad</h3>
                   <p class="font-poppins text-[16px] text-[#000] font-medium leading-6 space-x-3">
                        <span class="text-[#DB4444]">$120</span>
                        <del>$160</del>
                   </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import newarrival from '../assets/images/new.png'
</script>