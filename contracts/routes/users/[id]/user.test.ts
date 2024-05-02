import { type GetUserRequest, getUserResponseSchema } from './user.contract';

describe('CRUD /users', () => {
  it('GET: /users', async () => {
    await createSpec<GetUserRequest>({
      method: 'GET',
      path: '/api/{id}',
      request: {
        params: {
          id: 'foo',
        },
      },
    })
      .expectStatus(404)
      .expectJsonSchema(getUserResponseSchema);
  });
});
