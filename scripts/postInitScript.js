#!/usr/bin/env node

const ora = require('ora');
const { execSync, spawnSync } = require("child_process");

const spinner = ora('Fastlane setup');

new Promise((resolve) => {
  spinner.start();
  execSync('cd ios && bundle install');
  resolve();
}).then(() => {
  spinner.succeed();
}).catch((error) => {
  spinner.fail(error);
  throw new Error('Something went wrong during the post init script execution');
});
