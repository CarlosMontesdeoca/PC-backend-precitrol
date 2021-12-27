const express = require('express');
const router = express.Router();

const Client = require('../models/client.model');
// const Contact = require('../models/contact.model');

//metodo qe obtiene los datos a traves de http
router.get('/', async (req, res) => {
    try {
        const dataClients = await Client.find();
        console.log(dataClients);
        res.json(dataClients);
    } catch (error) {
        return error
    }
});

// metodo para obtener un solo cliente 
router.get('/:id', async (req, res) => {
    try {
        const dataClient = await Client.findById(req.params.id);
        res.json(dataClient);
    } catch (error) {
        return error
    }
})

// metodo que envia datos a traves de http
router.post('/', async (req,res) => {
    try {
        const { name, email, address, ruc, typ, plant, city, phone } = req.body;
        const dataClient = new Client({ name, email, address, ruc, typ, plant, city, phone })

        await dataClient.save();

        res.json({status: 'cliente guardado'});
    } catch (error) {
        return error
    }
});

// metodo para editar al cliente
router.put('/:id', async (req, res) => {
    try {
        const { name, email, address, ruc, typ, plant, city, phone, contacts } = req.body;
        const newClient  = { name, email, address, ruc, typ, plant, city, phone, contacts };
        //obtengo el id del cliente al que estoy buscando 
        console.log(req.params.id); 

        await Client.findByIdAndUpdate(req.params.id, newClient);

        res.json({ status: 'cliente actualizado'});
    } catch (error) {
        return error
    }
})

router.put('/:id/contacts', async (req, res) => {
    try {
        const { contacts } = req.body;
        const newClient  = { contacts };
        //obtengo el id del cliente al que estoy buscando 
        console.log(req.params.id); 

        await Client.findByIdAndUpdate(req.params.id, newClient);

        res.json({ status: 'cliente actualizado'});
    } catch (error) {
        return error
    }
})

// metodo para eliminar un cliente
router.delete('/:id', async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.json({ status: 'cliente eliminado' })
    } catch (error) {
        return error
    }
})

//https://www.youtube.com/watch?v=lV7mxivGX_I
// https://github.com/wambugucoder/MERN-JWT-AND-ROLE-AUTH/blob/master/package.json
// 

module.exports = router;