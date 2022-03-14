const express = require('express');
const router = express.Router();

const Plant = require('../models/plant.model');
const Client = require('../models/client.model');
// const { verifyToken, isSistem } = require('../middlewares/authjwt');

router.get('/', async (req, res) => {
    
    const dataPlant = await Plant.find().populate("clientes");
    console.log(dataPlant);
    res.json(dataPlant);

});

router.get('/:id', async (req, res) => {
    const dataPlant = await Plant.findById(req.params.id);
    res.json(dataPlant);
})

router.post('/', async (req,res) => {

    const { city, cost, address, typ, plant, edited, contacts, client } = req.body;

    const NewPlant = new Plant ({ city, cost, address, typ, plant, edited, contacts, client })

    if( client ){
        const foundClient = await Client.findOne({name:  {$in: client}})
        NewPlant.client = foundClient._id
    } else {
        console.log(false)
    }
    
    
    const savedClient = await NewPlant.save();
    console.log(savedClient)

    res.json({status: 'planta ingresada'});
});

router.put('/:id', async (req, res) => {

    const { city, cost, address, typ, plant, edited } = req.body;
    const newPlant  = { city, cost, address, typ, plant, edited };
    console.log(req.params.id); 

    await Plant.findByIdAndUpdate(req.params.id, newPlant);

    res.json({ status: 'planta actualizada'});

})

router.put('/:id/contacts', async (req, res) => {
    try {
        const { contacts } = req.body;
        const newClient  = { contacts };
        console.log(req.params.id); 

        await Client.findByIdAndUpdate(req.params.id, newClient);

        res.json({ status: 'contacto agregado'});
    } catch (error) {
        return error
    }
})

router.delete('/:id', async (req, res) => {

    await Plant.findByIdAndDelete(req.params.id);
    res.json({ status: 'Cliente eliminado' })

})

module.exports = router;