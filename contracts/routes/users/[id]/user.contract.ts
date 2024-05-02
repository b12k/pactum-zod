import z from 'zod';

export interface GetUserRequest {
  params: {
    id: string;
  };
}

export const getUserResponseSchema = z.string();

export type GetUserResponse = z.infer<typeof getUserResponseSchema>;
