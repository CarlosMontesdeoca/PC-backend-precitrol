const express = require('express');
const router = express.Router();

const Contact = require('../models/contact.model');

//metodo qe obtiene los datos a traves de http
router.get('/', async (req, res) => {
    
    const dataContact = await Contact.find();
    console.log(dataContact);
    res.json(dataContact);

});

// metodo para obtener un solo cliente 
router.get('/:id', async (req, res) => {
    const dataContact = await Contact.findById(req.params.id);
    res.json(dataContact);
})

// metodo que envia datos a traves de http
router.post('/', async (req,res) => {
    
    const { name, email, phone, rol, client } = req.body;
    const dataContact = new Contact({ name, email, phone, rol, client })

    await dataContact.save();

    res.json({status: 'contacto guardado'});

});

// metodo para editar al cliente
router.put('/:id', async (req, res) => {

    const { name, email, phone, rol, client} = req.body;
    const newContatc  = { name, email, phone, rol, client };
    //obtengo el id del cliente al que estoy buscando 
    console.log(req.params.id); 

    await Contact.findByIdAndUpdate(req.params.id, newContatc);

    res.json({ status: 'contacto actualizado'});

})

// metodo para eliminar un cliente
router.delete('/:id', async (req, res) => {

    await Contact.findByIdAndDelete(req.params.id);
    res.json({ status: 'cliente eliminado' })

})

module.exports = router;