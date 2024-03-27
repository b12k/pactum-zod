import { describe, it, expect } from '@jest/globals';
import { spec as pactumSpec } from 'pactum';

import { getUserResponse } from '../contracts'


describe('It should run', () => {
  const spec = pactumSpec();
  it ('Should match the schema', async () => {
    await spec
      .get('https://randomuser.me/')
      .expect(ctx => {
          const { success } = getUserResponse.safeParse(ctx.res.json);
          return expect(success).toBe(true);
      });
  })
});
