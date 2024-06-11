const express = require("express");
const cors = require("cors");

const db = require('./services/db');
const helper = require('./helper');

let app = express();
app.use(cors());
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", async (req, res) => {
    try{
        res.json(await test());
    } catch(err) {
        console.error(err.message);
    }
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

async function test(){
    const test = await db.query("SELECT * FROM grupo11.usuario;");
    const data = helper.emptyOrRows(test);
    
    return data;
}