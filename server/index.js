const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const WebSocket = require('ws');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../')));

let server = app.listen(1337, function() {
  console.log(
    '       A..A      \"Meownsieur,\n',
    '\\    ( \'x\')        server is up and running.\"\n',
    ' \\(      )                                  -french cat\n',
    '   VV  VV'
  );
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message);
  });

  ws.send('websocket connection established on server side');
});