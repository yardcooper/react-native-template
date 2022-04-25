import ora from 'ora';

module.exports = {
  async success() {
    return new Promise((resolve) => {
      const spinner = ora("Executing post init script ");
      spinner.start();
      console.log("Template initialization successful ! 🚀\n");
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
