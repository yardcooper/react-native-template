#!/usr/bin/env node
const { rm } = require('fs').promises;
const { success } = require("./template/scripts/printSuccess");

success().then(() => {
  await rm('./scripts', { recursive: true });
})
