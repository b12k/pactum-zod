import { userSchema, requestInfoSchema } from '@schemas';

export const getUsersResponseSchema = z.object({
  results: z.array(userSchema),
  info: requestInfoSchema,
});

export type GetUsersResponse = Zod.infer<typeof getUsersResponseSchema>;
