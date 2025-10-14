import express from "express";
import dotenv from "dotenv";
dotenv.config()
const PORT = process.env.PORT;

const app = express();

app.use('/',express.static('public'));


app.listen( PORT, () => console.log(`Servidor en el puerto ${PORT}`))