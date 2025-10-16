import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        default: 'cliente'
    },
    created: {
        type: Date,
        default: Date.now
    }
});


const Task = mongoose.model('Task', taskSchema);
export default Task;