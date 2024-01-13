const express = require('express')
const cors = require('cors')
const pythonRouter = require('./python_router.js')
const javascriptRouter = require('./javascript_router.js')
const connectDB = require('./connect_db.js')
const app = express()
const port = 5000

app.use(
    cors({
        origin: "http://localhost:3000",
    })
)

connectDB()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/python', pythonRouter)
app.use('/javascript', javascriptRouter)

app.listen(port, () => {
    console.log('Listening on port 5000')
})