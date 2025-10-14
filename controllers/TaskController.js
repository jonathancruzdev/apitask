import Task from "../models/TaskModel.js";

const getTask = async ( req, res) => {

    const tasks = await Task.find();
    const lista = [
        {id:1, descripcion: 'Pasear el Perro', fecha: '14-10-2025'},
        {id:2, descripcion: 'Estudiar NodeJS', fecha: '18-10-2025'},
        {id:3, descripcion: 'Ir al Cine', fecha: '18-10-2025'},
        {id:4, descripcion: 'Ver una serie 2', fecha: '20-10-2025'}

    ];

    res.status(200).json({msg:'ok', data: tasks});
}

const postTask = async(req, res) => {
    const { descripcion } = req.body;
    if( !descripcion) {
        res.status(400).json({msg: 'Falta la descripción'});
    }

    const task = new Task( { descripcion });
    await task.save();
    res.status(202).json({msg: 'Tarea Creada', id: task._id});


}

export { getTask, postTask}