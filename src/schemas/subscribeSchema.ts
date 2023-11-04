import { z } from "zod";

export const SubscribeSchema = z.object({
  email: z.string().email(),
});

export type SubscribeSchemaType = z.infer<typeof SubscribeSchema>;
