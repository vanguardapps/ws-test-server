ws-test-server

this package will create a test WebSocket server that reads lines from stdin formatted as JSON (with quotes around property names). Environment variable WS_TEST_PORT (process.env.WS_TEST_PORT) is used to specify the port value. Default value for WS_TEST_PORT is 7071. you can either choose to let the package inherit your .env values via your proprietary implementation of process.env, or you can pass in an explicit path to your .env file and it will read the WS_TEST_PORT value from there.

next, configure your front-end to connect via the same port using WS_TEST_PORT. now you can simply enter object notation into a repeating prompt and send it to your connected WebSocket on the front end.