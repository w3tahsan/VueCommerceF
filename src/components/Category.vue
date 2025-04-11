<template>
    <section class="pb-[110px]">
        <div class="container border-b border-[rgba(0,0,0,0.3)] pb-[80px]">
            <div class="pb-10">
                <h3 class="text-[36px] text-[#000] font-poppins font-semibold leading-12">Browse By Category</h3>
            </div>
            <div class="flex gap-x-7">
                <div v-for="newArr in 6" :key="newArr" class="w-1/5">
                   <div class="border-1 border-[rgba(0,0,0,0.3)]  py-6 mb-4 text-center rounded-[4px]">
                        <div class="flex justify-center pb-4">
                            <img :src="category" alt="">
                        </div>
                        <h4 class="text-[16px] text-[#000] font-poppins leading-6 font-normal">Phones</h4>
                   </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import category from '@/assets/images/category.png' 
</script>