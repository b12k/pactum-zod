import z from 'zod';

const envSchema = z.object({
  BASE_URL: z.string().url(),
  LOG_LEVEL: z
    .enum(['VERBOSE', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'SILENT'])
    .optional()
    .default('INFO'),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
