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
        <HomeTeacherHero />
        <section class="container mt-8">
            <UiImageTextBlock color="#F5F5F5" direction="left" label="Lessons" image-url="/img/lessons.png"
                title="Prepare for a lesson in minutes"
                text="Get ready-made lesson plans & presentations to prepare for lessons quickly. Share immersive videos, games and simulations." />
            <UiImageTextBlock color="#F5F5F5" size="15rem" direction="right" label="Assessment & Grading"
                image-url="/img/assessment.png" title="Never create homework or reports by hand again"
                text="Set homework, tests & exams from our 80,000+ question bank and get the auto-graded reports in one-click" />
            <UiImageTextBlock color="#F5F5F5" size="16rem" direction="left" label="Personalized Reporting"
                image-url="/img/personalized.png" title="Know when students are lagging behind"
                text="Track your students’ daily improvement & get lesson recommendations to intervene before it’s too late" />
            <UiImageTextBlock color="#F5F5F5" size="17rem" direction="right" label="Live Classes & Discussions"
                image-url="/img/live-class.png" title="Teach from Anywhere, Anytime"
                text="Hold engaging live classes and discussions outside your classroom walls, whenever you want" />
        </section>
        <section class="container my-16">
            <div class="bg-[#DBF5F8] rounded-[25px] p-8 relative">
                <div class="absolute -top-12">
                    <img class="w-1/2" src="/img/blue-stokes.png" alt="">
                </div>
                <div class="flex flex-col lg:flex-row items-start justify-evenly">
                    <div>
                        <img src="/img/lesson-teacher.png" class="lg:max-w-lg" alt="">
                    </div>
                    <div class="mt-16">
                        <h3 class="text-2xl lg:text-3xl font-bold text-[#113255]">
                            How can I teach with Gradely?
                        </h3>
                        <div class="flex items-center justify-between my-8 p-5 bg-[#FFFFFFB2] rounded-2xl">
                            <p class="text-sm lg:text-base text-[#555555] font-normal">Whether you teach in a school or on
                                your<br></br> own, you can sign up to start using <br></br> Gradely for free here</p>
                            <img class="w-6 lg:w-12" src="@/assets/icons/arrow-right-line.svg" alt="">
                        </div>
                        <div>
                            <UiButton secondary>
                                SIGN UP FOR FREE
                            </UiButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container my-16">
            <div>
                <div class="mb-10">
                    <h5 class="text-3xl lg:text-5xl font-bold text-[#113255]">
                        What Our <br></br> Teachers Say
                    </h5>
                </div>
                <div class="flex flex-col-reverse lg:flex-row w-full items-center gap-14">
                    <div class="min-w-80 w-80">
                        <img src="/img/blue-quote.svg" alt="">
                        <p class="mt-4 text-xl text-[#353535] font-normal">This is the testimonial excerpt from the
                            parent testimonial video to the right. It circles round each highlighted parent.</p>
                        <div class="mt-7">
                            <h6 class="text-xl font-bold text-[#113255]">Oluyemisi Ademiju</h6>
                            <p class="text-base font-normal text-[#757575]">Glisten Intl. College, Abuja</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between gap-4">
                        <div class="image-card">
                            <img class="" src="/img/testimonial-1.png" alt="">
                            <button>
                                <div class="circle">
                                    <div class="triangle-right"></div>
                                </div>
                            </button>
                            <button class="hidden lg:block">
                                <div class="space">
                                    <div class="circle">
                                        <div class="triangle-right"></div>
                                    </div>
                                    <p class="hidden lg:block">Watch Video</p>
                                </div>
                            </button>
                        </div>
                        <div class="image-card">
                            <img class="" src="/img/testimonial-2.png" alt="">
                            <button>
                                <div class="circle">
                                    <div class="triangle-right"></div>
                                </div>
                            </button>
                            <button class="hidden lg:block">
                                <div class="space">
                                    <div class="circle">
                                        <div class="triangle-right"></div>
                                    </div>
                                    <p class="hidden lg:block">Read Article</p>
                                </div>
                            </button>
                        </div>
                        <div class="image-card">
                            <img class="" src="/img/testimonial-3.png" alt="">
                            <button>
                                <div class="circle">
                                    <div class="triangle-right"></div>
                                </div>
                            </button>
                            <button class="hidden lg:block">
                                <div class="space">
                                    <div class="circle">
                                        <div class="triangle-right"></div>
                                    </div>
                                    <p class="hidden lg:block">Watch Video</p>
                                </div>
                            </button>
                        </div>
                  
                    </div>

                </div>
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
                        <div class="mt-8 lg:my-3">
                            <h5 class="text-2xl lg:text-3xl text-[#113255] font-normal">Need Help?</h5>
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
                                    <NuxtLink :href="urls.contact_phone_ng"
                                        class="text-[#113255] text-xl font-bold text-balance">
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
                                    <NuxtLink :href="urls.contact_whatsapp"
                                        class="text-[#113255] text-xl font-bold text-balance">
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
                                    <NuxtLink :href="urls.contact_email2"
                                        class="text-[#113255] text-xl font-bold text-balance">
                                        hello@gradely.co
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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

.image-card{
    position: relative;
    cursor: pointer;
    width: 100%;
    max-width: 15rem;
}

.image-card img{
    width: 100%;
    height: auto;
    filter: grayscale(100%);
}

.image-card img:hover{
    filter: grayscale(0%)
}

.image-card img:hover button:hover{
    filter: grayscale(0%)
}

.image-card button{
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
} 

.image-card button .space{
    display: flex;
    gap: 4px;
    background-color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 1.875rem;
    min-width: 11rem; 
}

.image-card .space .circle{
    width: 1.5rem;
    height: 1.5rem;
    background-color: #D5D5D5;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-card .circle{
    width: 1.5rem;
    height: 1.5rem;
    background-color: #D5D5D5;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-card:hover .space .circle{
    background-color: #F7A43F;
}

.space .triangle-right{
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
	border-left: 10px solid white;
	border-bottom: 5px solid transparent;
}

.circle .triangle-right{
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
	border-left: 10px solid white;
	border-bottom: 5px solid transparent;
}

.image-card .space p {
    font-size: 15px;
    color: #959595;
    font-weight: 400;
}

.image-card:hover .space p{
 color: #353535;
}

</style>