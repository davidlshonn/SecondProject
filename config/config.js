  const dbConfig = (env) => {
    const config = {
      "development": {
        "username": "root",
        "password": "Sat-news967",
        "database": "dev_jobs_db",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }, 
      "production": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
      }
    }

    return config[env];
  }

  module.exports = dbConfig;
  