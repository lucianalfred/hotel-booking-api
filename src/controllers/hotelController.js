const Hotel = require('../models/Hotel');

exports.createHotel = async(req, res) =>{
    try{
        const hotel = await Hotel.create(req.body);
        res.status(201).json(hotel);
    }catch (error){
        res.status(400).json({error: error.message});
    }
};

exports.getHotels = async (req, res) =>{
    try{
        const hotels = await Hotel.findAll();
        res.status(200).json(hotels);
    }catch(error){
        res.status(400).json({error:error.message});
    }
};