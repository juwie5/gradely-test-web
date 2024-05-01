<template>
    <div class="image-background">
        <div class="container mt-20">
            <div class="flex flex-col w-full">
                <div class="flex flex-col items-center justify-center pt-28 lg:pt-72">
                    <h1 class="text-3xl lg:text-5xl text-center text-[#113255] font-bold leading-[2.719rem] lg:leading-[4.35rem]">Fun, Personalized
                        Programming Classes <br></br> for Students Aged 8-13</h1>
                    <p class="text-base lg:text-xl text-center text-[#353535] mt-2.5 font-normal">Equip your kids with valuable
                        coding skills and watch them thrive in <br></br> school and life with our fun and engaging
                        coding classes</p>
                    <div class="flex flex-col lg:gap-12 lg:flex-row items-center mt-5">
                        <div>
                            <img src="@/assets/icons/queroLogo.svg">
                        </div>
                        <button @click="openModal" class="bg-[#FAA017] hover:bg-[#11BDCF] px-5 py-3.5 transition-all rounded-[2.188rem]">
                            <div class="flex items-center justify-center gap-2.5">
                                <p class="uppercase text-base font-bold text-[#113255]">Get Started </p>
                               <img src="@/assets/icons/arrow-right-line.svg" alt="">
                            </div>
                        </button>
                    </div>
                </div>
                <div class="flex items-center mt-16">
                    <div class="mx-auto relative w-full rounded-lg aspect-video">
                        <div class="hidden lg:flex items-center justify-center">
                            <iframe width="970" height="540"
                                src="https://www.youtube.com/embed/eNc9wjDKzLs?si=iHfQccBLE7v526WU&rel=0"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                style="border-radius:8px"></iframe>
                        </div>
                        <div class="hidden lg:hidden md:flex items-center justify-center">
                            <iframe width="760" height="460"
                                src="https://www.youtube.com/embed/eNc9wjDKzLs?si=iHfQccBLE7v526WU&rel=0"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                style="border-radius:8px"></iframe>
                        </div>

                        <div class="flex items-center justify-center md:hidden">
                            <iframe width="342" height="208"
                                src="https://www.youtube.com/embed/eNc9wjDKzLs?si=iHfQccBLE7v526WU&rel=0"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                style="border-radius:8px"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <UiModal :is-open="modal" @close="modal = false"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"
import { urls } from "~/assets/urls";
import {ref} from 'vue';

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
 
let modal = ref(false)

const openModal = () => {
    modal.value = !modal.value 
}
</script>

<style scoped>
.image-background{
    width: 100%;
    position: relative;
    background-attachment: local;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    top: -8rem;
    background-image: url('/img/queroHeader.png');
}

@media only screen and (max-width: 768px) {
    .image-background{
        background-image: url('/img/queroMobileHeader.png');
        top: -2rem;
    }
}

</style>