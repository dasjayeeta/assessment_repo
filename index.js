// Task 1: Basic Node.js Server

import express from "express";
import bodyParser from "body-parser";
import router from "./route.js"

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(router)
//
app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, (req, res) => {
    console.log(`Sever listening on port ${PORT}`)
})
