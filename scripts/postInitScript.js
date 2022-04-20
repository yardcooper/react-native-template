#!/usr/bin/env ts-node
import ora from 'ora';

const exec = util.promisify(require('child_process').exec);
const util = require('util');

const spinner = ora('Fastlane setup');

new Promise((resolve) => {
  spinner.start();
  await exec('cd ios && bundle install');
  resolve();
}).then(() => {
  spinner.succeed();
}).catch((error) => {
  spinner.fail(error);
  throw new Error('Something went wrong during the post init script execution');
});
