<template>
  <div class="w-full lg:w-9/12 mx-auto lg:flex  gap-5">
    <div>
      <div v-if="summer" class="w-full lg:w-64 aspect-1 rounded-lg">
        <NuxtImg src="/img/need-help.png" class="w-full aspect-1" />
      </div>
      <div v-else class="w-44 aspect-1 rounded-lg">
        <NuxtImg src="/img/need-help.png" class="w-full aspect-1" />
      </div>
    </div>
    <div>
      <div class="my-3 lg:my-3 font-semibold text-[#113255] text-2xl lg:text-3xl">
        Need Help?
      </div>
      <div v-if="summer" class="text-base mb-4 text-gray-700">
        We’re available to answer your questions and support your onboarding process.
      </div>
      <div v-else  class="text-base mb-5 text-gray-700">
        We're here to support your child's education journey. Get in touch with any questions about the 11+, senior
        school admissions, or Key Stage 2 learning.
      </div>
      <div v-if="summer" class="flex flex-col gap-7">
              <div class="flex items-center lg:flex-shrink-0 gap-5">
                <div>
                  <div class="size-10 rounded-xl bg-[#004680] grid place-content-center">
                    <NuxtIcon name="new-phone-line" class="text-blue-100 text-5xl" filled />
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <div class="text-sm mb-0.5 font-light text-gray-600">
                    Call / Message Us
                  </div>
                  <NuxtLink :href="urls.contact_phone_ng" class="text-[#113255] text-xl font-bold text-balance">
                    (+234) 810 059 8268
                  </NuxtLink>
                </div>
              </div>
              <div class="flex items-center lg:flex-shrink-0 gap-5">
                <div>
                  <div class="size-10 rounded-xl bg-[#004680] grid place-content-center">
                    <NuxtIcon name="new-email" class="text-blue-100 text-5xl" filled />
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <div class="text-sm font-light mb-0.5 text-gray-600">
                    Send us a Mail
                  </div>
                  <NuxtLink :href="urls.contact_email2" class="text-[#113255] text-xl font-bold text-balance">
                    hello@gradely.co
                  </NuxtLink>
                </div>
              </div>
      </div>
      <div v-else class="flex gap-5 flex-col lg:flex-row text-base">
        <div class="flex items-center lg:items-start lg:flex-shrink-0 gap-5">
          <div>
            <div class="size-10 rounded-xl bg-[#004680] grid place-content-center">
              <NuxtIcon name="phone-line" class="text-blue-100 text-xl" filled />
            </div>
          </div>
          <div class="flex-shrink-0">
            <div class="text-sm mb-1 text-gray-600">
              Call Us
            </div>
            <NuxtLink :href="urls.contact_phone_uk" class="text-gray-700 text-balance">
              (+44) 0738 826 3241
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center lg:items-start gap-5">
          <div>
            <div class="size-10 rounded-xl bg-[#004680] grid place-content-center">
              <NuxtIcon name="map-pin-2-line" class="text-blue-100 text-xl" filled />
            </div>
          </div>
          <div>
            <div class="text-sm mb-1 text-gray-600">
              Visit Us
            </div>
            <div class="text-gray-700 text-balance">
              Suite 5, 5th Floor, City Reach, 5 Greenwich View Place, London, E14 9NN
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { urls } from "~/assets/urls";

interface ContactUsProps {
  summer?: Boolean
}

defineProps<ContactUsProps>()
</script>
<style>
.nuxt-icon svg {
  margin-bottom: 0;
}
</style>