const app = require("./src/app");
const sequelize = require("./src/database/db");
// const sequelize = require("./src/database/db");
require("./src/models/orden");
const PORT = 3001;

async function main() {
  try {
    await sequelize.sync({ alter: true });
    console.log("ya estassssss");
    app.listen(PORT, () => {
      console.log("listening on pozrt", PORT);
    });
  } catch (error) {
    console.error("nooooo la cagaste", error);
  }
}

main();
