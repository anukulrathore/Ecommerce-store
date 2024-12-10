import express from 'express'
import { config } from 'dotenv'
import bodyParser from 'body-parser'

const app = express()
config()
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}.`);
})
