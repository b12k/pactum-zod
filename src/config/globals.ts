/* eslint-disable no-var,vars-on-top */

import _z from 'zod';
import { createSpec as _createSpec } from './create-spec';

declare global {
  var z: typeof _z;
  var createSpec: typeof _createSpec;
}

global.z = _z;
global.createSpec = _createSpec;
