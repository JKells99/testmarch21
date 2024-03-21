const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'Test123',
password: 'jordan1234',
port: 5432,
});

pool.connect((err) => {
    if (err) {
    console.error('Error connecting to the database', err);
    } else {
    console.log('Connected to the PostgreSQL database bcrypt_qap3_inf');
    }
});

module.exports = pool;