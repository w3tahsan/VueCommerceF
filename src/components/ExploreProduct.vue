<template>
     <section class="pb-[80px] pt-[60px]">
        <div class="container">
            <div class="pb-[80px] text-center">
                <h3 class="text-[36px] text-[#000] font-poppins font-semibold leading-12">Explore Our Products</h3>
            </div>
            <div class="flex gap-x-7 flex-wrap gap-y-15">
                <div v-for="product in products" :key="product" class="w-[23.2%]">
                   <div class="flex justify-center bg-[#F5F5F5] py-12 mb-4 relative">
                        <img :src="`http://127.0.0.1:8000/uploads/product/${product.preview}`" alt="">
                        <div v-if="product.discount" class="bg-[#DB4444] py-2 px-3 absolute top-3 left-3 text-[12px] text-[#FAFAFA] font-poppins font-normal leading-5 rounded-[4px]">
                            -{{ product.discount }}%
                        </div>
                   </div>
                   <h3 class="font-poppins text-[16px] text-[#000] font-medium leading-6 pb-2">
                    <router-link :to="`/product/details/${product.id}`">{{ product.product_name }}</router-link>
                    </h3>
                   
                   <div class="flex gap-x-2 pt-2">
                        <p class="font-poppins text-[16px] text-[#000] font-medium leading-6 space-x-3">
                                <span class="text-[#DB4444]">${{ product.rel_to_inventories[0].discount_price }}</span>
                                <del v-if="product.discount">${{ product.rel_to_inventories[0].price }}</del>
                        </p>
                        <div class="space-x-1">
                            <i v-for="star in 5" :key="star" class="fa fa-star text-[#FFAD33] text-[14px] leading-[18px]"></i>
                        </div>
                        <div>
                            <span class="text-[14px] font-semibold font-poppins text-[rgba(0,0,0,0.5)] leading-5">(88)</span>
                        </div>
                   </div>
                </div>
            </div>
            <div class="pt-[120px] text-center">
                <a href="" class="bg-[#DB4444] px-12 py-4 text-[16px] text-[#FAFAFA] font-poppins font-medium leading-6 rounded-[4px]">View All Products</a>
            </div>
        </div>
    </section>
</template>

<script setup>
import newarrival from '../assets/images/new.png'
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const products = computed(() => store.getters.products);

</script>