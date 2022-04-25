#!/usr/bin/env node

const { execSync, spawnSync } = require("child_process");

// Install Fastlane iOS
const projectPath = process.cwd();
execSync(`cd "${projectPath}/ios bundle install"`);
console.log('Script complete')
