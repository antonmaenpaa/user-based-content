const express = require('express');
const { MongoServerSelectionError } = require('mongodb');
const app = express();
const port = 5000;
const path = require('path');
const bcrypt = require('bcrypt');


const users = [ 
    {
        name: 'Anton',
        password: 'jeu'
    }
];


app.use(express.static(path.join(__dirname, '../client')));

app.use(express.json());

// View all posts
app.get('/', (req, res) => {    
    res.send(users)
})


app.post('/login', (req, res) => {
    
    res.send(users)
})

app.post('/register', (req, res) => {
    
    res.send(users)
})

app.delete('/logout', (req, res) => {
    
    res.send(users)
})

app.listen(port, () => {
    console.log(`is runnning on ${port}`)
})