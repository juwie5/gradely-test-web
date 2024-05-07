<template>
    <div class="w-full relative bg-local bg-no-repeat bg-contain bg-[#DBF5F8]"
        style="background-image: url('/img/bgWave.png');">
        <div class="container mt-20">
            <div class="grid lg:grid-cols-2 w-full">
                <div class="my-24 lg:mt-24 order-last lg:order-none z-10 lg:z-0">
                    <h2
                        class="text-3xl lg:text-[3.25rem] lg:w-full text-[#113255] lg:leading-[70.82px]  tracking-tight font-bold mb-5 text-balance">
                        Enjoy stress-free <br></br> teaching.
                    </h2>
                    <div class="hidden lg:absolute top-40 ml-32">
                         <img class="w-1/2" src="/img/under-line.png" />
                   </div>
                    <div class="my-6">
                        <p class="text-xl font-normal text-[#353535] leading-[33.6px]">Improve your students’ learning outcomes,  <br></br> from anywhere, the easy way, for free.</p>
                    </div>
                    <div class="flex gap-4">
                        <UiGoogleAppleButton :google="true" :white="true"  />
                        <UiGoogleAppleButton :apple="true" :white="true" />
                        
                    </div>
                </div>
                <div class="flex items-center mt-16 z-10 lg:z-0">
                    <img src="/img/teacher-hero.png" fit="inside" class="" />
                </div>
                 <div class="absolute -right-[13rem] lg:-right-24  -top-[3rem] lg:top-4 ">
                    <img class="w-1/2" src="/img/u-clubs.png" />
                </div>
                <div class="absolute -left-8 -bottom-6">
                    <img class="w-1/2" src="/img/rain-drop.png" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>