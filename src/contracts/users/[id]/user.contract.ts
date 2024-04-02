import z from 'zod';
import { userSchema, requestInfoSchema } from '@schemas';

export interface GetUserRequest {
  params: {
    id: string;
  };
}

export const getUserResponseSchema = z.object({
  results: z.array(userSchema),
  info: requestInfoSchema,
});

export type GetUserResponse = z.infer<typeof getUserResponseSchema>;
