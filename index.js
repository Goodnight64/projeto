const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('../Projeto/src/database/database')
const app = express();
const routes = require('../Projeto/src/routes/routes');

app.use(express.json());

app.use('/sistema', routes);

app.use((req, res, next) =>{
   res.status.apply(status.NOT_FOUND).send("page not found");
});

app.use((req, res, next) =>{
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
});

sequelize.sync({force: false}).then ( () =>{
    const port = 3000;
    app.set("port", port);
    const server = http.createServer(app);
    server.listem(port);
});