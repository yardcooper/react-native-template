#!/usr/bin/env node

const ora = require("ora");
const { execSync } = require("child_process");

const spinner = ora("Executing post init script ");
execSync(`bundle install`);

new Promise((resolve) => {
  spinner.start();
  const projectPath = process.cwd();
  console.log(`Project created at ${projectPath}`);
  resolve();
})
  .then(() => {
    spinner.succeed();
  })
  .catch(() => {
    spinner.fail();
    throw new Error(
      "Something went wrong during the post init script execution"
    );
  });
