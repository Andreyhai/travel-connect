const { Pool } = require('pg');

const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdbname',
  password: 'yourpassword',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Подключение к PostgreSQL успешно'))
  .catch(err => console.error('Ошибка подключения к PostgreSQL:', err));