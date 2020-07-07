const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
app.use(cookieParser())
// bodyParser is now part of express, doesn't need to be installed separately
app.use(bodyParser())

mongoose.connect("mongodb://localhost:27017/mernauth", { useNewUrlParser : true, useUnifiedTopology: true }, () => {
    console.log("Successfully connected to database")
})


const userRouter = require("./routes/User")
app.use("/user", userRouter)




app.listen(5000, () => {
    console.log("Express server started on server 5000")
})