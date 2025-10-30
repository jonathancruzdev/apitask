import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const auth = (req, res, next ) => {
    const data = req.headers.authorization || "";
    const token = data.startsWith("Bearer ") ? data.slice(7) : null

    //console.log( {token});
    if(!token) {
        return res.status(401).json({ msg: 'Token Requerido'});
    }
    // Verificamos el token
    try {
        const payload = jwt.verify( token, SECRET_KEY );
        //console.log({ payload} )
        const { id, name } = payload;
        req.user = { id, name };
        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({ msg: 'Token Invalido'});
    }



}


export default auth;