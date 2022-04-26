module.exports = {
  async success() {
    return new Promise((resolve) => {
      console.log("\nTemplate initialization successful! 🚀");
      resolve();
    })
      .catch(() => {
        throw new Error(
          "Something went wrong during the post init script execution"
        );
      });
  },
};
