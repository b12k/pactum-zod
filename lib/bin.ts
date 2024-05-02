#!/usr/bin/env node
/*global console*/
import { program } from 'commander';
import jest from 'jest';
import { snakeCase } from 'lodash-es';
import updateNotifier from 'update-notifier';

import packageJson from '../package.json' assert { type: 'json' };

type CliOptions = {
  baseUrl?: string;
  logLevel?: string;
  version: boolean;
};

updateNotifier({
  pkg: packageJson,
  shouldNotifyInNpmScript: true,
  updateCheckInterval: 0,
}).notify({
  defer: false,
});

const options = program
  .option('-u, --base-url <baseUrl>', 'Contract tests base url')
  .option('-v, --version', 'Show current version')
  .option(
    '-l, --log-level <logLevel>',
    'Pactum log level: VERBOSE, TRACE, DEBUG, INFO (default), WARN, ERROR, SILENT',
  )
  .helpOption('-h, --help', 'Display this help')
  .parse()
  .opts<CliOptions>();

if (options.version) {
  const { name, version } = packageJson;

  console.log(`${name}: v${version}`);
  process.exit();
}

Object.entries(options).forEach(([key, value]) => {
  const variableName = snakeCase(key).toUpperCase();
  process.env[variableName] = value as string;
});

await jest.run([]);
