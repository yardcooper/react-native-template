#!/usr/bin/env ts-node

const ora = require('ora');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

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
