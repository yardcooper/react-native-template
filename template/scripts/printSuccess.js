module.exports = {
  async success() {
    return new Promise(async (resolve) => {
      console.log("\nTemplate initialization successful ! 🚀\n");
      resolve();
    });
  },
};
