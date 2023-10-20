const express=require('express')
const router=express.Router()
const requirelogin=require('../middleware/requirelogin');
const rides  = require('../models/rides');
// offer ride
router.post("/OfferRide", requirelogin, async (req, res) => {
    const { vehicle, owner, gender, fare, from, to } = req.body;

    if (!vehicle || !owner || !gender || !fare || !from || !to) {
        return res.status(400).json({ error: "Please add all the fields" });
    }

    try {
        const ride = new rides({ vehicle,owner, gender, fare, from, to  });
        const result = await ride.save();
        res.status(200).json({ msg: "Post Created Successfully", data: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while saving the ride" });
    }
});
// showall rides

router.get('/allrides',requirelogin, async (req, res) => {
    try {
        const allRides = await rides.find(); // Query the database to retrieve all rides
        res.status(200).json({ result: allRides })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching rides' });
    }
    // ride details
    
});
router.get('/ride/:rideId', requirelogin, async (req, res) => {
    const rideId = req.params.rideId;

    try {
        const ride = await rides.findById(rideId);

        if (!ride) {
            return res.status(404).json({ error: 'Ride not found' });
        }

        res.status(200).json({ result: ride });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching ride details' });
    }
});
module.exports=router