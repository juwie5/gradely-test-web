<template>
    <div class="w-full relative bg-local bg-no-repeat bg-contain"
      style="background-image: url('/img/hero-decore.svg'); background-position: right -7rem;">
      <div class="container my-16">
        <div class="grid lg:grid-cols-2 w-full my-12 py-12">
          <div class="my-20">
            <h2
              class="text-3xl xl:text-5xl lg:w-full text-[#113255] xl:leading-[65.38px]  tracking-tight font-bold mb-5 text-balance">
              Get Better Grades <br></br> with Africa’s Best Tutors
            </h2>
            <div class="space-y-3 mt-8 mb-4 text-base text-gray-700">
              <h4 class="flex items-center gap-1">
                <NuxtImg class="size-5 pointer-events-none select-none" src="/img/checkbox-circle-fill.svg" />
                <div>Key Stage 2 up to A Levels</div>
              </h4>
              <h4 class="flex items-center gap-1">
                <NuxtImg class="size-5 pointer-events-none select-none" src="/img/checkbox-circle-fill.svg" />
                <div>Tailored 1-on-1 classes</div>
              </h4>
              <h4 class="flex items-center gap-1">
                <NuxtImg class="size-5 pointer-events-none select-none" src="/img/checkbox-circle-fill.svg" />
                <div>Resources to reinforce learning</div>
              </h4>
              <div class="uppercase font-semibold text-red-500">
                Any subject. Anytime
              </div>
            </div>
           <NuxtLink
           href="https://calendly.com/gradelysupport/gradely-free-trial-class"
           target="_blank"
           >
            <UiButton class="block font-bold" secondary type="submit">
                  Book a Class
            </UiButton>
           </NuxtLink>
          </div>
          <div class="flex items-center">
            <NuxtImg src="/img/heroImage2.png" fit="inside"
              class="mx-auto w-full lg:-mt-10 lg:w-[90%] h-auto select-none pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { z } from "zod"
  import type { FormSubmitEvent } from "#ui/types"
  import { urls } from "~/assets/urls";
  
  const schema = z.object({
    phone_number: z.string().refine((value) => /^(?:(?:\+|0{0,2})44\s?|(?:\((?=\+?44\))\+?44\)|0)?)\s?(?:(?:\d{5}\s?\d{5})|(?:\d{4}\s?\d{6})|(?:\d{3}\s?\d{4}\s?\d{4})|(?:\d{5}\s?\d{4})|(?:\d{4}\s?\d{3}\s?\d{3})|(?:\d{3}\s?\d{3}\s?\d{4}))$/.test(value), "Provide a valid UK phone number"),
  })
  type Schema = z.output<typeof schema>
  
  const state = reactive({
    phone_number: undefined,
    loading: false,
  })
  
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    state.loading = true;
    await $fetch<{ ok: boolean }>("/api/new-lead", {
      method: "POST",
      body: event.data,
    })
  
    state.loading = false;
  
    navigateTo(urls.contact_whatsapp, { external: true });
  }
  </script>