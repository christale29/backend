import{check,validationResult}from "express-validator";


class Validator{

    static validateInput =(req,res,next)=>{
        const errors= validationResult(req);
        if (!errors.isEmpty()){
            const errorMessage =errors.errors.map((err) => err.msg);
            return res.status(400).json({message:errorMessage});
        }
        return next();

    };
    static newAccountRules(){
        return[
            check("email","email is invalid").trim().isEmail(),
            check("password","password is not strong").trim().isStrongPassword(),
            check("lastname","lastname should be valid").trim().isAlpha(),
            check("firstname","firstname should be valid").trim().isAlpha(),
            check("gender","gender should be valid among male,female,other").trim().isIn(["male","female","other"]),
        ]
    }


    static newTourRules(){
        return[
            check("description","null description").trim().isString(),
            check("seats","seats invalid").trim().isNumeric(),
            // check("images","images should be valid").trim().isAlpha(),
            check("datescheduled","datescheduled is invalid").trim().isDate(),
            check("datedue","datedue is invalid").trim().isDate(),
        ]
    }





}
export default Validator;