const colyseus = require("colyseus");
// const Monitor = require('colyseus-monitor').Monitor;
const http = require("http");
const express = require("express");
const path = require("path");
const QuizzRoom = require('./rooms/QuizzRoom');

const app = express();
const gameServer = new colyseus.Server({
  server: http.createServer(app)
});
// const monitor = new Monitor({ server: gameServer, express: app });

gameServer.register("quizz", QuizzRoom);

gameServer.listen(9090);


app.use('/dist', express.static(path.join(__dirname+'/dist')));

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});