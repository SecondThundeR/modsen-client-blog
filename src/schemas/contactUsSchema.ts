import { z } from "zod";

export const contactUsSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  query: z
    .enum(["query-default", "query-1", "query-2", "query-3"])
    .refine((value) => value !== "query-default"),
  message: z.string().min(1).max(1000),
});

export type ContactUsSchemaType = z.infer<typeof contactUsSchema>;
