// import express from "express";
// import {mysql} from "mysql";

const express = require('express');
const path = require('path');
const config = require('./config.js');
const database = require('./modules/database.js');


const app = express();

database.conectionDB(config.database);

// root site get client/index.js
app.use(express.static(path.join(__dirname, 'client')));



// app.get('/getData', (req, res) => {    
//     res.send(database.getRecords())
// })




app.get('/formdata', (req, res) => {
    console.log(req)
    res.send(req.query)
})

app.listen('3000', () => {
    console.log("Server started on port 3000")
})