// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
require('dotenv').config();

const server = require('./server.js');

const port = process.env.PORT || 4000;
const greeting = process.env.GREETING;

server.listen(port, () => {
    console.log(`${greeting} server is running on http://localhost${port}`)
})