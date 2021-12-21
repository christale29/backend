import  express  from "express";
import   bodyParser from "body-parser";
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "./src/routes/userRoutes";
import tourRouter from "./src/routes/tourRoutes";
// import { parse } from "path/posix";
dotenv.config("./.env");


const app = express();


app.use(bodyParser.json());
app.use("/user",userRouter);
app.use("/tour",tourRouter);
app.use("/",(req,res)=>res.status(200).json({
    message:"this is tour APi"}
));
const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then(()=> console.log("Database connected succesful"));
const port=process.env.PORT;

app.listen(port,()=>{
    console.log('server is running on port 3030')
})
 export default app;