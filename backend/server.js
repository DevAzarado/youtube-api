const app = require("./app");
const connectDatabase = require("./config/database");

const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });

//Connect to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server starded on Port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
