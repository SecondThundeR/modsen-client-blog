import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().length(17),
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().includes("service_"),
    NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID: z.string().includes("template_"),
    NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID: z.string().includes("template_"),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
