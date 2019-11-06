const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router')

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
    res.send('testing...!!!')
});

module.exports = server;