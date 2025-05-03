<template>
    <section class="pb-[120px]">
        <div class="container">
            <div class="flex gap-x-[45px] items-center">
                <div class="w-[20%] border-r border-[rgba(0,0,0,0.3)]">
                    <ul class="space-y-4 pt-10">
                        <li v-for="category in categories" :key="category"><a href="" class="text-[16px] text-[#000] font-normal font-poppins leading-6">{{ category.category_name }}</a></li>
                    </ul>
                </div>
                <div class="w-[80%] pt-10">
                    <img :src="banner" alt="">
                </div>
            </div>
        </div>
    </section>
    <NewArrivals title="New Arrivals" class2="hidden" :items="new_products"></NewArrivals>
    <Category></Category>
    <NewArrivals title="Best Sellings" class1="hidden" :items="new_products"></NewArrivals>
    <ExploreProduct></ExploreProduct>
</template>

<script setup>
import banner from '@/assets/images/banner.png'
import NewArrivals from '@/components/NewArrivals.vue';
import Category from '@/components/Category.vue';
import BestSelling from '@/components/BestSelling.vue';
import ExploreProduct from '@/components/ExploreProduct.vue';

import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const categories = computed(() => store.getters.categories);
const new_products = computed(() => store.getters.newproducts);

</script>

