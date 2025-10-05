import express from 'express';
import aiRoutes from "./routes/ai.routes.js";
import cors from 'cors'


// server created ! not started.
const app = express()       

app.use(express.json())         // for parsing from body of website ( or postman )

app.use(cors())

// demo route for testing
app.get('/', (req, res) => {
    res.send(`Hello World`)
})

app.use('/ai', aiRoutes)

export default app