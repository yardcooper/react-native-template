#!/usr/bin/env node
const { rm } = require('fs').promises;
const { success } = require("./template/scripts/printSuccess");

const script = async () => {
  await success();
  await rm('./scripts', { recursive: true });
}

script();
