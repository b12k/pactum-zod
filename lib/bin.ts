#!/usr/bin/env node
import { run } from 'jest';
import { chdir } from 'node:process';

chdir(__dirname);
run();
