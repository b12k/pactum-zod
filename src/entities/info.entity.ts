import z from 'zod';

export const infoEntity = z.object({
    seed:z.string().optional(),
    results: z.number(),
    page: z.number(),
    version: z.string(),
});

export type InfoEntity = z.infer<typeof infoEntity>;