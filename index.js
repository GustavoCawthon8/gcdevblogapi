const express = require('express');
const cors = require("cors");
const database = require("./config/db");

const routes = require("./routes");

const app = express();
const port = process.env.port || 3009;

/**
 * MIDDLEWARES
*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(routes)

/**
 * ROUTES
*/
app.get("/", (_, res)=>{
    res.send("API WORKING");
})

database.sync({force: false}).then(()=>{
    app.listen(port, ()=>{
        console.log(`Run serve https://localhost:${port}`)
    })
}).catch(e => console.log(`Error ${e}`))