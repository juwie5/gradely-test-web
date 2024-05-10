<template>
   <footer class="hidden lg:block w-full bg-[#DBF5F8] text-base lg:text-sm">
    <div class="container text-center lg:text-left w-full grid grid-cols-1 lg:flex gap-3 xl:gap-12 pb-3 lg:pb-0 text-gray-700">
      <div class="flex flex-col lg:flex-row shrink px-3 py-5 lg:py-10 gap-5">
        <div class="w-10 h-10 mx-auto mt-5 lg:mt-0 lg:mx-0">
          <NuxtImg
            src="/img/logo-sqr.svg"
            width="100"
          />
        </div>
        <div>
          <h3 class="text-base mb-4 text-[#004680] font-semibold text-nowrap">
            Inside Gradely
          </h3>
          <div class="space-y-5">
            <NuxtLink
              :to="urls.home"
              class="block text-[#555555] hover:text-[#FAA017] text-nowrap"
            >
              Home
            </NuxtLink>
            <NuxtLink
              :to="urls.about_gradely"
              class="block text-[#555555] hover:text-[#FAA017] text-nowrap"
            >
              About Gradely
            </NuxtLink>
            <NuxtLink
              :to="urls.blog"
              class="block text-[#555555] hover:text-[#FAA017] text-nowrap"
            >
              Blog
            </NuxtLink>
            <NuxtLink
              :to="urls.become_a_tutor"
              class="block text-[#555555] hover:text-[#FAA017] text-nowrap"
            >
              Become a Tutor
            </NuxtLink>
            <NuxtLink
              :to="urls.download_apps"
              class="block text-[#555555] hover:text-[#FAA017] text-nowrap cursor-pointer"
            >
              Download Apps
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="shrink px-3 py-3 lg:py-10">
        <h3 class="text-base mb-4 text-[#004680] font-semibold text-nowrap">
          Products
        </h3>
        <div class="space-y-5">
          <NuxtLink
            :to="urls.for_schools"
            class="block text-[#555555] hover:text-[#FAA017] text-nowrap"
          >
            For Schools
          </NuxtLink>
          <NuxtLink
            :to="urls.for_parents"
            class="block text-[#555555] hover:text-[#FAA017] text-nowrap"
          >
            For Parents
          </NuxtLink>
          <NuxtLink
            :to="urls.tutoring"
            class="block text-[#555555] hover:text-[#FAA017] text-nowrap"
          >
            Tutoring
          </NuxtLink>
          <NuxtLink
            :to="urls.learn"
            class="block text-[#555555] hover:text-[#FAA017] text-nowrap cursor-pointer"
          >
            Learn
          </NuxtLink>
        </div>
      </div>
      <div class="shrink px-3 py-3 lg:py-10">
        <h3 class="text-base mb-4 text-[#004680] font-semibold text-nowrap">
          Support
        </h3>
        <div class="space-y-5">
          <NuxtLink
            :to="urls.contact_us"
            class="block text-[#555555] hover:text-[#FAA017] text-nowrap"
          >
            Contact Us
          </NuxtLink>
          <NuxtLink
            :to="urls.help_center"
            class="block text-[#555555] hover:text-[#FAA017] text-nowrap"
          >
            Help Center
          </NuxtLink>
          <NuxtLink
            :to="urls.privacy"
            class="block text-[#555555] hover:text-[#FAA017] text-nowrap"
          >
            Privacy
          </NuxtLink>
          <NuxtLink
            :to="urls.tac"
            class="block text-[#555555] hover:text-[#FAA017] text-nowrap cursor-pointer"
          >
            Terms &amp; Conditons
          </NuxtLink>
        </div>
      </div>
      <div class="shrink px-3 py-3 lg:py-10">
        <h3 class="text-base mb-4 text-[#004680] font-semibold text-nowrap">
          Contact
        </h3>
        <div class="space-y-5">
          <NuxtLink
            :to="urls.contact_phone_ng"
            class="flex gap-2 items-center justify-center lg:justify-start text-nowrap text-[#555555] hover:text-[#FAA017] cursor-pointer"
          >
            <NuxtIcon
              name="phone"
              class="text-lg text-[#004680]"
            />
            (+234) 810 059 8268
          </NuxtLink>
          <NuxtLink
            :to="urls.contact_email"
            class="flex gap-2 items-center justify-center lg:justify-start text-nowrap text-[#555555] hover:text-[#FAA017] cursor-pointer"
          >
            <NuxtIcon
              name="mail"
              class="text-lg text-[#004680]"
            />
            support@gradely.ng
          </NuxtLink>
          <!-- <NuxtLink
            :to="urls.contact_whatsapp"
            class="flex gap-2 items-start justify-center lg:justify-start text-nowrap"
          >
            <NuxtIcon
              name="british-Flag"
              
            />
            Suite 5, 5th Floor, City Reach,<br></br> 5 Greenwich View Place, <br></br> London, E14 9NN
          </NuxtLink> -->
          <div class="flex gap-2 items-start justify-center lg:justify-start text-nowrap">
            <img src="@/assets/icons/british-Flag.svg"/>
            <p class="text-[#555555] hover:text-[#FAA017] cursor-pointer">Suite 5, 5th Floor, City Reach,<br></br> 5 Greenwich View Place, <br></br> London, E14 9NN</p>
          </div>
          <div class="flex gap-2 items-start justify-center lg:justify-start text-nowrap">
            <img src="@/assets/icons/nigeria-Flags.svg"/>
            <p class="text-[#555555] hover:text-[#FAA017] cursor-pointer">50,Tapa Street, Adekunle,<br></br>  Yaba, Lagos State</p>
          </div>
         
        </div>
      </div>
      <div class="flex-1 px-3 py-3 lg:py-10">
        <h3 class="text-base mb-4 text-[#004680] font-semibold text-nowrap">
          Awards & Affiliations
        </h3>
        <div class="flex justify-center lg:justify-start gap-3">
          <NuxtImg
            class="w-auto shrink-0 h-12 select-none pointer-events-none"
            src="/img/award-1.png"
            fit="contain"
            quality="100"
          />
          <NuxtImg
            class="w-auto shrink-0 h-12 select-none pointer-events-none"
            src="/img/award-2.png"
            fit="contain"
            quality="100"
          />
          <NuxtImg
            class="w-auto shrink-0 h-12 select-none pointer-events-none"
            src="/img/award-3.png"
            fit="contain"
            quality="100"
          />
          <NuxtImg
            class="w-auto shrink-0 h-12 select-none pointer-events-none"
            src="/img/award-4.png"
            fit="contain"
            quality="100"
          />
        </div>
        <div class="flex gap-3 justify-center lg:justify-start text-nowrap mt-4">
            <NuxtLink :to="urls.facebook" target="_blank">
              <NuxtIcon
                filled
                name="facebook"
                class="text-2xl"
              />
            </NuxtLink>
            <NuxtLink :to="urls.instagram" target="_blank">
              <NuxtIcon
                filled
                name="instagram"
                class="text-2xl"
              />
            </NuxtLink>
            <NuxtLink :to="urls.twitter" target="_blank">
              <NuxtIcon
                filled
                name="twitter"
                class="text-2xl"
              />
            </NuxtLink>
            <NuxtLink :to="urls.youtube" target="_blank">
              <NuxtIcon
                filled
                name="youtube"
                class="text-2xl"
              />
            </NuxtLink>
            <NuxtLink :to="urls.linked_in" target="_blank">
              <NuxtIcon
                filled
                name="linkedin"
                class="text-2xl"
              />
            </NuxtLink>
          </div>
      </div>
    </div>
    <div class="bg-[#004680]">
      <div class="container items-center lg:flex justify-between text-center lg:text-left text-blue-100">
        <div class="p-5 flex justify-center lg:justify-start text-nowrap">
          Copyright 2024, Gradely Inc. <br class="lg:hidden"> All rights reserved.
        </div>
        <!-- <div class="p-5 flex justify-center items-center lg:justify-start gap-1">
          <NuxtIcon
            filled
            name="global-line"
            class="text-lg"
          />
          United Kingdom | Pounds (GBP)
        </div> -->
      </div>
    </div>
  </footer>
  <footer class="lg:hidden w-full bg-[#DBF5F8] text-base lg:text-sm">
    <div class="container text-center lg:text-left w-full grid grid-cols-1 lg:flex gap-3 xl:gap-12 pb-3 lg:pb-0 text-gray-700">
      <div class="flex flex-col lg:flex-row shrink px-3 py-5 lg:py-10 gap-5">
        <div class="w-10 h-10 mx-auto mt-5 lg:mt-0 lg:mx-0">
          <NuxtImg
            src="/img/logo-sqr.svg"
            width="100"
          />
        </div>
       
      </div>
      <div class="shrink px-3  lg:py-10">
          <div class="border-b border-[#0000001A] flex items-center justify-between" @click="handleActiveTab(0)">
            <h3 class="text-base mb-4 text-[#004680] font-semibold text-nowrap">
            Inside Gradely
            </h3>
            <NuxtImg src="/img/chevron-down.svg" class="w-6" />
          </div>
         
          <div class="space-y-5 mt-4 transition-all duration-300 delay-150 " v-if="show">
            <NuxtLink
              :to="urls.home"
              class="block hover:text-[#004680] text-nowrap"
            >
              Home
            </NuxtLink>
            <NuxtLink
              :to="urls.about_gradely"
              class="block hover:text-[#004680] text-nowrap"
            >
              About Gradely
            </NuxtLink>
            <NuxtLink
              :to="urls.blog"
              class="block hover:text-[#004680] text-nowrap"
            >
              Blog
            </NuxtLink>
            <NuxtLink
              :to="urls.become_a_tutor"
              class="block hover:text-[#004680] text-nowrap"
            >
              Become a Tutor
            </NuxtLink>
            <NuxtLink
              :to="urls.download_apps"
              class="block hover:text-[#004680] text-nowrap"
            >
              Download Apps
            </NuxtLink>
          </div>
        </div>
      <div class="shrink px-3  lg:py-10">
        <div class="border-b border-[#0000001A] flex items-center justify-between" @click="handleActiveTab(1)" >
            <h3 class="text-base mb-4 text-[#004680] font-semibold text-nowrap">
              Products
            </h3>
            <NuxtImg src="/img/chevron-down.svg" class="w-6" />
        </div>
        <div class="space-y-5 mt-4 transition-all duration-300 delay-150" v-if="show1">
          <NuxtLink
            :to="urls.for_schools"
            class="block hover:text-[#004680] text-nowrap"
          >
            For Schools
          </NuxtLink>
          <NuxtLink
            :to="urls.for_parents"
            class="block hover:text-[#004680] text-nowrap"
          >
            For Parents
          </NuxtLink>
          <NuxtLink
            :to="urls.tutoring"
            class="block hover:text-[#004680] text-nowrap"
          >
            Tutoring
          </NuxtLink>
          <NuxtLink
            :to="urls.learn"
            class="block hover:text-[#004680] text-nowrap"
          >
            Learn
          </NuxtLink>
        </div>
      </div>
      <div class="shrink px-3 lg:py-10">
        <div class="border-b border-[#0000001A] flex items-center justify-between" @click="handleActiveTab(2)">
            <h3 class="text-base mb-4 text-[#004680] font-semibold text-nowrap">
              Support
            </h3>
            <NuxtImg src="/img/chevron-down.svg" class="w-6"  />
        </div>
        <div class="space-y-5 mt-4 transition-all duration-300 delay-150" v-if="show2">
          <NuxtLink
            :to="urls.contact_us"
            class="block hover:text-[#004680] text-nowrap"
          >
            Contact Us
          </NuxtLink>
          <NuxtLink
            :to="urls.help_center"
            class="block hover:text-[#004680] text-nowrap"
          >
            Help Center
          </NuxtLink>
          <NuxtLink
            :to="urls.privacy"
            class="block hover:text-[#004680] text-nowrap"
          >
            Privacy
          </NuxtLink>
          <NuxtLink
            :to="urls.tac"
            class="block hover:text-[#004680] text-nowrap"
          >
            Terms &amp; Conditons
          </NuxtLink>
        </div>
      </div>
      <div class="shrink px-3 lg:py-10">
        <div class="border-b border-[#0000001A] flex items-center justify-between"  @click="handleActiveTab(3)">
            <h3 class="text-base mb-4 text-[#004680] font-semibold text-nowrap">
              Contact
            </h3>
            <NuxtImg src="/img/chevron-down.svg" class="w-6" />
        </div>
        <div class="space-y-5 mt-4 transition-all duration-300 delay-150" v-if="show3">
          <NuxtLink
            :to="urls.contact_phone_ng"
            class="flex gap-2 items-center justify-center lg:justify-start text-nowrap"
          >
            <NuxtIcon
              name="phone"
              class="text-lg text-[#004680]"
            />
            (+234) 810 059 8268
          </NuxtLink>
          <NuxtLink
            :to="urls.contact_email"
            class="flex gap-2 items-center justify-center lg:justify-start text-nowrap"
          >
            <NuxtIcon
              name="mail"
              class="text-lg text-[#004680]"
            />
            support@gradely.ng
          </NuxtLink>
          <!-- <NuxtLink
            :to="urls.contact_whatsapp"
            class="flex gap-2 items-start justify-center lg:justify-start text-nowrap"
          >
            <NuxtIcon
              name="british-Flag"
              
            />
            Suite 5, 5th Floor, City Reach,<br></br> 5 Greenwich View Place, <br></br> London, E14 9NN
          </NuxtLink> -->
          <div class="flex gap-2 items-start justify-center lg:justify-start text-nowrap">
            <img src="@/assets/icons/british-Flag.svg"/>
            <p>Suite 5, 5th Floor, City Reach,<br></br> 5 Greenwich View Place, <br></br> London, E14 9NN</p>
          </div>
          <div class="flex gap-2 items-start justify-center lg:justify-start text-nowrap">
            <img src="@/assets/icons/nigeria-Flags.svg"/>
            <p>50,Tapa Street, Adekunle,<br></br>  Yaba, Lagos State</p>
          </div>
         
        </div>
      </div>
      <div class="flex-1 px-3 py-3 lg:py-10">
        <div class="flex justify-evenly  gap-3">
          <NuxtImg
            class="w-auto shrink-0 h-12 select-none pointer-events-none"
            src="/img/award-1.png"
            fit="contain"
            quality="100"
          />
          <NuxtImg
            class="w-auto shrink-0 h-12 select-none pointer-events-none"
            src="/img/award-2.png"
            fit="contain"
            quality="100"
          />
          <NuxtImg
            class="w-auto shrink-0 h-12 select-none pointer-events-none"
            src="/img/award-3.png"
            fit="contain"
            quality="100"
          />
          <NuxtImg
            class="w-auto shrink-0 h-12 select-none pointer-events-none"
            src="/img/award-4.png"
            fit="contain"
            quality="100"
          />
        </div>
        <div class="flex gap-3 justify-center lg:justify-start text-nowrap mt-4">
            <NuxtLink :to="urls.facebook">
              <NuxtIcon
                filled
                name="facebook"
                class="text-2xl"
              />
            </NuxtLink>
            <NuxtLink :to="urls.instagram">
              <NuxtIcon
                filled
                name="instagram"
                class="text-2xl"
              />
            </NuxtLink>
            <NuxtLink :to="urls.twitter">
              <NuxtIcon
                filled
                name="twitter"
                class="text-2xl"
              />
            </NuxtLink>
            <NuxtLink :to="urls.youtube">
              <NuxtIcon
                filled
                name="youtube"
                class="text-2xl"
              />
            </NuxtLink>
            <NuxtLink :to="urls.linked_in">
              <NuxtIcon
                filled
                name="linkedin"
                class="text-2xl"
              />
            </NuxtLink>
          </div>
      </div>
    </div>
    <div class="bg-[#004680]">
      <div class="container items-center lg:flex justify-between text-center lg:text-left text-blue-100">
        <div class="p-5 flex justify-center lg:justify-start text-nowrap">
          Copyright 2024, Gradely Inc. <br class="lg:hidden"> All rights reserved.
        </div>
        <!-- <div class="p-5 flex justify-center items-center lg:justify-start gap-1">
          <NuxtIcon
            filled
            name="global-line"
            class="text-lg"
          />
          United Kingdom | Pounds (GBP)
        </div> -->
      </div>
    </div>
  </footer>

</template>
<script setup >

  import { urls } from "~/assets/urls";

  let activeTab = ref(null);
  let show = ref(false)
  let show1 = ref(false)
  let show2 = ref(false)
  let show3 = ref(false)

  const handleActiveTab = (item) => {
    activeTab.value = Number(item);
    if(item === 0){
      show.value = !show.value
    }
    if(item === 1){
      show1.value = !show1.value
    }
    if(item === 2){
      show2.value = !show2.value
    }
    if(item === 3){
      show3.value = !show3.value
    }
  }
</script>
<style>
.nuxt-icon svg {
  margin-bottom: 0;
}
</style>