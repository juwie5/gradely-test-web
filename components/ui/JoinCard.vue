<template>
    <section class="container lg:block mx-auto lg:w-9/12 bg-[url('/img/bg-pattern.svg')] rounded-[30px] mb-16">
        <div class="px-2 pt-10">
            <div class="flex flex-col xl:flex-row items-center gap-8">
                <div class="p-4 lg:pb-10">
                    <h4
                        class="text-2xl lg:text-[34px] lg:leading-10 text-center lg:text-left font-medium text-[#113255] my-2">
                        Join thousands of great <br></br> learners using
                        Gradely to excel</h4>
                    <div class="flex items-center justify-center lg:justify-start gap-6 mt-5 mb-10">
                        <div class="flex justify-start flex-col items-start gap-1">
                            <p class="uppercase text-[#757575] text-xs lg:text-base  font-medium">Classes Completed</p>
                            <h6 class="text-[#004680] text-xl lg:text-3xl ">12,881</h6>
                        </div>
                        <div class="flex justify-start flex-col items-start gap-1">
                            <p class="uppercase text-[#757575] text-xs lg:text-base  font-medium">Video Lessons Completed</p>
                            <h6 class="text-[#004680] text-xl lg:text-3xl">11,938</h6>
                        </div>
                        <div class="flex justify-start flex-col items-start gap-1">
                            <p class="uppercase text-[#757575] text-xs lg:text-base font-medium">Assessment Taken</p>
                             <h6 class="text-[#004680] text-xl lg:text-3xl">686,944</h6>
                        </div>
                    </div>
                    <div class="flex items-center flex-row gap-4">
                        <UiGoogleAppleButton :apple="true" />
                        <UiGoogleAppleButton :google="true" />
                    </div>
                </div>
                <div>
                    <NuxtImg src="/img/appScreens.png"
                        class="block w-full select-none pointer-events-none h-[20rem] lg:w-auto"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>