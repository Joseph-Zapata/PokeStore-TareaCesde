require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
};

module.exports = { config };
