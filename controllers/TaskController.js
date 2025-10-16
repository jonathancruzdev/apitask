import Task from "../models/TaskModel.js";

const getTask = async ( req, res) => {
    const tasks = await Task.find();
    res.status(200).json({msg:'ok', data: tasks});
}

const postTask = async(req, res) => {
    const { descripcion } = req.body;
    if( !descripcion) {
        res.status(400).json({msg: 'Falta la descripción'});
    }

    const task = new Task( { descripcion });
    console.log( {task});
    await task.save();
    res.status(202).json({
        msg: 'Tarea Creada', 
        data: {_id: task._id, fecha: task.fecha } 
    });


}

export { getTask, postTask}