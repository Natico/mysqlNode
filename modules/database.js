const mysql = require('mysql');
const config = require('../config');
const db = mysql.createConnection(config.database);


module.exports = {

    // Create Conenction 
    conectionDB: () => {
        db.connect((err, connection) => {
            if (err) throw err;
            console.log("Mysql conneted ....")
        })
    },

    // Create DB 
    createDB: () => {
        let sql = "CREATE DATABASE nodemysql"
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Database created ...')
        })
    },

    // Create table
    createTable: () => {
        let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Posts table created ...')
        })
    },

    // Insert
    insertRecord: () => {
        let post = {
            title: 'Post One',
            body: 'This is post number one'
        };
        let sql = 'INSERT INTO posts SET ?';
        let query = db.query(sql, post, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Post 1 added...');
        });
    },

    // Select
    getRecords: () => {
        let sql = 'SELECT * FROM posts';
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);  
            return results         
        });
        return query;
    },

    // Select single
    getRecord: () => {
        let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    },

    // Update post
    updateRecords: () => {
        let newTitle = 'Updated Title';
        let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Post updated...');
        });
    },

    // Delete post
    deleteRecords: () => {
        let newTitle = 'Updated Title';
        let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Post deleted...');
        });
    },

}
