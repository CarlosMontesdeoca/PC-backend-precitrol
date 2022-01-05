const express = require('express');
const router = express.Router();

const Contact = require('../models/contact.model');

//metodo qe obtiene los datos a traves de http
router.get('/', async (req, res) => {
    try {
       const dataContact = await Contact.find();
        console.log(dataContact);
        res.json(dataContact); 
    } catch (error) {
        return error
    }
});

// metodo para obtener un solo cliente 
router.get('/:id', async (req, res) => {
    try {
        const dataContact = await Contact.findById(req.params.id);
        res.json(dataContact);
    } catch (error) {
        return error
    }
})

// metodo que envia datos a traves de http
router.post('/', async (req,res) => {
    try {
        const { name, email, phone, business, rol, reason } = req.body;
        const dataContact = new Contact({ name, email, phone, business, rol, reason })

        await dataContact.save();

        res.json({status: 'contacto guardado'});
    } catch (error) {
        return error
    }
});

// metodo para editar al cliente
router.put('/:id', async (req, res) => {
    try {
        const { name, email, phone, business, rol, reason } = req.body;
        const newContatc  = { name, email, phone, business, rol, reason };
        //obtengo el id del cliente al que estoy buscando 
        console.log(req.params.id); 

        await Contact.findByIdAndUpdate(req.params.id, newContatc);

        res.json({ status: 'contacto actualizado'});
    } catch (error) {
        return error
    }
})

// metodo para eliminar un cliente
router.delete('/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ status: 'cliente eliminado' })
    } catch (error) {
        return error
    }
})

module.exports = router;