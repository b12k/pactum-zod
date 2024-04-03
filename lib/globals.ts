/* eslint-disable no-var,vars-on-top */
import { type Env, env } from './env';
import { createSpec as _createSpec } from './pactum';

declare global {
  var createSpec: typeof _createSpec;
  var env: Env;
}

global.createSpec = _createSpec;
global.env = env;
