const express = require("express");

//router

const server = express();

server.use(express.json());
//server.use('', );

module.exports = server;