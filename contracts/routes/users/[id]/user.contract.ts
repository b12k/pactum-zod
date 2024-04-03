import { requestInfoSchema, userSchema } from '@schemas';
import z from 'zod';

export interface GetUserRequest {
  params: {
    id: string;
  };
}

export const getUserResponseSchema = z.object({
  info: requestInfoSchema,
  results: z.array(userSchema),
});

export type GetUserResponse = z.infer<typeof getUserResponseSchema>;
