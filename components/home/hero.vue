<template>
  <div class="w-full relative bg-local bg-no-repeat bg-contain bg-[#FDF0F1]"
    style="background-image: url('/img/bgWave.png');">
    <div class="container mb-16">
      <div class="grid lg:grid-cols-2 w-full mt-20 mb-12 py-24">
        <div class="pt-4 lg:pt-32 order-last lg:order-none">
          <h2
            class="text-3xl xl:text-5xl lg:w-full text-[#113255] xl:leading-[65.38px]  tracking-tight font-bold mb-5 text-balance">
            Personalise learning and see improvement <br></br> <span class="text-[#FAA017]"> in 4 weeks!</span>
          </h2>
          <div>
            <p class="text-base font-normal text-[#353535]">Students have been shown to improve by up to a grade level after <br></br> 20 hours of using Gradely</p>
            <h4 class="font-bold uppercase my-7 text-base text-[#F6515B]">for Primary & Secondary students</h4>
          </div>
          <div class="flex gap-4">
           <UiGoogleAppleButton :apple="true"/>
           <UiGoogleAppleButton :google="true"/>
          </div>
        </div>
        <div class="flex items-center">
         <img src="/img/homeHero_anim.gif" fit="inside"  class="w-[40rem]"/>
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