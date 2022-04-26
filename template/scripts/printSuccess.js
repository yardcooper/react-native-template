const chalk = require('chalk');

module.exports = {
  async success() {
    return new Promise((resolve) => {
      console.log(`\n${chalk.green('✔')} Template initialization successful! 🚀`);
      resolve();
    })
      .catch(() => {
        throw new Error(
          "Something went wrong during the post init script execution"
        );
      });
  },
};
