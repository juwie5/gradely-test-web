<template>
  <main class="bg-[#FDFAFA] font-noto relative overflow-hidden">
    <div aria-hidden class="bg-local bg-no-repeat bg-contain absolute top-[580px] right-0 w-[520px] h-[520px] pointer-events-none"
      style="background-image: url('/img/ellipse-4.svg'); background-position: top right;" />
    <div aria-hidden class="bg-local bg-no-repeat bg-contain absolute top-[900px] left-0 w-[520px] h-[520px] pointer-events-none"
      style="background-image: url('/img/ellipse-1.svg'); background-position: top left;" />
    <div aria-hidden class="bg-local bg-no-repeat bg-contain absolute top-[2000px] right-0 w-[520px] h-[520px] pointer-events-none"
      style="background-image: url('/img/ellipse-2.svg'); background-position: top right;" />
    <div aria-hidden class="bg-local bg-no-repeat bg-contain absolute top-[3000px] left-0 w-[520px] h-[520px] pointer-events-none"
      style="background-image: url('/img/ellipse-3.svg'); background-position: top left;" />
    <div aria-hidden class="bg-local bg-no-repeat bg-contain absolute top-[3700px] right-0 w-[520px] h-[520px] pointer-events-none"
      style="background-image: url('/img/ellipse-4.svg'); background-position: top right;" />
    <HomeNavbar/>
    <HomeHero />
    <section class="container text-center my-16">
      <div class="w-full flex gap-16 custom-scrollbar overflow-x-auto justify-center">
        <img class="w-42" src="assets/icons/techcabal.svg" />
        <img  class="w-42" src="assets/icons/techpoint.svg" />
        <img  class="w-42" src="assets/icons/techcrunch.svg" />
        <img  class="w-42" src="assets/icons/bbc.svg" />
        <img class="w-42" src="assets/icons/cnn.svg" />
      </div>
      <div class="mt-20">
        <h3 class="text-5xl mb-4 font-bold tracking-tighter text-[#113255]">
          How it works
        </h3>
        <p class="mb-8 text-base font-light text-gray-700">
          According to a study by 8 professors from the University of Oxford, Gradely <br></br> improves grades by 50%
          in 3 months.
        </p>
      </div>
      <div class="relative">
        <figure class="hidden lg:flex justify-center items-center text-center">
          <img src="/img/gradelyFrameworkWheel.svg" alt="The Gradely Framework">
        </figure>
        <div class="flex items-center lg:absolute top-[30px] left-[60px] text-left mb-5">
          <div class="frameWorkItemFig lg:hidden shrink-0 relative mr-5">
            <img src="/img/adaptive_assessments.svg" alt="">
          </div>
          <div class="grow">
            <h4 class="text-base lg:text-2xl font-bold text-[#113255]">Adaptive Assessment</h4>
            <p class="text-base font-light text-[#555555]">Student takes homework or <br></br> practice test</p>
          </div>
        </div>

        <div class="flex items-center lg:absolute top-[30px] right-[60px] text-left  mb-5">
          <div class="frameWorkItemFig lg:hidden shrink-0 relative mr-5">
            <img src="/img/video_lessons.svg" alt="">
          </div>
          <div class="grow">
            <h4 class="hidden lg:block text-base lg:text-2xl font-bold text-[#113255]">Recommended Video <br></br> Lessons</h4>
            <h4 class="text-base lg:hidden lg:text-2xl font-bold text-[#113255]">Recommended Video Lessons</h4>
            <p class="text-base font-light text-[#555555]">Watches recommended video lessons</p>
          </div>
        </div>
        <div class="flex items-center lg:absolute bottom-[30px] left-[60px] text-left lg:text-right  mb-5">
          <div class="frameWorkItemFig lg:hidden shrink-0 relative mr-5">
            <img src="/img/performance_report.svg" alt="">
          </div>
          <div class="grow">
            <h4 class="text-base lg:text-2xl font-bold text-[#113255]">Better Results</h4>
            <p class="hidden lg:block text-base font-light text-[#555555]">Watches recommended video <br></br> lessons</p>
            <p class="lg:hidden text-base font-light text-[#555555]">Watches recommended video lessons</p>
          </div>
        </div>
        <div class="flex items-center lg:absolute bottom-[30px] right-[10px] lg:ml-8 text-left  mb-5">
          <div class="max-w-16 lg:hidden shrink-0 relative mr-5 z-[3]">
            <img src="/img/tutoring.svg" alt="">
          </div>
          <div class="grow">
            <h4 class="hidden lg:block text-base lg:text-2xl font-bold text-[#113255]">Targeted 1-on-1 Tutor <br></br> Sessions</h4>
            <h4 class="text-base lg:hidden lg:text-2xl font-bold text-[#113255]">Targeted 1-on-1 Tutor Sessions</h4>
            <p class="text-base font-light text-[#555555]">Takes recommended tutoring in specific topics</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <NuxtLink :to="urls.book_counseling" class="border border-[#D5D5D5] rounded-[35px] py-[15px] px-8 hover:bg-[#dbf5f8] hover:border-transparent hover:shadow-lg hover:shadow-slate-400/50">
          <div class="flex items-center gap-2">
            <p class="text-[#113255] hover:text-[#113255] font-bold text-sm">BOOK A FREE COUNSELLING SESSION</p>
            <img src="../assets/icons/arrow-right-up-line.svg" alt="">
          </div>
        </NuxtLink>
      </div>
    </section>
    <section class="container mt-8">
      <UiImageTextBlock color="#FCEACF" direction="left" label="for parents" 
        image-url="/img/for-parents.png"
        :learn="urls.parents"
        text="Help them use Gradely to gain mastery of difficult subject topics by daily practice on recommended tests, video lessons and tutor sessions anywhere, anytime." />
      <UiImageTextBlock color="#FFDCDE" direction="right" label="For Schools" 
        image-url="/img/for-schools.png"
        :learn="urls.schools"
        text="Make your schooling more efficient with the best free tools and content in one Learning Management System (LMS), online or offline." />
      <UiImageTextBlock color="#DBF5F8" direction="left" label="For Teachers" 
      image-url="/img/for-teachers.png"
      :learn="urls.tutoring"
        text="Create an easier and more effective teaching experience for you and your students with the right tools and resources, online or offline." />
    </section>
    <section class="container my-16">
      <h4 class="text-[2rem] mb-2 text-center lg:mt-0 font-bold tracking-tight text-[#113255]">
        Over 3000 fun and interactive video lessons <br></br> across all topics
      </h4>
      <p class="text-[21px] font-light text-gray-700 mb-7 text-center">
        Learn or relearn your subject topics with our library of well illustrated pre- <br></br>recorded video lessons
        in core subjects.
      </p>
        <div>
          <slider :parents="true"></slider>
        </div>
    </section>
    <section class="container my-16 hidden lg:block">
      <div class="text-center">
        <h3 class="text-2xl mb-4 font-semibold text-[#113255]">
          What parents say about Gradely Tutoring
        </h3>
      </div>
      <div class="mx-auto lg:w-full  mb-5">
        <HomeTestimonies :testimonies="testimonies" />
      </div>

    </section>
    <UiJoinCard/>
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
  {
    name: "Lanre Oshilaja",
    child: "Diamond",
    text: "This is the testimonial excerpt from the user’s testimonial video to the right. It circles round each highlighted parent.",
    keyStage: "A Levels",
    percenatage: 93
  },
];

const bookASession = () =>{

}
</script>


<style>
.nuxt-icon svg {
  margin-bottom: 0;
}

.frameWorkItemFig img {
  max-width: 64px;
  position: relative;
  z-index: 3;
}

.frameWorkItem:last-child .frameWorkItemFig::before {
  display: none;
}

@media only screen and (max-width: 768px) {
  /* line 462, ../sass/partials/_sections.scss */
  .frameWorkItemFig::before {
    height: 70px;
    content: "";
    display: block;
    width: 3px;
    background-color: #d5d5d5;
    position: absolute;
    left: 50%;
    right: auto;
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 50px;
  }

  .frameWorkItem:last-child .frameWorkItemFig::before {
  display: none;
}
}

</style>