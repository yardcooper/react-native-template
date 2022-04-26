#!/usr/bin/env node
const { rm } = require('fs').promises;
const { success } = require("./template/scripts/printSuccess");

const script = async () => {
  await success();
  await rm('./template/scripts', { recursive: true });
}

script();
