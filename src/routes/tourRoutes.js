import  express  from "express";
// import tourController from "../controllers/tourcontoller";
import tourController from "../controllers/tourcontroller";
import Validator from "../middleware/validator";
import verifytoken from "../middleware/verifytoken"
import verifyAccess from "../middleware/verifyaccess"


const tourRouter=express.Router();
tourRouter.post("/register",
verifytoken,
verifyAccess("admin"),
Validator.newTourRules(),
Validator.validateInput,
tourController.createTour)
// tourRouter.post("/create", tourController.createTour);
tourRouter.get("/all",tourController.getALLTours);
tourRouter.get("/:id",tourController.getOneTour);
tourRouter.delete("/:id",tourController.deleteOneTour);







export default tourRouter;