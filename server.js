const express = require('express');

const actionRouter = require('./data/helpers/actionModel.js');
const projectRouter = require('./data/helpers/projectModel.js');

const server = express();

server.use(express.json());

server.get('/', ( req, res ) => {
    try {
        res.status(200).send('Hello World!!!');
      } catch (error) {
        console.error('\nERROR', error);
        res.status(500).json({ error: 'Cannot find data' });
      }
})

server.use('/action', actionRouter);
server.use('/project', projectRouter);

module.exports = server;