import { userSchema, requestInfoSchema } from '@schemas';
import type { BaseRequest } from '@contracts';

export interface GetUserRequest extends BaseRequest {
  params: {
    id: string;
  };
}

export const getUserResponseSchema = z.object({
  results: z.array(userSchema),
  info: requestInfoSchema,
});

export type GetUserResponse = Zod.infer<typeof getUserResponseSchema>;
