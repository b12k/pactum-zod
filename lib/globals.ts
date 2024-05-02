import { type Env, env } from './env';
import { createSpec as _createSpec } from './pactum';

declare global {
  // eslint-disable-next-line no-var
  var createSpec: typeof _createSpec;
  // eslint-disable-next-line no-var
  var env: Env;
}

global.createSpec = _createSpec;
global.env = env;
