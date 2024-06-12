const express = require("express");
const cors = require("cors");
const userData = require("./routes/userData");
const login = require("./routes/login");

let app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", async (req, res) => {
    res.json({ message: 'ok' });
});

app.use("/userData", userData);

app.use("/logindata/", login);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});