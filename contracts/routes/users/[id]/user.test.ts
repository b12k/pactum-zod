import { type GetUserRequest, getUserResponseSchema } from './user.contract';

describe('CRUD /users', () => {
  it('GET: /users', async () => {
    await createSpec<GetUserRequest>({
      method: 'GET',
      path: '/api',
    })
      .expectStatus(200)
      .expectJsonSchema(getUserResponseSchema);
  });
});
