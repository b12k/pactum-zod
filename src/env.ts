import z from 'zod';

const zEnv = z.object({
    BASE_URL: z.string().url()
});

export type Env = z.infer<typeof zEnv>;
export const env = zEnv.parse(process.env);
