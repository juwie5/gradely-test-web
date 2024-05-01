<template>
    <div class="w-full relative bg-local bg-no-repeat bg-contain bg-[#F5FEF9]"
        style="background-image: url('/img/bgWave.png');">
        <div class="container mt-20">
            <div class="grid lg:grid-cols-2 w-full">
                <div class="mt-24">
                    <h2
                        class="text-3xl xl:text-[2.5rem] lg:w-full text-[#113255] xl:leading-[65.38px]  tracking-tight font-normal mb-5 text-balance">
                        Excel at your Common Entrance, WAEC, IGCSE and SAT exams with Gradely
                    </h2>
                    <div>
                        <UiButton secondary>
                            <div class="uppercase">
                                Start Preparing
                            </div>
                        </UiButton>
                    </div>

                </div>
                <div class="flex items-center mt-16">
                    <img src="/img/examPrepHero.png" fit="inside" class="w-[30rem]" />
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