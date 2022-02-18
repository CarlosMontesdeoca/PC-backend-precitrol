const express = require('express');
const router = express.Router();

const Contact = require('../models/contact.model');

router.get('/', async (req, res) => {
    try {
       const dataContact = await Contact.find();
        console.log(dataContact);
        res.json(dataContact); 
    } catch (error) {
        return error
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dataContact = await Contact.findById(req.params.id);
        res.json(dataContact);
    } catch (error) {
        return error
    }
})

router.post('/', async (req,res) => {
    try {
        const { name, appl, email, phone, business, rol, reason } = req.body;
        const dataContact = new Contact({ name, appl, email, phone, business, rol, reason })

        await dataContact.save();

        res.json({status: 'contacto guardado'});
    } catch (error) {
        return error
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, appl, email, phone, business, rol, reason } = req.body;
        const newContatc  = { name, appl, email, phone, business, rol, reason };
        console.log(req.params.id); 

        await Contact.findByIdAndUpdate(req.params.id, newContatc);

        res.json({ status: 'contacto actualizado'});
    } catch (error) {
        return error
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ status: 'cliente eliminado' })
    } catch (error) {
        return error
    }
})

module.exports = router;