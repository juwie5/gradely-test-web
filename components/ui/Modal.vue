<template>
    <section v-if="isOpen" class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-40 modal">
        <section class="bg-white p-10 rounded-2xl relative">
          <div @click="$emit('close')" class="absolute top-4 right-4 cursor-pointer"> 
            <img src="@/assets/icons/Close_dialog.svg" alt="">
           </div>
           <div class="flex flex-col items-center">
             <h2 class="text-2xl text-[#113255] font-bold">Get Started</h2>
             <p class="text-sm text-[#555555] font-normal mt-2">Create a Gradely Account to Continue</p>
           </div>
           
           <div class="my-8 space-y-5">
                <div class="textOnInput">
                    <label for="name" class="text-xs font-bold text-[#353535]">Name</label>
                    <input type="text" class="form-control px-4 py-2 border border-[#D5D5D5] rounded-[5px] w-96 placeholder:text-sm" name="name" id="name" placeholder="Your Fullname">
                </div>
                <div class="textOnInput">
                    <label for="name" class="text-xs font-bold text-[#353535]">Email / Phone <span class="text-[10px] text-[#959595] uppercase font-normal">Optional</span></label>
                    <input type="text" class="form-control px-4 py-2 border border-[#D5D5D5] rounded-[5px] w-96 placeholder:text-sm" name="email" id="email" placeholder="Email / Phone">
                </div>
                <div class="textOnInput">
                    <label for="name" class="text-xs font-bold text-[#353535]">Class</label>
                    <input type="text" class="form-control px-4 py-2 border border-[#D5D5D5] rounded-[5px] w-96" name="name" id="class">
                </div>
                <div class="textOnInput">
                    <label for="name" class="text-xs font-bold text-[#353535]">Password</label>
                    <input type="password" class="form-control px-4 py-2 border border-[#D5D5D5] rounded-[5px] w-96 placeholder:text-sm" name="name" id="password" placeholder="Enter your password">
                </div>
           </div>
           <div class="flex items-center justify-center">
            <button class="bg-[#FAA017] hover:bg-[#11BDCF] px-5 py-3 transition-all rounded-[2.188rem] text-[#113255] uppercase font-bold text-sm w-64">
                Continue
            </button>
           </div>
           <div class="flex items-center justify-center mt-5 pt-5 border-t border-[#DBF5F8] ">
            <p class="text-base font-medium text-[#555555]">Already have an account? <NuxtLink class="text-base font-bold text-[#FAA017] underline">Log in</NuxtLink></p>
           </div>
        </section> 
    </section>
</template>

<script setup>
import {ref} from 'vue'

defineProps({
    isOpen: Boolean
})

</script>

<style scoped>

.modal {
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
}

.textOnInput {
            position: relative;
        }
        .textOnInput label {
            position: absolute;
            top: -11px;
            left: 23px;
            padding: 2px;
            z-index: 1;
        }
        .textOnInput label:after {
            content: " ";
            background-color: #fff;
            width: 100%;
            height: 13px;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: -1;
        }
        label {
            font-size: 12px;
            font-weight: 700;
            display: inline-block;
            margin-bottom: .5rem;
            color:#353535;

        }
        .form-control {
            box-shadow: none !important;

        }

</style>