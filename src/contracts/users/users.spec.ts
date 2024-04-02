import { getUserResponseSchema, type GetUserRequest } from '@contracts';

describe('/users', () => {
  it('Get all', async () => {
    await createSpec<GetUserRequest>({
      method: 'GET',
      path: '/api',
    })
      .expectStatus(200)
      .expectJsonSchema(getUserResponseSchema);
  });
});
