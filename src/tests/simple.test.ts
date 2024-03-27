import { describe, it } from '@jest/globals';
import { spec as pactumSpec } from 'pactum';

import { env } from '../env';

const url = (path: string) => `${env.BASE_URL}${path}`;

describe('It should run', () => {
  const spec = pactumSpec();

  it('Should get posts', () => {
    spec.get(url('/postz/{id}'))
  });
  it('should get first post', () => {
    spec.withPathParams('id', '1').withJson({});
  });

  it('should receive a response', async () => {
    await spec.toss();
  });

  it('should have a status code of 200', () => {
    spec.response().to.have.status(200);
  });

  it('should have a user id of 1', () => {
    spec.response().to.have.json('userId', 1);
  });
});
