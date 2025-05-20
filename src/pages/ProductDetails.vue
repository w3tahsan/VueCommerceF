<template>
    <section class="pb-15 pt-[110px]">
        <div class="container">
            <div v-if="loading" class="animate-pulse space-y-4">
                <div class="h-6 bg-gray-200 rounded w-3/4"></div>
                <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                <div class="h-6 bg-gray-300 rounded w-1/3"></div>
                <div class="h-20 bg-gray-100 rounded w-full"></div>
            </div>
            <div v-else>
                <form @submit.prevent="cart">
                <div class="flex gap-x-[70px]">
                <div class="w-[60%]">
                    <div class="flex gap-x-8">
                        <div class="flex flex-col gap-y-4 w-[20%]">
                            <div v-for="gallery in product_details.galleries" :key="gallery.id" class="bg-[#F5F5F5] px-6 py-3 cursor-pointer" @click="selectedImage = `http://127.0.0.1:8000/uploads/product/gallery/${gallery.gallery}`">
                                <img :src="`http://127.0.0.1:8000/uploads/product/gallery/${gallery.gallery}`" alt="">
                            </div>
                        </div>
                        <div class="w-[80%]">
                            <div class="bg-[#F5F5F5] px-6 py-16">
                                <img :src="selectedImage" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[40%]">
                    <div class="border-[#000] border-b pb-6">
                        <h3 class="text-[#000000] text-[24px] font-poppins font-semibold leading-6">{{ product_details.product_name}}</h3>
                        <div class="flex pb-4 pt-4 space-x-2">
                            <div class="space-x-1">
                                <i v-for="star in 5" :key="star" class="text-[#FFAD33] text-[14px] fa fa-star leading-[18px]"></i>
                            </div>
                            <div>
                                <span class="text-[14px] text-[rgba(0,0,0,0.5)] font-normal font-poppins leading-5">(150 Reviews)</span>
                            </div>
                        </div>
                        <h3 class="text-[#000000] text-[24px] font-normal font-poppins leading-6 pb-6 "> 
                           <span>${{ selectedInventory && selectedInventory.discount_price ? + selectedInventory.discount_price : product_details.rel_to_inventories[0].discount_price }}</span>
                        </h3>
                        <p class="text-[#000] text-[14px] font-normal font-poppins leading-5 pr-22">{{ product_details.short_desp }}</p>
                    </div>
                    <div class="colors flex gap-x-6 items-center pt-6">
                        <div>
                            <h4 class="text-[#000] text-[20px] font-normal font-poppins leading-5">Colours:</h4>
                        </div>
                        <div class="flex space-x-2">
                            <div v-for="color in uniqueColors" :key="color.rel_to_color.id">
                                <label v-if="color.rel_to_color.color_name != 'NA'">
                                    <input v-model="selectedColor" type="radio" name="color" :value="color.rel_to_color.id" :style="{background:color.rel_to_color.color_name}">
                                </label>
                                <label v-else class="relative no-color">
                                    <span>NA</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <strong v-if="errors.color_id" class="text-red-500">{{ errors.color_id[0] }}</strong>
                    </div>
                    <div class="flex gap-x-6 items-center pt-6 sizes">
                        <div>
                            <h4 class="text-[#000] text-[20px] font-normal font-poppins leading-5">Sizes:</h4>
                        </div>
                        <div class="flex space-x-4">
                            <label v-for="size in uniqueSizes" :key="size.rel_to_size.id" class="relative">
                                <input type="radio" name="size" :value="size.rel_to_size.id" v-model="selectedSize">
                                <span class="text-[#000] text-[14px] -translate-[50%] absolute font-poppins left-[50%] top-[50%]">{{ size.rel_to_size.size_name }}</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <strong v-if="errors.size_id" class="text-red-500">{{ errors.size_id[0] }}</strong>
                    </div>
                    <div class="flex items-center w-full pt-6 gap-x-4">
                        <div class="quantity w-[40%] ">
                            <div class="flex items-center">
                                <button type="button" @click="decrement" class="border border-[rgba(0,0,0,0.5)] px-4 py-[10px] rounded-s-lg hover:bg-[#DB4444] hover:text-[#fff] hover:border-[#DB4444]">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <input type="text" class="text-[20px] font-medium leading-7 font-poppins text-[#000] px-8 py-2 w-full text-center border-y border-[rgba(0,0,0,0.5)]" :value="count">
                                <button @click="increment" type="button" class="border border-[rgba(0,0,0,0.5)] px-4 py-[10px] rounded-e-lg hover:bg-[#DB4444] hover:text-[#fff] hover:border-[#DB4444]">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div>
                            <button  type="submit" class="bg-[#DB4444] py-[10px] px-12 rounded-[4px] text-[16px] text-[#fff] leading-6 font-normal">Add Cart</button>
                        </div>
                        <div>
                            <i class="fa-regular fa-heart rounded-[4px] border px-[10px] py-[10px] border-[rgba(0,0,0,0.51)] text-[18px]"></i>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            <div class="pt-[90px]">
                <div class="adad" v-html="product_details.long_desp"></div>

                <div class="tag pt-15">
                    <h4 class="font-poppins font-semibold text-[24px] text-[#111827] leading-8 pb-2">Keywords</h4>
                    <div class="flex items-center space-x-2">
                        <p v-for="tag in tags" :key="tag.id" class="flex"><a href=""  class="flex items-center space-x-1 text-[12px] text-[#4B5563] font-poppins font-normal px-[14px] py-2 border border-[#E5E7EB] rounded-2xl">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.41175 9.27733L4.9375 10.9375L4.46325 9.27733C4.34068 8.8485 4.11086 8.45797 3.79548 8.1426C3.48011 7.82722 3.08958 7.59741 2.66075 7.47483L1 7L2.66017 6.52575C3.089 6.40318 3.47953 6.17336 3.7949 5.85798C4.11027 5.54261 4.34009 5.15208 4.46267 4.72325L4.9375 3.0625L5.41175 4.72267C5.53432 5.1515 5.76414 5.54203 6.07952 5.8574C6.39489 6.17277 6.78542 6.40259 7.21425 6.52517L8.875 7L7.21483 7.47425C6.786 7.59682 6.39547 7.82664 6.0801 8.14202C5.76472 8.45739 5.53432 8.8485 5.41175 9.27733ZM10.3386 5.08375L10.1875 5.6875L10.0364 5.08375C9.94994 4.73759 9.77101 4.42145 9.51877 4.1691C9.26653 3.91676 8.95045 3.7377 8.60433 3.65108L8 3.5L8.60433 3.34892C8.95045 3.2623 9.26653 3.08324 9.51877 2.8309C9.77101 2.57855 9.94994 2.26241 10.0364 1.91625L10.1875 1.3125L10.3386 1.91625C10.4251 2.26248 10.6041 2.57868 10.8565 2.83103C11.1088 3.08338 11.425 3.26239 11.7712 3.34892L12.375 3.5L11.7712 3.65108C11.425 3.73761 11.1088 3.91662 10.8565 4.16897C10.6041 4.42132 10.4251 4.73752 10.3386 5.08375ZM9.54233 11.9974L9.3125 12.6875L9.08267 11.9974C9.01823 11.8041 8.90968 11.6285 8.7656 11.4844C8.62152 11.3403 8.44588 11.2318 8.25258 11.1673L7.5625 10.9375L8.25258 10.7077C8.44588 10.6432 8.62152 10.5347 8.7656 10.3906C8.90968 10.2465 9.01823 10.0709 9.08267 9.87758L9.3125 9.1875L9.54233 9.87758C9.60677 10.0709 9.71532 10.2465 9.8594 10.3906C10.0035 10.5347 10.1791 10.6432 10.3724 10.7077L11.0625 10.9375L10.3724 11.1673C10.1791 11.2318 10.0035 11.3403 9.8594 11.4844C9.71532 11.6285 9.60677 11.8041 9.54233 11.9974Z" stroke="#4B5563" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{{ tag.tag_name }}</span>
                        </a></p>
                    </div>
                </div>
            </div>

            <div class="pt-15">
                <div class="flex gap-x-7 flex-wrap gap-y-15">
                    <div v-for="newArr in 4" :key="newArr" class="w-[23.2%]">
                    <div class="flex justify-center bg-[#F5F5F5] py-12 mb-4 relative">
                            <img :src="newarrival" alt="">
                            <div class="bg-[#DB4444] py-2 px-3 absolute top-3 left-3 text-[12px] text-[#FAFAFA] font-poppins font-normal leading-5 rounded-[4px]">
                                -40%
                            </div>
                    </div>
                    <h3 class="font-poppins text-[16px] text-[#000] font-medium leading-6 pb-2"><router-link to="/product/details">HV-G92 Gamepad</router-link></h3>
                    
                        <div class="flex gap-x-2 pt-2">
                            <p class="font-poppins text-[16px] text-[#000] font-medium leading-6 space-x-3">
                                    <span class="text-[#DB4444]">$120</span>
                                    <del>$160</del>
                            </p>
                        </div>
                        <div class="space-x-1">
                            <i v-for="star in 5" :key="star" class="fa fa-star text-[#FFAD33] text-[14px] leading-[18px]"></i>
                            <span class="text-[14px] font-semibold font-poppins text-[rgba(0,0,0,0.5)] leading-5">(88)</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2'

const store = useStore();
const route = useRoute();
const sizes = ref(null);

const user = computed(() => store.state.user);
const product_details = computed(() => store.getters.product_details);
const tags = computed(() => store.getters.tags);

const count = ref(1);

import thumb from '@/assets/images/thumb.png';
import preview from '@/assets/images/preview.png';
import newarrival from '@/assets/images/new.png';
import axios from 'axios';



// Quantity increment/decrement
const increment = () => {
    count.value++;
};

const decrement = () => {
    if (count.value > 1) {
        count.value--;
    }
};



// Fetch the product details
onMounted(async () => {
  const productId = route.params.id;

  const savedProduct = JSON.parse(localStorage.getItem('product_details'));

  if (savedProduct && savedProduct.id == productId) {
    // if same product in localstorage, use it
    store.commit('SET_PRODUCT_DETAILS', savedProduct);
  } else {
    // otherwise fetch and save
    const response = await store.dispatch('Get_Details', productId);
    if (response) {
      localStorage.setItem('product_details', JSON.stringify(response));
    }
  }
});

const loading = ref(true)
const selectedImage = ref('');
onMounted(async () => {
    const productId = route.params.id;
    loading.value = true;
    await store.dispatch('Get_Details', productId);
    const previewImg = store.getters.product_details.preview;
    selectedImage.value = `http://127.0.0.1:8000/uploads/product/${previewImg}`;

    if (product_details.value.rel_to_inventories) {
        const defaultSize = product_details.value.rel_to_inventories.find(
            (item) => item.rel_to_size?.size_name === 'NA'
        );
        if (defaultSize) {
            selectedSize.value = defaultSize.rel_to_size.id;
        }
    }

    if (product_details.value.rel_to_inventories) {
        const defaultColor = product_details.value.rel_to_inventories.find(
        (item) => item.rel_to_color?.color_name === 'NA'
    )
    if (defaultColor) {
        selectedColor.value = defaultColor.rel_to_color.id;
    }
  }
    
    loading.value = false;
});

const uniqueColors = computed(() => {
    const seen = new Set();
    return product_details.value.rel_to_inventories.filter(item => {
      const id = item.rel_to_color.id;
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
});
const uniqueSizes = computed(() => {
    const seen = new Set();
    return product_details.value.rel_to_inventories.filter(item => {
      const id = item.rel_to_size.id;
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
});



const selectedColor = ref(null);
const selectedSize = ref(null);

const selectedInventory = computed(() => {
  const inventories = product_details.value.rel_to_inventories;

  if (!inventories) return null;

  const hasColors = inventories.some(inv => inv.color_id != null);
  const hasSizes = inventories.some(inv => inv.size_id != null);

  // Match both if available
  if (hasColors && hasSizes && selectedColor.value && selectedSize.value) {
    return inventories.find(inv =>
      inv.color_id === selectedColor.value &&
      inv.size_id === selectedSize.value
    );
  }

  // Match color only
  if (hasColors && selectedColor.value) {
    return inventories.find(inv => inv.color_id === selectedColor.value);
  }

  // Match size only
  if (hasSizes && selectedSize.value) {
    return inventories.find(inv => inv.size_id === selectedSize.value);
  }

  // Default fallback (no variants)
  return inventories[0] || null;
});


// watch([selectedColor, selectedSize], () => {
//   console.log('Selected Color:', selectedColor.value);
//   console.log('Selected Size:', selectedSize.value);
//   console.log('Matched Inventory:', selectedInventory.value);
// });


const customer_id = ref('')
const productid = ref('')
const color_id = ref('')
const size_id = ref('')
const quantity = ref('')
const errors = ref({});

const cart = () => {
    axios.post('http://127.0.0.1:8000/api/add/to/cart', {
        customer_id:user.value.id,
        productid:product_details.value.id,
        color_id:selectedColor.value,
        size_id:selectedSize.value,
        quantity:count.value
    })
    .then(response => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.success,
            showConfirmButton: false,
            timer: 1500
        });
        console.log(response);
        
    })
    .catch(error => {
        errors.value = error.response.data.errors;
    })
}



</script>
<style scoped>
.field input:focus {
    outline: none!important;
}
.quantity input:focus-visible {
    outline: none;
}
.colors input[type="radio"]{
    appearance: none;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    border: 2px solid transparent;
}

 .colors input[type="radio"]::before{
    content: '';
    width: 17px;
    height: 17px;
    border-radius: 50%;
    transform: scale(0);
    transition:  12ms transform ease-in-out;
    background: #A0BCE0;
    border: 2px solid #fff;
 }
  .colors input[type="radio"]:checked::before{
    transform:  scale(1);
  }
  .colors input[type="radio"]:checked{
    border-color: #000;
  }
  .sizes input[type='radio']{
    margin: 0;
    appearance: none;
    width: 32px;
    height: 32px;
    border: 1px solid rgba(0, 0, 0, 0.508);
    border-radius: 4px;
    display: grid;
    place-content: center;
  }
  .sizes input[type='radio']:checked{
    background: #DB4444;
    border-color: #DB4444;
  }
  .sizes input[type='radio']:checked{
    background: #DB4444;
    border-color: #DB4444;
  }
  .sizes input[type='radio']:checked+span{
    color: #fff;
  }


  .no-color span{
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: #DB4444;
    display: inline-block;
    line-height: 32px;
    text-align: center;
    color: #fff;
  }


</style>