const mysql = require('mysql2/promise');
const express = require('express');
require('console-stamp')(console, 'dd.mm.yyyy HH:MM:ss.l');

const port = 8082;
const app = express();

app.get('/', (req,res)=>{
    res.render("index.hbs");
});

app.get('/upload', (req,res) => {
    res.render("upload.hbs");
});
app.post('/upload',(req,res)=>{
    
})

app.use('/public',express.static('public'));

app.listen(port, (req,res) => {
    
});

const sqlConnectionData = {
    host: `localhost`,
    user: `root`,
    database: `photo_gallery_prod`,
    password: ``
};