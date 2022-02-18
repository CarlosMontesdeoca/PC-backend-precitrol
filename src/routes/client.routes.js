const express = require('express');
const router = express.Router();

const Client = require('../models/client.model');
const { verifyToken, isSistem, isAdmin } = require('../middlewares/authjwt');
isAdmin
//metodo qe obtiene los datos a traves de http
router.get('/', [verifyToken, isSistem], async (req, res) => {
    try {
        const dataClients = await Client.find();
        console.log(dataClients);
        res.json(dataClients);
    } catch (error) {
        return error
    }
});

// metodo para obtener un solo cliente 
router.get('/:id', [verifyToken, isSistem], async (req, res) => {
    try {
        const dataClient = await Client.findById(req.params.id);
        res.json(dataClient);
    } catch (error) {
        return error
    }
})

// metodo que envia datos a traves de http
router.post('/', [verifyToken, isSistem], async (req,res) => {
    try {
        const { name, ruc, state, address, typ, city, cost, plant, industry, phone, email, contacts } = req.body;
        const dataClient = new Client({ name, ruc, state, address, typ, city, cost, plant, industry, phone, email, contacts })

        await dataClient.save();

        res.status(201).json({status: 'cliente guardado'});
    } catch (error) {
        return error
    }
});

// metodo para editar al cliente
router.put('/:id', [verifyToken, isSistem], async (req, res) => {
    try {
        const { name, ruc, state, address, typ, city, cost, plant, industry, phone, email, contacts } = req.body;
        const newClient  = { name, ruc, state, address, typ, city, cost, plant, industry, phone, email, contacts };
        //obtengo el id del cliente al que estoy buscando 
        console.log(req.params.id); 

        await Client.findByIdAndUpdate(req.params.id, newClient);

        res.json({ status: 'cliente actualizado'});
    } catch (error) {
        return error
    }
})

router.put('/:id/contacts', [verifyToken, isSistem], async (req, res) => {
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

router.put('/:id/message', [verifyToken, isSistem], async (req, res) => {
    try { 
        const { comment } = req.body;
        const newClient  = { comment };
        console.log(req.params.id); 

        await Client.findByIdAndUpdate(req.params.id, newClient);

        res.json({ status: 'comentario agregado'});
    } catch (error) {
        return error
    }
})

// metodo para eliminar un cliente
router.delete('/:id', [verifyToken, isSistem], async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.json({ status: 'cliente eliminado' })
    } catch (error) {
        return error
    }
})


module.exports = router;

//https://www.youtube.com/watch?v=lV7mxivGX_I
// https://github.com/wambugucoder/MERN-JWT-AND-ROLE-AUTH/blob/master/package.json
// 
