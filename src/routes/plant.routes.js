const express = require('express');
const router = express.Router();

const Plant = require('../models/plant.model');
const Client = require('../models/client.model');
// const { verifyToken, isSistem } = require('../middlewares/authjwt');

router.get('/', async (req, res) => {
    
    const dataPlant = await Plant.find();
    console.log(dataPlant);
    res.json(dataPlant);

});

router.get('/:id', async (req, res) => {
    const dataPlant = await Plant.findById(req.params.id);
    res.json(dataPlant);
})

router.post('/', async (req,res) => {

    const { city, cost, address, typ, plant, phone, email, edited, contacs, client } = req.body;

    const NewPlant = new Plant ({ city, cost, address, typ, plant, phone, email, edited, contacs, client })

    if( client ){
        const foundClient = await Client.findOne({name:  {$in: client}})
        NewPlant.client = foundClient._id
    } else {
        console.log(false)
    }
    
    
    const savedClient = await NewPlant.save();
    console.log(savedClient)

    res.json({status: 'cliente ingresado'});
});

router.put('/:id', async (req, res) => {

    const { name, email, user, password, rol } = req.body;
    const newPlant  = { name, email, user, password, rol };
    console.log(req.params.id); 

    await Plant.findByIdAndUpdate(req.params.id, newPlant);

    res.json({ status: 'cliente actualizado'});

})

router.delete('/:id', async (req, res) => {

    await Plant.findByIdAndDelete(req.params.id);
    res.json({ status: 'Cliente eliminado' })

})

module.exports = router;