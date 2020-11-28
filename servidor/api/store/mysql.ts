import mysql from 'mysql';

import config from './../../config';

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let connection: mysql.Connection;

function handleCon() {
    connection = mysql.createConnection(dbconf);

    connection.connect((err) => {
        if (err) {
            console.error('[db err]', err);
            setTimeout(handleCon, 2000);
        } else {
            console.log('DB Connected!');
        }
    });

    connection.on('error', err => {
        console.error('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon();
        } else {
            throw err;
        }
    })
}

handleCon();

function list(table: any) {
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

function get(table:any, id:any) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

function insert(table:any, data:any) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, [data], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function multipleInsertion(table:any, data:any[]) {

    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} VALUES ?`, [data], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}


function update(table:any, data:any, id: number) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}


function drop(table:any,  id: number) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE id=?`, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function query(table:any, query:any, join:any) {
    let joinQuery = '';
    if (join) {
        const key = Object.keys(join)[0];
        const val = join[key];
        joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
    }

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ${table}.?`, query, (err, res) => {
            if (err) return reject(err);
            resolve(res[0] || null);
        })
    })
}

export default {
    list,
    get,
    insert,
    update,
    drop,
    query,
    multipleInsertion,
};