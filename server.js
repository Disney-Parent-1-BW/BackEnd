const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./auth/auth-router");

const usersRouter = require("./users/users-router");
const restricted = require("./auth/restricted-middleware");
const requestRouter = require("./requests/requests-router");
const kidsRouter = require('./kids/kids-router');
const messagesRouter = require('./messages/messagesRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use('/api/users/kids', restricted, kidsRouter)
server.use("/api/users", restricted, usersRouter);
<<<<<<< HEAD
server.use('/api/acceptedRequests', messagesRouter)
=======
server.use("/api/requests", requestRouter);
>>>>>>> c0a5991d61c9f6471b6e4514031f5fc70997f55f

server.get("/", (req, res) => {
    res.send(`<h2>Welcome to Disney!</h2>`);
})

module.exports = server;