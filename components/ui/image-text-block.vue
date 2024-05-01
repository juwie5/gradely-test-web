<template>
  <div :class="[
    'lg:flex lg:justify-center lg:grid-cols-2 lg:gap-16 my-16 p-3',
    direction == 'right' && 'flex-row-reverse'
  ]">
    <div class="">
      <NuxtImg class="block w-full select-none pointer-events-none lg:w-auto lg:h-[20rem]" :src="imageUrl" />
    </div>
    <div class="flex flex-col justify-center lg:w-[30rem]">
      <div v-if="label" :style="{'background-color':color}" class="rounded-[40px] px-4 py-2 w-40 mt-4 lg:mt-0">
        <p class="uppercase text-center text-base text-[#113255] font-bold">{{ label }}</p>
      </div>
      <h4 class="text-[1.313rem] lg:text-[2rem] mb-3 lg:mb-8 mt-8 lg:mt-0 font-bold tracking-tight text-[#113255] text-balance">
        {{ title }}
      </h4>
      <p class="text-base font-normal text-[#555555]">
        {{ text }}
      </p>
      <div v-if="learn" class="flex justify-center border-2 border-[#D5D5D5] rounded-[40px] px-4 py-2 w-40 mt-8 cursor-pointer hover:bg-[#dbf5f8] hover:border-transparent hover:shadow-lg hover:shadow-slate-400/50">
        <NuxtLink :to="learn" class="uppercase text-center text-sm text-[#113255] font-bold">Learn more</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
interface ImageTextBlockProps {
  direction: "left" | "right";
  title?: string;
  text: string;
  imageUrl: string;
  color?: string;
  label?: string;
  learn?: string;
  
}

defineProps<ImageTextBlockProps>()
</script>