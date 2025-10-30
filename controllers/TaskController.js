import Task from "../models/TaskModel.js";

const getTask = async ( req, res) => {
    try {
        const id = req.user.id;
        const tasks = await Task.find({ user: id});
        res.status(200).json({msg:'ok', data: tasks}); 
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Tenemos un error :( en el servidor ', data: {}});
    }
}

const getTaskById = async (req, res) => {
    try {
        const _id = req.params.id;
        const userId = req.user.id;
        console.log( { userId})
        const task = await Task.findOne({_id, user: userId});
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
        const { description } = req.body;
        if( !description) {
            res.status(400).json({msg: 'Falta la descripción'});
        }

        const user = req.user.id;
        const task = new Task( { description, user });
        //console.log( {task});
        await task.save();
        res.status(202).json({
            msg: 'Tarea Creada', 
            data: {_id: task._id, created: task.created } 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Tenemos un error :( en el servidor ', data: {}});
    }
}

const putTask = async ( req, res) => {
    try {
        const _id = req.params.id;
        const user = req.user.id;
        const { description, completed } = req.body;
        const task = await Task.findOneAndUpdate(
            { _id, user }, 
            { 
                ... ( description != undefined ? { description }: {}), 
                ... ( completed != undefined ? { completed }: {}) 
            },
            { new: true}
        );
        // Si no se encontro la tarea o no es del usuario
        if( !task) {
            res.status(404).json( { msg: 'No se encontro la Tarea', data: {}})
        }

        res.status(200).json( { msg: 'Tarea Actualizada', data: task});

    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Tenemos un error :( en el servidor ', data: {}});
    }
}

const deleteTask = async ( req, res) => {
    try {
        const _id = req.params.id;
        const user = req.user.id;
        const task = await Task.findOneAndDelete( { _id, user } );
        // Si no se encontro la tarea o no es del usuario
        if( !task) {
            res.status(404).json( { msg: 'No se encontro la Tarea', data: {}})
        }

        res.status(200).json( { msg: 'Tarea Eliminada', data: {}})

    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Tenemos un error :( en el servidor ', data: {}});
    }
}

export { getTask, postTask, getTaskById, putTask, deleteTask}