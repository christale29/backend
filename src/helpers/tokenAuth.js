import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { param } from "express-validator";



dotenv.config();

class TokenAuth{
    // Generate Token
    // @Static
    // @param{Object} data Object
    // @member of TokenAuth
    // @return{String}token
 
static tokenGenerator(data){
    const token=jwt.sign(data,process.env.JWT_KEY);
    return token;
} 
static decodeToken(token){
    const data=jwt.verify(token,process.env.JWT_KEY);
    return data;
} 

}
export default TokenAuth