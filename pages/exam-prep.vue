<template>
  <main class="bg-[#FDFAFA] font-noto relative overflow-hidden">
    <div aria-hidden
      class="bg-local bg-no-repeat bg-contain absolute top-[580px] right-0 w-[520px] h-[520px] pointer-events-none"
      style="background-image: url('/img/ellipse-4.svg'); background-position: top right;" />
    <div aria-hidden
      class="bg-local bg-no-repeat bg-contain absolute top-[900px] left-0 w-[520px] h-[520px] pointer-events-none"
      style="background-image: url('/img/ellipse-1.svg'); background-position: top left;" />
    <div aria-hidden
      class="bg-local bg-no-repeat bg-contain absolute top-[2000px] right-0 w-[520px] h-[520px] pointer-events-none"
      style="background-image: url('/img/ellipse-2.svg'); background-position: top right;" />
    <div aria-hidden
      class="bg-local bg-no-repeat bg-contain absolute top-[3000px] left-0 w-[520px] h-[520px] pointer-events-none"
      style="background-image: url('/img/ellipse-3.svg'); background-position: top left;" />
    <div aria-hidden
      class="bg-local bg-no-repeat bg-contain absolute top-[3700px] right-0 w-[520px] h-[520px] pointer-events-none"
      style="background-image: url('/img/ellipse-4.svg'); background-position: top right;" />
    <HomeNavbar />
    <HomeExamHero />
    <section class="container text-center my-16">
      <div class="flex justify-start lg:justify-between items-center overflow-x-auto gap-8 lg:gap-16">
        <img src="assets/icons/cambridge.svg" />
        <img src="assets/icons/neco.svg" />
        <img src="assets/icons/waec.svg" />
        <img src="assets/icons/sat.svg" />
        <img src="assets/icons/jamb.svg" />
        <img src="assets/icons/mcgill.svg" />
      </div>
    </section>
    <section class="container mt-8">
      <div class="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div>
          <h3 class="text-3xl lg:text-5xl text-[#113255] font-bold text-center">
            How it works
          </h3>
          <div class="flex flex-col gap-5 mt-8">
            <div class="w-full border hover:border-[#D5D5D5] p-5 rounded-2xl flex justify-between items-center gap-2">
              <div class="bg-[#FAA017] w-16 h-16 rounded-[20px]">
              </div>
              <div>
                <p class="text-lg font-normal text-[#353535]">Practice from 30,000 authentic past questions <br></br> in
                  any subject and exam of your choice</p>
              </div>
              <div>
                <img src="@/assets/icons/arrow-right.svg" alt="">
              </div>
            </div>
            <div class="w-full border hover:border-[#D5D5D5] p-5 rounded-2xl flex justify-between items-center gap-2">
              <div class="bg-[#11BDCF] w-16 h-16 rounded-[20px]">
              </div>
              <div>
                <p>Review your result and watch explainer videos <br></br> for each question you missed.</p>
              </div>
              <div>
                <img src="@/assets/icons/arrow-right.svg" alt="">
              </div>
            </div>
            <div class="w-full border hover:border-[#D5D5D5] p-5 rounded-2xl flex justify-between items-center gap-2">
              <div class="bg-[#F6515B] w-16 h-16 rounded-[20px]">
              </div>
              <div>
                <p>Attend group or private tutoring sessions for <br></br> live feedback from expert tutors.</p>
              </div>
              <div>
                <img src="@/assets/icons/arrow-right.svg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div>
          <NuxtImg src="/img/exam-how-to.png" fit="inside" class="w-[30rem]" />
        </div>
      </div>
    </section>
    <section class="container my-16">
      <h4 class="text-[32px] mb-2 text-center lg:mt-0 font-bold tracking-tight text-[#113255]">
        Benefits & Pricing
      </h4>
      <div class="flex flex-col lg:flex-row gap-8 mt-12">
        <div class="w-full max-w-[23.125rem] border border-[#D5D5D5] px-3 rounded-[20px]">
          <div class="flex flex-col items-center justify-end py-8 gap-3">
            <h5 class="text-[#113255] text-xl font-bold">Free</h5>
            <div class="my-4">
              <h3 class="text-[#113255] text-3xl font-bold">₦0.00</h3>
              <p class="text-[#757575] text-sm font-normal text-center">Per Month</p>
            </div>
            <div>
              <div class="flex items-center gap-2.5 my-1.5">
                <img src="@/assets/icons/tick.svg" alt="">
                <p class="text-[#555555] text-sm font-normal">Access to free small group classes</p>
              </div>
              <div class="flex items-center gap-2.5 my-1.5">
                <img src="@/assets/icons/tick.svg" alt="">
                <p class="text-[#555555] text-sm font-normal">Daily mock assessments with past questions and explainer
                  videos for each question</p>
              </div>
              <div class="flex items-center gap-2.5 my-1.5">
                <img src="@/assets/icons/tick.svg" alt="">
                <p class="text-[#555555] text-sm font-normal">Weekly progress reports </p>
              </div>
              <div class="text-center mt-10">
                <button
                  class="transition-all mx-auto bg-[#FCEACF] border border-[#FAA017] py-2 px-16 rounded-[20px] hover:bg-[#FAA017] text-[#113255] font-bold text-sm">
                  Get this Plan
                </button>
              </div>

            </div>
          </div>
        </div>
        <div class="w-full max-w-[23.125rem] border border-[#D5D5D5] px-3 rounded-[20px]">
          <div class="flex flex-col items-center justify-end py-8 gap-3">
            <h5 class="text-[#113255] text-xl font-bold">Regular</h5>
            <div class="my-4">
              <h3 class="text-[#113255] text-3xl font-bold">₦5,000</h3>
              <p class="text-[#757575] text-sm font-normal text-center">Per Month</p>
            </div>
            <div>
              <div class="flex items-center gap-2.5 my-1.5">
                <img src="@/assets/icons/tick.svg" alt="">
                <p class="text-[#555555] text-sm font-normal">Daily recommendation of practice and video lessons</p>
              </div>
              <div class="flex items-center gap-2.5 my-1.5">
                <img src="@/assets/icons/tick.svg" alt="">
                <p class="text-[#555555] text-sm font-normal">Mock exams and revision videos</p>
              </div>
              <div class="flex items-center gap-2.5 my-1.5">
                <img src="@/assets/icons/tick.svg" alt="">
                <p class="text-[#555555] text-sm font-normal">Weekly progress reports </p>
              </div>
              <div class="text-center mt-10">
                <button
                  class="transition-all mx-auto bg-[#FAA017] border py-2 px-16 rounded-[20px] hover:bg-[#11BDCF] text-[#113255] font-bold text-sm">
                  Get this Plan
                </button>
              </div>

            </div>
          </div>
        </div>
        <div class="w-full max-w-[23.125rem] border border-[#D5D5D5] px-3 rounded-[20px]">
          <div class="flex flex-col items-center justify-end py-8 gap-3">
            <h5 class="text-[#113255] text-xl font-bold">Premium</h5>
            <p class="text-[#757575] text-sm font-normal uppercase text-center">From</p>
            <div class="">
              <h3 class="text-[#113255] text-3xl font-bold">₦20,000</h3>
              <p class="text-[#757575] text-sm font-normal text-center">Per Month</p>
            </div>
            <div>
              <div class="flex items-center gap-2.5 my-1.5">
                <img src="@/assets/icons/tick.svg" alt="">
                <p class="text-[#555555] text-sm font-normal">Daily recommendation of practice and video lessons</p>
              </div>
              <div class="flex items-center gap-2.5 my-1.5">
                <img src="@/assets/icons/tick.svg" alt="">
                <p class="text-[#555555] text-sm font-normal">Group classes monthly</p>
              </div>
              <div class="flex items-center gap-2.5 my-1.5">
                <img src="@/assets/icons/tick.svg" alt="">
                <p class="text-[#555555] text-sm font-normal">Mock exams and revision videos</p>
              </div>
              <div class="flex items-center gap-2.5 my-1.5">
                <img src="@/assets/icons/tick.svg" alt="">
                <p class="text-[#555555] text-sm font-normal">Weekly progress reports </p>
              </div>
              <div class="text-center mt-5">
                <button
                  class="transition-all mx-auto bg-[#FCEACF] border border-[#FAA017] py-2 px-16 rounded-[20px] hover:bg-[#FAA017] text-[#113255] font-bold text-sm">
                  Get this Plan
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container my-16">
      <div class="text-center">
        <h4
          class="text-[2rem] lg:text-5xl mb-2 text-center lg:mt-0 font-bold tracking-tight text-[#113255] lg:leading-[65.38px]">
          Our students have nothing but <br></br> love for us
        </h4>
      </div>
      <div class="flex flex-col lg:flex-row gap-8 mt-10">
        <div class="w-full max-w-[23.125rem] border border-[#E5E5E5] bg-white p-5 rounded-[10px]">
          <div class="my-4">
            <NuxtImg src="/img/quote.svg" class="size-10 pointer-events-none select-none" />
          </div>
          <div class="my-4" >
            <p class="text-lg text-[#353535] font-normal w-full">This is the testimonial excerpt from the user’s testimonial video to the right. It circles round each
              highlighted parent.</p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="bg-[#11BDCF] w-10 h-10 rounded-[15px]"></div>
              <div>
                <h5 class="font-bold text-base text-[#353535]">Femi Ibiwoye</h5>
                <p class="text-[#959595] text-xs ">WASSCE (2022)</p>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <h5 class="text-[2rem] font-bold text-[#004680]">7</h5>
              <p  class="text-[#959595] text-xs ">Distinctions</p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-[23.125rem] border border-[#E5E5E5] bg-white p-5 rounded-[10px]">
          <div class="my-4">
            <NuxtImg src="/img/quote.svg" class="size-10 pointer-events-none select-none" />
          </div>
          <div class="my-4" >
            <p class="text-lg text-[#353535] font-normal w-full">This is the testimonial excerpt from the user’s testimonial video to the right. It circles round each
              highlighted parent.</p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="bg-[#F6515B] w-10 h-10 rounded-[15px]"></div>
              <div>
                <h5 class="font-bold text-base text-[#353535]">Lanre Oshilaja</h5>
                <p class="text-[#959595] text-xs ">UTME (2021)</p>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <h5 class="text-[2rem] font-bold text-[#004680]">345</h5>
            </div>
          </div>
        </div>
        <div class="w-full max-w-[23.125rem] border border-[#E5E5E5] bg-white p-5 rounded-[10px]">
          <div class="my-4">
            <NuxtImg src="/img/quote.svg" class="size-10 pointer-events-none select-none" />
          </div>
          <div class="my-4" >
            <p class="text-lg text-[#353535] font-normal w-full">This is the testimonial excerpt from the user’s testimonial video to the right. It circles round each
              highlighted parent.</p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="bg-[#FAA017] w-10 h-10 rounded-[15px]"></div>
              <div>
                <h5 class="font-bold text-base text-[#353535]">Esther Umoh</h5>
                <p class="text-[#959595] text-xs ">IGCSE (2022)</p>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <h5 class="text-[2rem] font-bold text-[#004680]">93</h5>
              <p  class="text-[#959595] text-xs ">%</p>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="container my-16">
      <div class="">
        <h2 class="text-3xl mb-5 text-center font-semibold text-[#113255] tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div class="mx-auto lg:w-9/12 mb-5 space-y-5">
          <UiFaq :faqs="faqs" />
          <div class="my-8">
            <div class="my-3">
              <h5 class="text-3xl text-[#113255] font-normal">Need Help?</h5>
              <p class="text-base font-light text-[#555555]">We’re available to answer your questions and
                support your onboarding process.</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-14 my-8">
              <div class="flex items-center lg:flex-shrink-0 gap-5">
                <div>
                  <div class="size-10 rounded-xl bg-[#004680] grid place-content-center">
                    <NuxtIcon name="new-phone-line" class="text-blue-100 text-5xl" filled />
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <div class="text-sm mb-0.5 font-light text-gray-600">
                    Call Us
                  </div>
                  <NuxtLink :href="urls.contact_phone_ng" class="text-[#113255] text-xl font-bold text-balance">
                    (+234) 810 059 8268
                  </NuxtLink>
                </div>
              </div>
              <div class="flex items-center lg:flex-shrink-0 gap-5">
                <div>
                  <div class="size-10 rounded-xl bg-[#004680] grid place-content-center">
                    <NuxtIcon name="new-whatsapp" class="text-blue-100 text-5xl" filled />
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <div class="text-sm mb-0.5 font-light text-gray-600">
                    Chat Us
                  </div>
                  <NuxtLink :href="urls.contact_whatsapp" class="text-[#113255] text-xl font-bold text-balance">
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
          </div>
        </div>
      </div>
    </section>
    <UiJoinCard />
    <HomeFooter />
  </main>
</template>

<script setup lang="ts">
import { urls } from "~/assets/urls";
import type { Testimony } from "~/components/home/testimonies.vue";
import type { Faq } from "~/components/ui/faq.vue";
import slider from "~/components/home/slider.vue"

const faqs: Faq[] = [
  {
    question: "Are the classes live or pre-recorded?",
    answer: "The classes are live and offer your child the opportunity to have a real time interaction with a professional tutor.",
  },
  {
    question: "Which age range do you cover?",
    answer: "We cover kids from 5 years upwards and across the key stages (Key stage 1 to Key Stage 4)"
  },
  {
    question: "Which accessories do I need for the classes?",
    answer: "Basically, you need a Tablet/Laptop with a strong internet connection for the best experience.",
  },
  {
    question: "Which exams do you prepare kids for?",
    answer: "We prepare learners in the Uk for diverse exams including 11+, SAT, 13+, GCSE(AQA, EDEXCEL & OCR) and A-Levels.",
  },
  {
    question: "Which resources do you use for your exam preps?",
    answer: "Generally, we use Bond and CGP materials for the key stages, while we also use school based resources for the entrance exams, and tailored past papers for GCSE.",
  },
  {
    question: "Which subjects do you cover?",
    answer: "We cover Math, English, Science, Verbal and Non-Verbal Reasoning for Key stage 1 and 2, while we cover all major subjects for Key stage 3 and GCSE.",
  },
  {
    question: "What is the rate of your classes?",
    answer: "£10 per hour for key stage 1 to 2 and £12 per hour for GCSE"
  }
]

const testimonies: Testimony[] = [
  {
    name: "Femi Ibiwoye",
    child: "Diamond",
    text: "This is the testimonial excerpt from the user’s testimonial video to the right. It circles round each highlighted parent.",
    keyStage: "Key Stage 2",
    percenatage: 93
  },
  {
    name: "Esther Umoh",
    child: "Diamond",
    text: "This is the testimonial excerpt from the user’s testimonial video to the right. It circles round each highlighted parent.",
    keyStage: "Key Stage 2",
    percenatage: 93
  },
  {
    name: "Lanre Oshilaja",
    child: "Diamond",
    text: "This is the testimonial excerpt from the user’s testimonial video to the right. It circles round each highlighted parent.",
    keyStage: "A Levels",
    percenatage: 93
  },
];
</script>


<style>
.nuxt-icon svg {
  margin-bottom: 0;
}
</style>