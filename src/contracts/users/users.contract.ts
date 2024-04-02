import z from 'zod';
import { userSchema, requestInfoSchema } from '@schemas';

export interface GetUsersRequest {
  params: {
    id: string;
  };
}
export const getUsersResponseSchema = z.object({
  results: z.array(userSchema),
  info: requestInfoSchema,
});

export type GetUsersResponse = z.infer<typeof getUsersResponseSchema>;
