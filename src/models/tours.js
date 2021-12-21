import mongoose from 'mongoose';

const tourSchema= new mongoose.Schema(
    {
        // firstname: String,
        // lastname:String,
        description:{
            type:String,
            required:true,
        },
        seats:{
            type:Number,
            required:true,
        },
        images:
        [ 
            {
            type:String,
            },
        ],
        datescheduled:{
            
            type:Date,
        
        },
        datedue:{
            type:Date,
            // enum:["male","female","other"],
        },
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
        }

    },
    {
        timestamps:true,
    });
    tourSchema.pre(/^find/,function(next){
        this.populate({
            path:"user",
        select:"lastname email address"
    });
        next();
    })
    const tour =mongoose.model('Tour',tourSchema);

    export default tour;