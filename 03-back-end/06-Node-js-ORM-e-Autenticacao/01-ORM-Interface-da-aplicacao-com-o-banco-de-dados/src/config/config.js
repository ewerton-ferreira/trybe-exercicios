require('dotenv').config();

const config = { 
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'aula_6_1',
    host: process.env.MYSQL_HOST || 'localhost' || '127.0.0.1',
    dialect: 'mysql',
}

module.exports = { 
  development:config,
  test:config,
  production:config,
};
