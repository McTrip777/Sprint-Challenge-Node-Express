// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
require('dotevn').config();

const server = require('./server');

const port = process.env.PORT || 4000;
const greeting = process.env.GREETING;

server.listen(port, () => {
    console.log(`${greeting} ${port}`)
})