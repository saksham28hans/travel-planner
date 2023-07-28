const router = require('express').Router();
const User = require('../model/User');

//Add to favourite
router.post('/favourite',async(req,res)=>{
    try {
        const user = await User.findById(req.body.id);
        if(user)
        {
        if(!user.favourite.includes(req.body.destination))
        {
        await user.updateOne({
            $push : { favourite : req.body.destination }}
         );
        return res.status(201).json("Destination was added to favourite list");
        }
        else
        {
            await user.updateOne({ $pull : {favourite:req.body.destination}})
            res.status(200).json("Destination was removed from favourite list")
        }
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router