# Description
**ws-test-server** is an easy-to-install WebSocket server with a configurable port that takes **line-by-line JSON input from the server's STDIN stream**, sending each line through the connected socket. Client must initiate WebSocket Handshake before the prompt to enter JSON data will appear on the back-end console. This is usually done through the [standard WebSocket API documented here.](https://developer.mozilla.org/docs/Web/API/WebSockets_API) Once connected, the ws-test-server will appear with the prompt:

    Enter JSON:

Each line is treated as a separate (and complete) JSON object. JSON parsing is performed on the input before it is converted back to a string, ensuring proper input formatting. For instance, a line like the following could be entered (press enter to send the line):

    Enter JSON: { "house" : { "squareFeet" : 3000, "stories" : 3, "bedrooms" : 4, "bathrooms" : 2.5 }

Once sent, remember to use JSON.parse() on your front-end, since WebSockets only send string data by default and objects must be deserialized. 

## Piping data to ws-test-server

It is also very easy to pipe file input to a server-side app running ws-test-server. Consider an example app.js which runs the ws-test-server program loop (by calling wsTestBegin()). The bash shell command to pipe an input file (where each line is a completed JSON object with quotes ("") around each property name) would look like the following:

    cat file.txt | node app.js

Read on for installation instructions and examples of basic usage!

# Installation

    npm install ws-test-server

# Basic usage

There are two main parts to the basic usage of ws-test-server: back-end and front-end. The server itself runs on the back-end with a program loop to retrieve JSON data line-by-line, while the front-end code must intiiate the WebSocket connection to the back-end WebSocket Server for it to work.

# Basic usage

## Back-end (Node JS)

### Import the function wsTestBegin from 'ws-test-server'

    import wsTestBegin from 'ws-test-server'

### Three ways to initialize the server-side input loop:

1. Specify the port when calling wsTestBegin:

       wsTestBegin(6061)
       
2. (React or Vanilla JS) Set environment variable WS_TEST_PORT=[your port]. Access this value via process.env.WS_TEST_PORT in both front and back-end code to share the common port number:

       // .env in your local environment file
       WS_TEST_PORT=6061

3. Simply call wsTestBegin() with no parameters. The module will default to using port 7071:
    
        wsTestBegin() 

## Front-end

### React JS

    // use the WebSocket API to initialize a connection to the server
    // started by ws-test-server module using WS_TEST_PORT env variable
    const ws = new WebSocket(`ws://yoursite.com/${process.env.WS_TEST_PORT}`)

### Vanilla JS

    // use the WebSocket API, but since the environment variable is
    // unavailable, provide the test port manually / retrieved via
    // API call
    const ws = new WebSocket(`ws://yoursite.com/${known_port_value}`)

### Then just use your WebSocket (React & Vanilla JS)

    ws.addEventListener('open', (e) => {
        console.log(`socket opened on port ${process.env.WS_TEST_PORT}`)
    })

    ws.addEventListener('message', (e) => {
        console.log('socket received data: %s', e.data))
    })

    ws.addEventListener('close', (e) => {
        console.log('socket closed')
    })



Feel free to contact me if you have questions. Happy testing!

Roy McClanahan