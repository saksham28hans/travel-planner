const mongoose = require('mongoose');

const DestinationSchema =new mongoose.Schema({
    landmark : {type:String,required:true,unique:true},
    city : {type:String,required:true},
    img : {type:String,default:""},
    popularAttractions : {type:Array},
    expenses : {type:String},
    reviews : {type:Array},
    rating : {type:Number,default:0},
    totalRating : {type:Number,default:0}
    },
     {timestamps:true}
  );

  module.exports = mongoose.model("Destination",DestinationSchema);