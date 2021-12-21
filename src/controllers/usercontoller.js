import user from "../models/user";
import userInfo from "../models/user";
import bcrypt from "bcrypt"
import TokenAuth from "../helpers/tokenAuth";

class userController{
    // create user in db

    static async createUser(req,res){
        const hashPassword= bcrypt.hashSync(req.body.password,10)
        req.body.password=hashPassword;
        const user=await userInfo.create(req.body);
        if(!user){
            return res
            .status(404)
            .json({error:"user not registered"})
        }
        return res
        .status(200)
        .json({message:"user created succesfully",data:user});
    }
    // get all user
    static async getALLUser(req,res){
        const user=await userInfo.find();
        if(!user){
            return res
            .status(404)
            .json({error:"no user registered"})
        }
        return res
        .status(200)
        .json({message:"successful retrived user",data:user});
    }
    // get one user
    static async getOneUser(req,res){

        const user = await userInfo.findById(req.params.id);

        if(!user){
            return res
            .status(404)
            .json({error:"user not found"})
        }
        return res
        .status(200)
        .json({message:"user found successful",data:user})
    }
    // deleteOneUser
    static async deleteOneUser(req,res){

        const user = await userInfo.findByIdAndDelete(req.params.id);

        if(!user){
            return res
            .status(404)
            .json({error:"user not deleted"})
        }
        return res
        .status(200)
        .json({message:"user deleted successful",data:user})
    }
    static async userLogin(req,res){
        const user= await userInfo.findOne({email:req.body.email})

        if(!user){
            return res.status(401).json({error:"user not found!first sign up"})
        }
        if (bcrypt.compareSync(req.body.password,user.password)){
            user.password=null;
            const token=TokenAuth.tokenGenerator({user:user});
              
            return res.status(200).json({message:"successfully logged in",token:token});
        }
        return res.status(400).json({error:"wrong password"});
    }
}
export default userController;