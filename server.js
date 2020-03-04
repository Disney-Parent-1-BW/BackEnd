const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./auth/auth-router");

const usersRouter = require("./users/users-router");
const restricted = require("./auth/restricted-middleware");
const kidsRouter = require('./kids/kids-router');
const messagesRouter = require('./messages/messagesRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use('/api/users/kids', restricted, kidsRouter)
server.use("/api/users", restricted, usersRouter);
server.use('/api/acceptedRequests', messagesRouter)

server.get("/", (req, res) => {
    res.send(`<h2>Welcome to Disney!</h2>`);
})

module.exports = server;