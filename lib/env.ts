import z from 'zod';

const envSchema = z.object({
  BASE_GQL_URL: z.string().url().optional().or(z.literal('')),
  BASE_REST_URL: z.string().url().optional().or(z.literal('')),
  BASE_URL: z.string().url().optional().or(z.literal('')),
  LOG_LEVEL: z
    .enum(['VERBOSE', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'SILENT'])
    .optional()
    .default('INFO'),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
