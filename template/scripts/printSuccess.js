const ora = require("ora");

const spinner = ora("Executing post init script ");

module.exports = {
  async success() {
    return new Promise((resolve) => {
      console.log("\nTemplate initialization successful! 🚀");
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
  },
};
