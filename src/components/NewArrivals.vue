<template>
    <section class="pb-[80px]">
        <div class="container">
            <div class="pb-10">
                <h3 class="text-[36px] text-[#000] font-poppins font-semibold leading-12">New Arrivals</h3>
            </div>
            <div class="flex gap-x-7">
                <div v-for="newArr in 4" :key="newArr" class="w-1/4">
                   <div class="flex justify-center bg-[#F5F5F5] py-12 mb-4 relative">
                        <img :src="newarrival" alt="">
                        <div class="bg-[#DB4444] py-2 px-3 absolute top-3 left-3 text-[12px] text-[#FAFAFA] font-poppins font-normal leading-5 rounded-[4px]">
                            -40%
                        </div>
                   </div>
                   <h3 class="font-poppins text-[16px] text-[#000] font-medium leading-6 pb-2">HAVIT HV-G92 Gamepad</h3>
                   <p class="font-poppins text-[16px] text-[#000] font-medium leading-6 space-x-3">
                        <span class="text-[#DB4444]">$120</span>
                        <del>$160</del>
                   </p>
                   <div class="flex gap-x-2 pt-2">
                        <div class="space-x-1">
                            <i v-for="star in 5" :key="star" class="fa fa-star text-[#FFAD33] text-[14px] leading-[18px]"></i>
                        </div>
                        <div>
                            <span class="text-[14px] font-semibold font-poppins text-[rgba(0,0,0,0.5)] leading-5">(88)</span>
                        </div>
                   </div>
                </div>
            </div>
            <div class="pt-[120px] text-center border-b border-[rgba(0,0,0,0.3)] pb-[120px]">
                <a href="" class="bg-[#DB4444] px-12 py-4 text-[16px] text-[#FAFAFA] font-poppins font-medium leading-6 rounded-[4px]">View All Products</a>
            </div>
        </div>
    </section>
</template>

<script setup>
    import newarrival from '../assets/images/new.png'
</script>