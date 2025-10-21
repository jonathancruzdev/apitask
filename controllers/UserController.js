import bcrypt from "bcrypt"
import dotenv from "dotenv"
import User from "../models/UserModel.js";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const getUsers = async ( req, res) => {
    const users = await User.find();
    res.status(200).json({msg:'ok', data: users});
}

const postUser = async(req, res) => {
    const { name, email, password } = req.body;
    if( !name) {
        res.status(400).json({msg: 'Falta el nombre'});
    }

    if( !email) {
        res.status(400).json({msg: 'Falta el Email'});
    }

    if( !password) {
        res.status(400).json({msg: 'Falta el Password'});
    }

    const passwordHash = await bcrypt.hash( password, 10);

    const user = new User( { name, email, password: passwordHash });
    console.log( {user});
    await user.save();
    res.status(202).json({
        msg: 'Usuario Registrado', 
        data: {_id: user._id, fecha: user.created } 
    });


}

export { getUsers, postUser}