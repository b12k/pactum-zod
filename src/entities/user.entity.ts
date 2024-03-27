// "gender": "female",
//       "name": {

//             "title": "Miss",
//             "first": "Asta",
//             "last": "Kristensen"
import z from 'zod';

export const userEntity = z.object({
    gender: z.enum(['female', 'male']),
    name: z.object({
        title: z.string(),
        first: z.string(),
        last: z.string(),
        full: z.string(),
    })
});

export type UserEntity = z.infer<typeof userEntity>;