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
        <HomeNavbar />
        <ParentHero />
        <section class="container text-center my-16">
            <div class="mt-20">
                <h3 class="text-[2rem] lg:text-5xl lg:leading-[79.2px] mb-4 font-bold tracking-tighter text-[#113255]">
                    What can my child do on <br></br> Gradely?
                </h3>
            </div>
        </section>
        <section class="container mt-8">
            <UiImageTextBlock color="#F5F5F5" direction="left" label="learn" image-url="/img/pretest.png"
                title="Take assessment and know learning gaps"
                text="Practice difficult topics with our recommended assessments & video lesson library anywhere, anytime." />

        </section>
        <section class="my-16">
            <div class="container mb-8">
                <div class="rounded-[40px] px-4 py-2 w-40 mt-4 lg:mt-0 bg-[#F5F5F5]">
                    <p class="uppercase text-center text-base text-[#113255] font-bold">Video Lessons</p>
                </div>
                <div>
                    <h4 class="text-xl lg:text-3xl mb-4 font-bold text-[#113255]">Learn difficult topics with video lessons</h4>
                    <p class="text-base lg:text-xl font-normal text-[#555555]">Find well illustrated and interactive videos
                        lessons on different topics to help you learn in a fun and engaging way</p>
                </div>
            </div>

            <div class="flex flex-col mask">
             <HomeParentsSlider></HomeParentsSlider>
             <HomeParentsSlider class="flex-row-reverse"></HomeParentsSlider>
            </div>
        </section>
        <section class="container my-16">
            <div class="flex flex-col">
                <UiImageTextBlock color="#F5F5F5" direction="right" label="Tutoring" 
                    image-url="/img/tutoring.png"
                    :learn="urls.tutoring" title="Get to 100% mastery with 1-on-1 tutor sessions"
                    text="Join group or private online tutor sessions for more help in your home work, special exams, or to ask questions on difficult academic concepts." />
                <UiImageTextBlock color="#F5F5F5" direction="left" label="Exam Prep" 
                    image-url="/img/exam-prep.png"
                    :learn="urls.exams" title="Prepare for exams"
                    text="Practice with mock exams, accurate past questions & explainer videos to get yourself exam-ready for Common Entrance, WAEC, JAMB, and other national & international examinations." />
            </div>
        </section>
        <section class="container my-16">
            <div class="text-center mb-12">
                <h3 class="text-2xl mb-4 font-semibold text-[#113255]">
                    Choose your Plan
                </h3>
                <p class="text-base font-normal text-[#555555]">With as low as ₦6,000 per month, your child will
                    unlimited access to all of Gradely’s amazing <br></br> video lessons and interactive quizzes,
                    personalised for
                    your child.</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-7 mb-24">
                <div class="w-96 border border-[#D5D5D5] rounded-[15px]">
                    <div class="bg-[#FFDCDE] rounded-t-[15px] w-full py-3.5">
                        <p class="uppercase text-base text-[#113255] font-bold text-center">1 Month</p>
                    </div>
                    <div class="text-center pt-5 pb-8">
                        <h4 class="text-3xl font-bold text-[#113255] pb-1">₦6,000</h4>
                        <p class="text-xs text-[#757575]">Per User</p>
                    </div>
                    <div class="text-center mb-5">
                        <button class="hidden mx-auto bg-[#FCEACF] border border-[#FAA017] py-2 px-16 rounded-[20px] hover:bg-[#FAA017]">
                            Subscribe Now
                        </button>
                    </div>
                </div>
                <div class="w-96 border border-[#D5D5D5] rounded-[15px]">
                    <div class="bg-[#DBF5F8] rounded-t-[15px] w-full py-3.5">
                        <p class="uppercase text-base text-[#113255] font-bold text-center">3 Months</p>
                    </div>
                    <div class="text-center pt-5 pb-8">
                        <h4 class="text-3xl font-bold text-[#113255] pb-1">₦15,000</h4>
                        <p class="text-xs text-[#757575]">Per User</p>
                    </div>
                    <div class="text-center mb-5">
                        <button class="hidden mx-auto bg-[#FAA017] border py-2 px-16 rounded-[20px] hover:bg-[#11BDCF]">
                            Subscribe Now
                        </button>
                    </div>
                </div>
                <div class="w-96 border border-[#D5D5D5] rounded-[15px]">
                    <div class="bg-[#FFDCDE] rounded-t-[15px] w-full py-3.5">
                        <p class="uppercase text-base text-[#113255] font-bold text-center">1 Year</p>
                    </div>
                    <div class="text-center pt-5 pb-8">
                        <h4 class="text-3xl font-bold text-[#113255] pb-1">₦40,000</h4>
                        <p class="text-xs text-[#757575]">Per User</p>
                    </div>
                    <div class="text-center mb-5">
                        <button class="hidden mx-auto bg-[#FCEACF] border border-[#FAA017] py-2 px-16 rounded-[20px] hover:bg-[#FAA017]">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container my-16">
            <div class="text-center">
                <h3 class="text-2xl mb-4 font-semibold text-[#113255]">
                    What parents say about Gradely Tutoring
                </h3>
            </div>
            <div class="mx-auto lg:w-full mb-20">
                <HomeTestimonies :testimonies="testimonies" />
            </div>
        </section>
        <section class="container my-16">
            <div class="">
                <h2 class="text-2xl lg:text-3xl mb-5 text-center font-semibold text-[#113255] tracking-tighter">
                    Frequently Asked Questions
                </h2>
                <div class="mx-auto lg:w-9/12 mb-5 space-y-3">
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
       <UiJoinCard/>
        <HomeFooter />
    </main>
</template>

<script setup lang="ts">
import ParentHero from "~/components/home/parentHero.vue";
import type { Testimony } from "~/components/home/testimonies.vue";
import type { Faq } from "~/components/ui/faq.vue";
import { urls } from "~/assets/urls";

const faqs: Faq[] = [
    {
        question: "What does my child need to use Gradely?",
        answer: "All you need to get started is a computer or tablet that has access to the internet.",
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
    // {
    //     question: "Which subjects do you cover?",
    //     answer: "We cover Math, English, Science, Verbal and Non-Verbal Reasoning for Key stage 1 and 2, while we cover all major subjects for Key stage 3 and GCSE.",
    // },
    // {
    //     question: "What is the rate of your classes?",
    //     answer: "£10 per hour for key stage 1 to 2 and £12 per hour for GCSE"
    // }
]

const testimonies: Testimony[] = [
  {
    name: "Femi Ibiwoye",
    location: "Newport Southwales,UK",
    text: "Mayokun looks forward to every class with her tutors. I will say she is now more confident in reading big grammars, 100% in English, and 80% in math.",
    keyStage: "Key Stage 2",
    percenatage: 93,
    image: "/img/testimony-1.png"
  },
  {
    name: "Esther Umoh",
    location: "Newport Southwales,UK",
    text: "I would say there's been a 50% improvement for both English and math, and the teachers are really great. Their patience with Fikayo's excesses is commendable. I appreciate them",
    keyStage: "Key Stage 2",
    percenatage: 93,
    image: "/img/testimony-2.png"
  },
  {
    name: "Lanre Oshilaja",
    location: "Lagos, Nigeria",
    text: "She has improved greatly in Mathematics",
    keyStage: "A Levels",
    percenatage: 93,
    image: "/img/testimony-3.png"
  }
];
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

.mask {
    mask-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 14.5%, rgb(0, 0, 0) 81.5%, rgba(255, 255, 255, 0) 100%);
}
</style>