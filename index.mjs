import * as dotenv from 'dotenv'
dotenv.config()

import { WebSocketServer } from 'ws'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const wss = new WebSocketServer({ port: 7071 })

console.log(process.env.WS_TEST_PORT)

wss.on('connection', async ( ws ) => {
    rl.on('line', (input) => {
        if (input === 'exit') {
            ws.close()
            rl.close()
            process.exit()
        }

        try {
            ws.send(JSON.stringify(JSON.parse(input)))
        } catch (err) {
            ws.send(err.message)
        }

        rl.prompt()
    })

    rl.setPrompt('Enter JSON: ')

    rl.prompt()
})





