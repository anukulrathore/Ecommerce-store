//Imports
import express from 'express'
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import router from './routes'

//Variables
config()
const app = express()
const PORT = process.env.PORT;
const mainRouter = router;

//Middlewares
app.use(bodyParser.json());
app.use("/api/v1", mainRouter);


app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}.`);
})

export default app;