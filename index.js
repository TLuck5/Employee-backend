

const express = require("express")
const app = express()
const port = 5000
const mongoDB = require("./db")
const cors = require("cors")

app.use(cors())

mongoDB().then(() => {

    app.use(express.json())

    app.use("/api", require("./routes/employeeRoutes"))

    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})

