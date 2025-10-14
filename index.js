import express from "express";
import dotenv from "dotenv";
dotenv.config()
const PORT = process.env.PORT;

const app = express();

app.use('/',express.static('public'));

app.get('/api/tasks', (req, res) => {
    const lista = [
        {id:1, descripcion: 'Pasear el Perro', fecha: '14-10-2025'},
        {id:2, descripcion: 'Estudiar NodeJS', fecha: '18-10-2025'},
        {id:3, descripcion: 'Ir al Cine', fecha: '18-10-2025'}
    ];

    res.status(200).json({msg:'ok', data: lista});
})



app.listen( PORT, () => console.log(`Servidor en el puerto ${PORT}`))