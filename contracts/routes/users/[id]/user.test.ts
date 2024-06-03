import { createSpec } from '@lib';

import { type GetUserRequest } from './user.contract';

describe('CRUD /users', () => {
  it('Should not get user by id', async () => {
    await createSpec<GetUserRequest>({
      method: 'GET',
      path: '/api/{id}',
      request: {
        params: {
          id: 123,
        },
      },
    }).expectStatus(404);
  });
});
