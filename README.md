npm install ws-test-server

usage: 

_back-end (nodejs ES6):

import wsTestBegin from 'ws-test-server'

// specify a custom numeric port number to communicate
wsTestBegin(6061)

   ---OR---

// uses process.env.WS_TEST_PORT from your local .env file
// OR will default to port 7071 if none specified in .env
wsTestBegin() 


NOTE: when you open the socket from your front-end code (below), a prompt will appear like the following:

Enter JSON:

... and you will be able to enter JSON objects on a single line like so:

Enter JSON: { "house" : { "squareFeet" : 3000, "stories" : 3, "bedrooms" : 4, "bathrooms" : 2.5 }

... pressing enter will send the data, formatted as JSON.stringify(), to your front-end code where you can parse it as you wish, testing variable input to your front-end impelementation.

here is an extremely basic example of a front-end implementation:

_front-end (react js / vanilla js ES6):

// REACT JS
// use the WebSocket API to initialize a connection to the server
// started by ws-test-server module using WS_TEST_PORT env variable
const ws = new WebSocket(`ws://yoursite.com/${process.env.WS_TEST_PORT}`)

   ---OR---

// VANILLA JS
// use the WebSocket API, but since the environment variable is
// unavailable, provide the test port manually / retrieved via
// API call
const ws = new WebSocket(`ws://yoursite.com/${known_port_value}`)

   ---FINALLY---

// REACT JS or VANILLA JS
// just use the WebSocket as you need to for your implementation.
// the following is just an example of a simple usage:

ws.addEventListener('open', (e) => {
    console.log(`socket opened on port ${process.env.WS_TEST_PORT}`)
})

ws.addEventListener('message', (e) => {
    console.log('socket received data: %s', e.data))
})

ws.addEventListener('close', (e) => {
    console.log('socket closed')
})


happy testing!

Roy McClanahan