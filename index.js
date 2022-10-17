const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const form = require("./routes/form");
const corsMiddleware = require("./middleware/cors.middleware");

const app = express();
const PORT = config.get("serverPort");
const db = config.get("dbUrl");

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/form", form);

const start = async () => {
    try {
        await mongoose.connect(db);
        app.listen(PORT, () => {
            console.log("Server start on port ", PORT)
        });
    } catch (error) {

    }
}

start();