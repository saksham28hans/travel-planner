const router  = require('express').Router();
const Destination = require('../model/Destination')

//Create a Destination
router.post('/',async(req,res)=>{
    const newDestination = new Destination(req.body);
    try {
        const savedDestination = await newDestination.save();
        res.status(201).json(savedDestination);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Fetch all Destinations
router.get('/',async(req,res)=>{
    try {
        const destinations = await Destination.find();
       res.status(200).json(destinations);
   } catch (error) {
      res.status(500).json(error);
   }
})

//Update Rating
router.put('/rating/:id',async(req,res)=>{
    try {
        const destination = await Destination.findById(req.params.id);
        if(!destination)
        {
            return res.status(404).json("Destination Not Found");
        }
        const updateDest = await Destination.findByIdAndUpdate(req.params.id,{
            $set : {
                rating : destination.rating +req.body.id,
                totalRating : destination.totalRating + 1
            }
        },{new : true});
        return res.status(202).json(updateDest);
    } catch (error) {
        return res.status(500).json(error);
    }
})

//Update Review
router.put('/review/:id',async(req,res)=>{
    try {
        const destination = await Destination.findById(req.params.id);
        if(!destination)
        {
            return res.status(404).json("Destination Not Found");
        }
        await destination.updateOne({
            $push : { reviews : {
                username : req.body.username,
                message : req.body.message
            }}}
         );
        return res.status(201).json("Review for the destination was added");
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router