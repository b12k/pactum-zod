export const userSchema = z.object({
  gender: z.enum(['female', 'male']),
  name: z.object({
    title: z.string(),
    first: z.string(),
    last: z.string(),
  }),
});

export type User = Zod.infer<typeof userSchema>;
