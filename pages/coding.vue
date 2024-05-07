<template>
    <main class="bg-white font-noto relative overflow-hidden">
        <div aria-hidden
            class="bg-local bg-no-repeat bg-contain absolute top-[2500px] right-0 w-[520px] h-[520px] pointer-events-none"
            style="background-image: url('/img/ellipse-8.svg'); background-position: top right;" />
        <div aria-hidden
            class="bg-local bg-no-repeat bg-contain absolute top-[3700px] left-0 w-[520px] h-[520px] pointer-events-none"
            style="background-image: url('/img/ellipse-3.svg'); background-position: top left;" />
        <HomeNavbar />
        <HomeQueroHero />
        <section class=" mt-10 color-me">
            <div class="container">
                <div>
                    <h3 class="text-3xl lg:text-5xl text-[#113255] font-normal text-center">
                        Why should I join? 🚀
                    </h3>
                </div>
                <div>
                    <UiImageTextBlock direction="left" image-url="/img/visual-programing.png"
                        title="Visual Programming 💻"
                        text="Our classes use Scratch, a fun visual programming language, to introduce important coding concepts to your child and help them create their own animations, games and digital stories." />
                    <UiImageTextBlock direction="right" image-url="/img/expert-tutor.png"
                        title="Personalized Support by Expert Tutors"
                        text="Our brilliant tutors are experts at understanding your child’s needs – they’ll create a personalized learning plan to help them overcome any challenges and master coding concepts with ease." />
                    <UiImageTextBlock direction="left" image-url="/img/coding-time.png"
                        title="Coding Time is Fun Time 🎊"
                        text="Your child will be coding like a pro in no time as they enjoy and learn with the popular Minecraft game and our original gamified teaching materials." />
                </div>
            </div>
        </section>
        <section class="container my-16">
        </section>
        <section class="container my-16">
            <div class="lg:flex lg:justify-center lg:grid-cols-2 lg:gap-16 items-center my-16 p-3 relative">
                <div class="absolute top-[13.313rem] lg:top-0 right-0">
                    <img src="/img/brush-strokes.svg" alt="">
                </div>
                <div>
                    <NuxtImg class="block w-full select-none pointer-events-none lg:w-auto lg:h-[30rem]"
                        src="/img/enroll.png" alt="" />
                </div>
                <div>
                    <h4
                        class="text-[2rem] mb-3 lg:mb-8 mt-8 lg:mt-0 font-bold tracking-tight text-[#113255] text-balance">
                        How Do I Enroll?
                    </h4>
                    <div class="flex">
                        <div class="frameWorkItemFig shrink-0 relative mr-5">
                            <img src="/img/01.svg" alt="">
                        </div>
                        <div class="grow">
                            <p class="text-base font-normal text-[#555555] mb-2">Signup at <span class="underline">
                                    app.gradely.co/student</span> to access our <br></br> enrollment form
                            </p>
                            <UiButton secondary @click="openModal">
                                <div class="flex items-center gap-1 uppercase">
                                    Get Started
                                    <img src="@/assets/icons/arrow-right-line.svg" alt="">
                                </div>
                            </UiButton>
                        </div>
                    </div>
                    <div class="flex my-5">
                        <div class="frameWorkItemFig shrink-0 relative mr-5">
                            <img src="/img/02.svg" alt="">
                        </div>
                        <div class="grow">
                            <p class="text-base font-normal text-[#555555] mb-2">Fill out the form: It's quick and easy - just provide <br></br> some 
                                 basic information about your child. </p>
                        </div>
                    </div>
                    <div class="flex my-5">
                        <div class="shrink-0 relative mr-5">
                            <img src="/img/03.svg" alt="">
                        </div>
                        <div class="grow">
                            <p class="text-base font-normal text-[#555555] mb-2">We'll take care of the rest! Once you submit the form, <br></br> we'll be in touch to confirm your child’s spot and answer any questions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <UiModal :is-open="modal" @close="modal = false"/>
        </section>
        <section class="container my-16">
            <div class="">
                <h2 class="text-2xl lg:text-3xl mb-5 text-center font-semibold text-[#113255] tracking-tighter">
                    Frequently Asked Questions
                </h2>
                <div class="mx-auto lg:w-9/12 mb-5 space-y-3">
                    <UiFaq :faqs="faqs" />
                </div>
            </div>
        </section>
        <div class="container my-16">
            <HomeContactUs :summer="true" />
        </div>
        <HomeFooter />
    </main>
</template>

<script setup lang="ts">
import { urls } from "~/assets/urls";
import type { Testimony } from "~/components/home/testimonies.vue";
import type { Faq } from "~/components/ui/faq.vue";
import slider from "~/components/home/slider.vue";
import {ref} from 'vue';

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

let modal = ref(false)

const openModal = () => {
    modal.value = !modal.value 
}
</script>


<style scoped>
.nuxt-icon svg {
    margin-bottom: 0;
}

.color-me {
    background: linear-gradient(to bottom, #FFFFFF, #E4FBEF, #FFFFFF);
}

.frameWorkItemFig::before {
    height: 90px;
    content: "";
    display: block;
    width: 1px;
    background-color: #F7A43F;
    position: absolute;
    left: 50%;
    right: auto;
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 56px;
}

.frameWorkItemFig:last-child .frameWorkItemFig::before {
    display: none;
}
</style>