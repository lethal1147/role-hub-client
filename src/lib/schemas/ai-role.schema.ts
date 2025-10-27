import { z } from "zod";

export const createAIRoleSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters"),
  tags: z
    .array(z.string())
    .min(1, "Please select at least one tag")
    .max(5, "You can select up to 5 tags"),
  context: z
    .string()
    .min(20, "Context must be at least 20 characters")
    .max(2000, "Context must not exceed 2000 characters"),
  responseFormat: z
    .string()
    .min(10, "Response format must be at least 10 characters")
    .max(1000, "Response format must not exceed 1000 characters"),
});

export type CreateAIRoleFormData = z.infer<typeof createAIRoleSchema>;
