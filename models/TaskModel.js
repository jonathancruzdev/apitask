import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    descripcion: {
        type: String,
        required: true
    },
    completada: {
        type: Boolean,
        default: false
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});


const Task = mongoose.model('Task', taskSchema);
export default Task;