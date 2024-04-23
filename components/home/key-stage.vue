<template>
  <!-- <div
    class="w-full flex-shrink-0 relative aspect-[139/160] border border-gray-400 flex items-end rounded-lg bg-[#FCEACF] px-4 py-5">
    <div class="font-semibold text-[#004680]">
      {{ text }}
    </div>
    <NuxtImg src="/img/key-stage-2.png" 
      class="mx-auto w-full lg:-mt-10 lg:w-[90%] h-auto select-none pointer-events-none" />
  </div> -->
  <div class="relative mt-12">
    <NuxtImg :src="imageUrl" class="mx-auto w-full lg:-mt-10 lg:w-[90%] h-auto select-none pointer-events-none" />
    <div class="font-semibold text-white absolute bottom-2 left-6">
      {{ text }}
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})
</script>