const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const {ExpressPeerServer} = require('peer');
const port = process.env.PORT || 3000;


const peerServer = ExpressPeerServer(server,{
  debug: true,
  path: '/mypeer'
})
app.use(peerServer);


const DIST_DIR = path.join(__dirname, '../dist'); 
app.use(express.static(DIST_DIR));

//const HTML_FILE = path.join(DIST_DIR, 'index.html'); 


app.get('/', (req, res) => {
 // res.status(200).send('Hello World!');
  res.sendFile(__dirname + '/index.html')
 });

 server.listen(port);
 console.log('App listening on port: ' + port);
