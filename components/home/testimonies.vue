<template>
  <div class="w-full flex lg:justify-center gap-5 custom-scrollbar overflow-x-auto">
    <div v-for="({ name, location, text, image,  percenatage, keyStage }, index) in testimonies" 
      :key="index"
      class="w-80 flex-shrink-0 aspect-[37/42] border border-gray-200 bg-white mb-5 p-5 lg:p-7 rounded-lg flex flex-col items-start justify-between">
      <div>
        <div class="flex items-center justify-start gap-5">
          <img class="w-1/4" :src="`${image}`" alt="">
          <div class="flex flex-col">
            <h5 class="text-lg font-semibold">
              {{ name }}
            </h5>
            <p class="text-sm text-gray-600 block w-full">{{ location }}</p>
          </div>
        </div>
        <div class="my-4">
          <NuxtImg src="/img/quote.svg" class="size-10 pointer-events-none select-none" />
        </div>
        <div class="mb-5 text-base leading-normal text-gray-700">
        {{ text }}
        </div>
      </div>
     
      <!-- <div class="flex items-center gap-3">
        <div class="text-2xl font-semibold text-[#004680]">
          {{ percenatage }}%
        </div>
        <div class="text-sm text-gray-500">
          In {{ keyStage }}
        </div>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
export interface Testimony {
  name: string;
  location: string;
  text: string;
  keyStage: string;
  percenatage: number;
  image: string;
}

interface TestimoniesProps {
  testimonies: Testimony[]
}

defineProps<TestimoniesProps>()
</script>