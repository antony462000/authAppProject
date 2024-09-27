const express = require("express")
const app = express()
const port = 3000
const router = require('./src/router')

app.listen(port,()=> {
    console.log(`Localhost listening at http://localhost:${port}/`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// app.get("/", (req, res) => {
//     res.send("Hello hei")
// })

app.use('/user',router)
