import { createSpec } from '@lib';

import { type GetUsersRequest, getUsersResponseSchema } from './users.contract';

describe('/users', () => {
  it('Get all', async () => {
    await createSpec<GetUsersRequest>({
      method: 'GET',
      path: '/api',
    })
      .expectStatus(200)
      .expectJsonSchema(getUsersResponseSchema);
  });
});
