import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
var bodyParser = require('body-parser');

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const uri: string = `mongodb://localhost:27017/courses`
const options = { useNewUrlParser: true, useUnifiedTopology: false }
mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })
