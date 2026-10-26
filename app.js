
const express = require("express");
const os = require("os");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Hello! My Node.js app is running in Docker!",
        hostname: os.hostname(),
        status: "success"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/info", (req, res) => {
    res.json({
        app: "Node.js Docker Practice App",
        port: PORT,
        hostname: os.hostname()
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
