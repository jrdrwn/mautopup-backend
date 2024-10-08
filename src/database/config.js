require('dotenv').config();

module.exports = {
  development: {
    dialect: 'mysql',
    ...(process.env.DATABASE_URL
      ? { url: process.env.DATABASE_URL }
      : {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        }),
    // models: [],
    // autoLoadModels: true,
  },
};
