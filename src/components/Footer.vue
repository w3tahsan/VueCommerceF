<template>
    <footer class="bg-[#000000] pt-[80px] pb-[100px]">
        <div class="container">
            <div class="flex">
                <div class="w-[20%]">
                    <img :src="logo" alt="">
                    <h3 class="text-[#FAFAFA] text-[20px] font-medium font-poppins leading-7 pt-6 pb-6">Subscribe</h3>
                    <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6">Get 10% off your first order</p>
                </div>
                <div class="w-[20%]">
                    <h3 class="text-[#FAFAFA] text-[20px] font-medium font-poppins leading-7 pb-6">Support</h3>
                    <div class="space-y-4">
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></p>
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">exclusive@gmail.com</a></p>
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">+88015-88888-9999</a></p>
                    </div>
                </div>
                <div class="w-[20%]">
                    <h3 class="text-[#FAFAFA] text-[20px] font-medium font-poppins leading-7 pb-6">Account</h3>
                    <div class="space-y-4">
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">My Account</a></p>
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">Login / Register</a></p>
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">Cart</a></p>
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">Wishlist</a></p>
                    </div>
                </div>
                <div class="w-[20%]">
                    <h3 class="text-[#FAFAFA] text-[20px] font-medium font-poppins leading-7 pb-6">Quick Link</h3>
                    <div class="space-y-4">
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">Privacy Policy</a></p>
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">Terms Of Use</a></p>
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">FAQ</a></p>
                        <p class="text-[#FAFAFA] text-[16px] font-normal font-poppins leading-6"><a href="">Contact</a></p>
                    </div>
                </div>
                <div class="w-[20%]">
                    <h3 class="text-[#FAFAFA] text-[20px] font-medium font-poppins leading-7 pb-6">Download App</h3>
                    <div class="flex gap-x-2">
                        <div>
                            <img :src="qr" alt="">
                        </div>
                        <div class="space-y-[10px]">
                            <a href="" class="block"><img :src="playstore" alt=""></a>
                            <a href="" class="block"><img :src="appstore" alt=""></a>
                        </div>
                    </div>
                    <div class="pt-[26px] space-x-5">
                        <a href="" class="text-[#fff]"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="" class="text-[#fff]"><i class="fa-brands fa-twitter"></i></a>
                        <a href="" class="text-[#fff]"><i class="fa-brands fa-instagram"></i></a>
                        <a href="" class="text-[#fff]"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <section class="bg-[#000]">
        <div class="container">
            <div class="text-center pt-4 pb-6">
                <p class="text-[16px] font-normal font-poppins text-[rgba(255,255,255,0.3)] leading-6">&copy; Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    </section>
</template>

<script setup>
    import logo from '@/assets/images/flogo.png'
    import qr from '@/assets/images/qr.png'
    import playstore from '@/assets/images/playstore.png'
    import appstore from '@/assets/images/appstore.png'
</script>