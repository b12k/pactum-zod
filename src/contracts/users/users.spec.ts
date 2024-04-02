import { createSpec } from '@config';
import { getUsersResponseSchema, type GetUsersRequest } from './users.contract';

describe('/users', () => {
  it('Get all', async () => {
    await createSpec<GetUsersRequest>({
      method: 'GET',
      path: '/api',
      request: {
        params: {
          id: '123',
        },
      },
    })
      .expectStatus(200)
      .expectJsonSchema(getUsersResponseSchema);
  });
});
