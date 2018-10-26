#!/usr/bin/env node

/**
 * Module dependencies.
 */
const WebSocketServer = require('ws');
const SocketServer = require('ws').Server;
let express = require('express');


// подключенные клиенты
let clients = [];


let  app = require('../app');
let  debug = require('debug')('nodeCms:server');
let  http = require('http');

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/* Websocket movies */

const wss = new SocketServer({ server });

//init Websocket ws and handle incoming connect requests
wss.on('connection', function connection(ws) {
    console.log("connection ...");

    //on connect message
    ws.on('message', function incoming(message) {

        ws.on('message', message => {
            wss.clients.forEach(client => {
                if(client.readyState === WebSocketServer.CLOSED){
                    ws.on("close", function() {
                        console.log("websocket connection close")
                    })
                }
                else{
                    console.log("\x1b[42m", message);
                    client.send(message);
                }

            })
        });

    });

   // ws.send('message from server at: ' + new Date());
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
console.log("\x1b[42m", "Server start on 3000 port");
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
