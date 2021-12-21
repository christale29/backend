import  express  from "express";
import userController from "../controllers/usercontoller";
import dataChecker from "../middleware/datachecker";
import Validator from "../middleware/validator"
// import validator from "../middleware/validator"


const userRouter=express.Router();

userRouter.post("/register",Validator.newAccountRules(),
Validator.validateInput,
dataChecker.isEmailExist,
userController.createUser)
// userRouter.get("/all",userController.getALLUser)
userRouter.post("/login",userController.userLogin)
userRouter.post("/register",userController.createUser);
userRouter.get("/all",userController.getALLUser);
userRouter.get("/:id",userController.getOneUser);
userRouter.delete("/:id",userController.deleteOneUser);









export default userRouter;