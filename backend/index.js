const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config()


const db_connection = require("./database/index");

const authRoute = require("./routes/auth/auth");
const userRoute = require("./routes/user/user");
const forumRoute = require("./routes/forum/forum");
const blogRoute = require("./routes/blog/blog");
const accommodationRoute = require("./routes/accommodation/accommodation")

const PORT = process.env.PORT;



db_connection()





const app = express();
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);


app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/forum", forumRoute);
app.use("/api/blog", blogRoute);
app.use("/api/accommodation", accommodationRoute);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})