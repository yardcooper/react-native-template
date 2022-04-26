const ora = require('ora');

const spinner = ora('Executing post init script ');

module.exports = {
  async success() {
    return new Promise(async (resolve) => {
      spinner.start();
      console.log("\nTemplate initialization successful! 🚀");
      spinner.succeed();
      resolve();
    });
  },
};
