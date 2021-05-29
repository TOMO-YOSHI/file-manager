require("dotenv").config();

import promise_mysql from 'promise-mysql';

const connectionConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    // port: process.env.MYSQL_PORT,
    port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : NaN,
    multipleStatements: true
};

export const mysql = promise_mysql.createPool(connectionConfig);