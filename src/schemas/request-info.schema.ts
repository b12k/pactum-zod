export const requestInfoSchema = z.object({
  seed: z.string().optional(),
  results: z.number(),
  page: z.number(),
  version: z.string(),
});

export type RequestInfo = Zod.infer<typeof requestInfoSchema>;
