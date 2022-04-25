#!/usr/bin/env node

// To handle CLI commands)
// const { execSync } = require("child_process";

import ora from "ora";

const spinner = ora("Executing post init script ");

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
