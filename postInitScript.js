#!/usr/bin/env node

const { execSync } = require("child_process");

// Install Fastlane iOS
const projectPath = process.cwd();
execSync(`cd "${projectPath}/ios"`);
console.log('Script complete')
