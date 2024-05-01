<template>
    <section>
        <div v-if="apple" @click="appleAppButton" class="flex items-center justify-center gap-4 rounded-[10px] bg-[#113255] w-[160px] p-1 cursor-pointer">
            <div>
                <img src="assets/icons/apple.svg" alt="">
            </div>
            <div class="text-white">
                <p class="font-medium" style="font-size:9px">Download on the </p>
                <div class="">
                    <h4 class="font-medium" style="font-size:17px">App Store</h4>
                </div>
            </div>
        </div>
        <div v-if="google"  @click="goggleAppButton"class="flex items-center justify-center gap-4 rounded-[10px] bg-[#113255] w-[160px] p-1 cursor-pointer">
            <div>
                <img src="assets/icons/google-play.svg" alt="">
            </div>
            <div class="text-white">
                <p class="font-medium" style="font-size:9px">GET IT ON</p>
                <div class="">
                    <h4 class="font-medium" style="font-size:17px">Google Play</h4>
                </div>
            </div>
        </div>
        <div v-if="web" class="hidden lg:flex items-center justify-center gap-4 rounded-[10px] bg-[#113255] w-[160px] p-1 ">
            <div>
                <img src="assets/icons/world.svg" alt="">
            </div>
            <div class="text-white">
                <p class="font-medium" style="font-size:9px">Available on your</p>
                <div class="">
                    <h4 class="font-medium" style="font-size:17px">Web browser</h4>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { urls } from "~/assets/urls";

defineProps({
    apple: Boolean,
    google: Boolean,
    web: Boolean,
})

const googleAppButton = () => {
   window.open(`${urls.play_store}`)  
};

const appleAppButton = () => {
    window.open(`${urls.apple_store}`)  
};
</script>


<style></style>
