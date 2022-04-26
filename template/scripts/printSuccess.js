const ora = require("ora");

module.exports = {
  async success() {
    const spinner = ora("Executing post init script ");
    return new Promise((resolve) => {
      spinner.start();
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
