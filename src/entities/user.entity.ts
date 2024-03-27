import z from 'zod';

export const userEntity = z.object({
    gender: z.enum(['female', 'dog']),
    name: z.object({
        title: z.string(),
        first: z.string(),
        last: z.string(),
    })
});

export type UserEntity = z.infer<typeof userEntity>;