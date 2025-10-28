import Task from "../models/TaskModel.js";

const getTask = async ( req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({msg:'ok', data: tasks}); 
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Tenemos un error :( en el servidor ', data: {}});
    }
}

const getTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        if( task){
            res.status(200).json({msg:'Tarea por ID ', data: task});
        } else {
            res.status(404).json({msg:'No se encontro la tarea', data: {}});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Tenemos un error :( en el servidor ', data: {}});
    }
}


const postTask = async(req, res) => {
    try {
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
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Tenemos un error :( en el servidor ', data: {}});
    }
   

}



export { getTask, postTask, getTaskById}