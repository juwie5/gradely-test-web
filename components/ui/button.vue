<script setup lang="ts">
  interface ButtonProps {
    outline?: boolean;
    secondary?: boolean;
  }
  const props = <ButtonProps>defineProps({
    outline: Boolean,
    secondary: Boolean,
  });
</script>

<template>
  <UButton
    :class="[
      'lg:w-auto  border-[1.5px] bg-white border-transparent text-gray-500 px-5 py-2 transition-all hover:bg-[#DBF5F8] hover:text-[#004680] font-semibold ',
      props.outline && 'border-[#D5D5D5] text-[#004680] hover:bg-[#004680] hover:text-white hover:border-[#004680]',
      props.secondary && 'bg-[#FAA017] text-[#004680] hover:bg-[#11BDCF]',
    ]"
    v-bind="$attrs"
  >
    <slot />
  </UButton>
</template>
