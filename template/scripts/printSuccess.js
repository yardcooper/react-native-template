const chalk = require('chalk');

// TODO: Update with 'ora' usage when CLI package is updated.
// See: https://github.com/react-native-community/cli/issues/1492#issuecomment-1109474814
module.exports = {
  async success() {
    return new Promise((resolve) => {
      console.log(
        '\033[2A',
        `\n${chalk.green('✔')} Template initialization successful! 🚀`,
      );
      resolve();
    }).catch(() => {
      throw new Error(
        'Something went wrong during the post init script execution',
      );
    });
  },
};
