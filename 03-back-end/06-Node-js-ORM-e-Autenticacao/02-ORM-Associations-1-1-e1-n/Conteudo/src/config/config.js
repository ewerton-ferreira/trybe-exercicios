require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  dialect: 'mysql'
}

module.exports = {
  development: {
    ...config,
    database: 'employees_associations_development',
  },
  test: {
    ...config,
    database: 'employees_associations_test',
  },
  production: {
    ...config,
    database: 'employees_associations_production',
  },
};