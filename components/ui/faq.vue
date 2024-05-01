<template>
  <dl
    v-for="(faq, index) in faqs"
    :key="index"
    class="p-5 bg-[#F5F5F5] rounded"
  >
    <dt class="text-base mb-1 text-[#004680] font-medium">
      {{ faq.question }}
    </dt>
    <dd class="text-sm text-gray-700">
      {{ faq.answer }}
    </dd>
  </dl>
</template>
<script setup lang="ts">
  export interface Faq {
    question: string;
    answer: string;
  }

  interface FaqProps {
    faqs: Faq[];
  }
  defineProps<FaqProps>();
</script>