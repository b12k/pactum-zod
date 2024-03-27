import z from 'zod';

import { userEntity, infoEntity } from '../entities'

export const getUserResponse = z.object({
    results: z.array(userEntity),
    info: infoEntity,
});

export type GetUserResponse = z.infer<typeof getUserResponse>;