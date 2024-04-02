import { settings } from 'pactum';

const zodSchemaAdapter: settings.JsonSchemaAdapter = {
  validate: (zodObject: Zod.ZodObject<Zod.ZodRawShape>, json: JSON) => {
    const parseResult = zodObject.safeParse(json);
    if (!parseResult.success) {
      const missmatches = Object.fromEntries(
        parseResult.error.issues.map(({ path, message }) => [
          path.join('.'),
          message,
        ]),
      );
      return `💩\n${JSON.stringify(missmatches, undefined, 2)}`;
    }

    return undefined;
  },
};

settings.setJsonSchemaAdapter(zodSchemaAdapter);
