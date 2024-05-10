<script setup lang="ts">
import { urls } from "~/assets/urls";
import type { Testimony } from "~/components/home/testimonies.vue";
import TutorHero from "~/components/home/tutorHero.vue";
import type { Faq } from "~/components/ui/faq.vue";

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
    location: "Newport Southwales,UK",
    text: "Mayokun looks forward to every class with her tutors. I will say she is now more confident in reading big grammars, 100% in English, and 80% in math.",
    keyStage: "Key Stage 2",
    percenatage: 93
  },
  {
    name: "Esther Umoh",
    location: "Newport Southwales,UK",
    text: "I would say there's been a 50% improvement for both English and math, and the teachers are really great. Their patience with Fikayo's excesses is commendable. I appreciate them",
    keyStage: "Key Stage 2",
    percenatage: 93
  },
  {
    name: "Lanre Oshilaja",
    location: "Lagos, Nigeria",
    text: "She has improved greatly in Mathematics",
    keyStage: "A Levels",
    percenatage: 93
  }
];
</script>

<template>
  <main class="bg-[#FDFAFA] font-noto relative overflow-hidden">
    <div aria-hidden class="bg-local bg-no-repeat bg-contain absolute top-[900px] left-0 w-[520px] h-[520px]"
      style="background-image: url('/img/ellipse-1.svg'); background-position: top left;" />
    <div aria-hidden class="bg-local bg-no-repeat bg-contain absolute top-[2000px] right-0 w-[520px] h-[520px]"
      style="background-image: url('/img/ellipse-2.svg'); background-position: top right;" />
    <div aria-hidden class="bg-local bg-no-repeat bg-contain absolute top-[3000px] left-0 w-[520px] h-[520px]"
      style="background-image: url('/img/ellipse-3.svg'); background-position: top left;" />
    <div aria-hidden class="bg-local bg-no-repeat bg-contain absolute top-[3700px] right-0 w-[520px] h-[520px]"
      style="background-image: url('/img/ellipse-4.svg'); background-position: top right;" />
    <HomeNavbar>
      <div class="hidden lg:flex gap-3">
        <NuxtLink :to="urls.for_parents">
          <UiButton>
            Parents
          </UiButton>
        </NuxtLink>
        <NuxtLink :to="urls.for_schools">
          <UiButton>
            Schools
          </UiButton>
        </NuxtLink>
        <NuxtLink :to="urls.for_teachers">
          <UiButton>
            Teachers
          </UiButton>
        </NuxtLink>
        <NuxtLink :to="urls.for_teachers">
          <UiButton>
            Resources
          </UiButton>
        </NuxtLink>
      </div>
      <div class="flex gap-3">
        <NuxtLink :to="urls.start_learning">
          <UiButton outline class="hidden lg:inline-block">
            Start learning
          </UiButton>
        </NuxtLink>
        <NuxtLink :to="urls.login">
          <UiButton secondary>
            Login
          </UiButton>
        </NuxtLink>
      </div>
    </HomeNavbar>
    <TutorHero />
    <div class="container text-center my-16">
      <h3 class="text-5xl mb-2 font-bold tracking-tighter text-[#113255]">
        Parents Tutoring, On-demand
      </h3>
      <p class="mb-8 text-lg font-light text-gray-700">
        Delivered by carefully selected professionals that best fit your child’s needs
      </p>
      <div class="mx-auto relative w-full lg:w-2/3 rounded-lg aspect-video bg-gray-600">
          <div class="hidden md:flex items-center justify-center">
            <iframe width="760" height="460" src="https://www.youtube.com/embed/eNc9wjDKzLs?si=iHfQccBLE7v526WU&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:8px"></iframe>
          </div>

          <div class="flex items-center justify-center md:hidden">
            <iframe width="342" height="208" src="https://www.youtube.com/embed/eNc9wjDKzLs?si=iHfQccBLE7v526WU&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:8px"></iframe>
          </div>
      </div> 
    </div>
    <div class="container mt-8">
      <UiImageTextBlock direction="left" image-url="/img/assess2.png" title="Assess"
        text="Gradely uses curriculum aligned assessments and technology to detect your child's learning gap and tailor live classes and other resources to address this" />
      <UiImageTextBlock direction="right" image-url="/img/learn2.png" title="Learn"
        text="Personalised 1-on-1 live classes supported by learning resources and practice recommendations" />
      <UiImageTextBlock direction="left" image-url="/img/track2.png" title="Track"
        text="See your child's progress on a weekly basis. Live classes are recorded for reviews and your child can always reconnect to every past learning experience." />
    </div>
    <div class="container my-16">
      <h4 class="text-2xl mb-2 lg:mt-0 font-semibold tracking-tight text-[#113255]">
        School Curriculum &amp; Key Stages
      </h4>
      <p class="text-base text-gray-700 mb-7">
        Experienced tutors in the UK National Curriculum from Key stage 2 to A levels
      </p>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <HomeKeyStage text="Key stage 2" image-url="/img/key-stage-2.png" />
        </div>
        <div>
          <HomeKeyStage text="11+ Exams" image-url="/img/key-stage-3.png" />
        </div>
        <div>
          <HomeKeyStage text="Key stage 3" image-url="/img/international.png" />
        </div>
        <div>
          <HomeKeyStage text="A-Levels" image-url="/img/a-levels.png" />
        </div>
      </div>
    </div>
     <div class="container my-16">
      <div class="text-center">
        <h3 class="text-2xl mb-4 font-semibold text-[#113255]">
          What parents say about Gradely Tutoring
        </h3>
      </div>
      <HomeTestimonies
        :testimonies="testimonies"
      />
    </div>
    <div class="container my-16">
      <h2 class="text-3xl mb-5 text-center font-semibold text-[#113255] tracking-tighter">
        Frequently Asked Questions
      </h2>
      <div class="mx-auto lg:w-9/12 mb-5 space-y-5">
        <UiFaq :faqs="faqs" />
      </div>
    </div>
    <div class="container my-16">
      <HomeContactUs />
    </div>
    <HomeFooter />
  </main>
</template>
<style>
.nuxt-icon svg {
  margin-bottom: 0;
}
</style>