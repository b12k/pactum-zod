import { createGqlSpec } from '@lib';

import {
  type SomeQueryVariables,
  someQueryResponseSchema,
} from './some-query.contract';

describe('Rick & Morty', () => {
  const spec = createGqlSpec<SomeQueryVariables>({
    variables: {
      filter: {
        name: 'Rick',
      },
      page: 1,
    },
  });
  it('should do something', async () => {
    await spec.expectStatus(200).expectJsonSchema(someQueryResponseSchema);
  });
});
