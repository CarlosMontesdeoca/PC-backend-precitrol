const express = require('express');
const router = express.Router();

const Client = require('../models/client.model');
const contacts = [];

//metodo qe obtiene los datos a traves de http
router.get('/', async (req, res) => {
    
    const dataClients = await Client.find();
    console.log(dataClients);
    res.json(dataClients);

});

// metodo para obtener un solo cliente 
router.get('/:id', async (req, res) => {
    const dataClient = await Client.findById(req.params.id);
    res.json(dataClient);
})

// metodo que envia datos a traves de http
router.post('/', async (req,res) => {
    
    const { name, address, ruc, type, city, phone } = req.body;
    const dataClient = new Client({ name, address, ruc, type, city, phone, contacts })

    await dataClient.save();

    res.json({status: 'cliente guardado'});

});

// metodo para editar al cliente
router.put('/:id', async (req, res) => {

    const { name, address, ruc, type, city, phone } = req.body;
    const newClient  = { name, address, ruc, type, city, phone, contacts };
    //obtengo el id del cliente al que estoy buscando 
    console.log(req.params.id); 

    await Client.findByIdAndUpdate(req.params.id, newClient);

    res.json({ status: 'cliente actualizado'});

})

// metodo para eliminar un cliente
router.delete('/:id', async (req, res) => {

    await Client.findByIdAndDelete(req.params.id);
    res.json({ status: 'cliente eliminado' })

})

module.exports = router;