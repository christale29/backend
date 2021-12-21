import tour from "../models/tours";
import tourInfo from "../models/tours";

class tourController{
    // create user in db

    static async createTour(req,res){
        req.body.user=req.user._id;
        const tour=await tourInfo.create(req.body);
        if(!tour){
            return res
            .status(404)
            .json({error:"tour not registered"});
        }
        return res
        .status(200)
        .json({message:"tour created succesfully",data:tour});
    }
    static async getALLTours(req,res){
        const tour=await tourInfo.find();
        if(!tour){
            return res
            .status(404)
            .json({error:"no tours registered"})
        }
        return res
        .status(200)
        .json({message:"successful retrived tours",data:tour});
    }
    // getOneTour
    static async getOneTour(req,res){

        const tour = await tourInfo.findById(req.params.id);

        if(!tour){
            return res
            .status(404)
            .json({error:"tour not found"})
        }
        return res
        .status(200)
        .json({message:"tour found successful",data:tour})
    }
     // deleteOneTour
     static async deleteOneTour(req,res){

        const tour = await tourInfo.findByIdAndDelete(req.params.id);

        if(!tour){
            return res
            .status(404)
            .json({error:"tour not deleted"})
        }
        return res
        .status(200)
        .json({message:"tour deleted successful",data:tour})
    }
}
export default tourController;