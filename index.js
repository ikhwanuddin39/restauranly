const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
mongoose

    .connect("mongodb://localhost:27017/uts", { useNewUrlParser: true })

// .connect("mongodb+srv://ikhwan:pass@cluster0.3frhu.mongodb.net/uts?retryWrites=true&w=majority&ssl=true", { useNewUrlParser: true })

.then(() => {
    const app = express();
    app.use(express.static(path.join(__dirname, "public")));
    app.use(express.json()); // new
    app.use("/api", routes);
    app.listen(5000, () => {
        console.log("Server has started!");
    });
});