import { z } from "zod";
import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const userSchema = z.object({
    phone_number: z.string().refine((value) => /^(?:(?:\+|0{0,2})44\s?|(?:\((?=\+?44\))\+?44\)|0)?)\s?(?:(?:\d{5}\s?\d{5})|(?:\d{4}\s?\d{6})|(?:\d{3}\s?\d{4}\s?\d{4})|(?:\d{5}\s?\d{4})|(?:\d{4}\s?\d{3}\s?\d{3})|(?:\d{3}\s?\d{3}\s?\d{4}))$/.test(value), "Provide a valid UK phone number"),
  })

  const result = await readValidatedBody(event, (body) => userSchema.safeParse(body));
  if (!result.success) {
    return result.error.issues
  }

  let leadRecorded = false;

  try {
    const prisma = new PrismaClient()
    await prisma.lead.upsert({
      where: { phone_number: result.data.phone_number },
      update: { phone_number: result.data.phone_number },
      create: { phone_number: result.data.phone_number },
    })

    leadRecorded = true;
  } catch (error) {
    console.error(error);
  }

  return { ok: leadRecorded }
})