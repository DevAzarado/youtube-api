const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((con) => {
      console.log(`MongoDB connected with HOST: ${con.connection.host}`);
    })
    .catch((err) => {
      console.log(`MongoDB connected error: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDatabase;
