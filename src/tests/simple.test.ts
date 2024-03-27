import { describe, it } from '@jest/globals';
import { spec as pactumSpec, settings } from 'pactum';
import { ZodObject, type ZodRawShape } from 'zod'

import { getUserResponse } from '../contracts'

const zodSchemaAdapter: settings.JsonSchemaAdapter = {
  validate: (zodObject: ZodObject<ZodRawShape>, json: JSON) => {
    const parseResult = zodObject.safeParse(json);
    if (!parseResult.success) {
      const missmatches = parseResult.error.issues.reduce((acc, { path, message }) => {
        return {
          ...acc,
          [path.join('.')]: message,
        }
      }, {});
      return `💩\n${JSON.stringify(missmatches, null, 2)}`;
    }
  }
}

settings.setJsonSchemaAdapter(zodSchemaAdapter);

describe('It should run', () => {
  const spec = pactumSpec();
  it ('Should match the schema', async () => {
    await spec
      .get('https://randomuser.me/api')
      .expectJsonSchema(getUserResponse)
  })
});
