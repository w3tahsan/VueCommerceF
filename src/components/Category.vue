<template>
    <section class="pb-[110px]">
        <div class="container border-b border-[rgba(0,0,0,0.3)] pb-[80px]">
            <div class="pb-10">
                <h3 class="text-[36px] text-[#000] font-poppins font-semibold leading-12">Browse By Category</h3>
            </div>
            <div class="flex gap-x-7">
                <div v-for="category in categories" :key="category" class="w-1/5">
                   <div class="border-1 border-[rgba(0,0,0,0.3)]  py-6 mb-4 text-center rounded-[4px]">
                        <div class="flex justify-center pb-4">
                            <img width="50" :src="`http://127.0.0.1:8000/uploads/category/${category.category_image}`" alt="">
                        </div>
                        <h4 class="text-[16px] text-[#000] font-poppins leading-6 font-normal">{{ category.category_name }}</h4>
                   </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const categories = computed(() => store.getters.categories);
</script>