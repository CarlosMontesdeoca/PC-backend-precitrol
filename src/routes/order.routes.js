const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.get('/', async (req, res) => {
    
    const dataOrder = await Order.find();
    console.log(dataOrder);
    res.json(dataOrder);

});

router.get('/:id', async (req, res) => {
    const dataOrder = await Order.findById(req.params.id);
    res.json(dataOrder);
})

router.post('/', async (req,res) => {

    const { _id, date, reazon, ruc, city, address, email, phone, contact, Norder, order } = req.body;
    const dataOrder = new Order({ _id, date, reazon, ruc, city, address, email, phone, contact,Norder, order })

    await dataOrder.save();

    res.json({status: 'Orden registrada'});

});

router.put('/:id', async (req, res) => {

    const { quest1, commentq1, quest2, commentq2 } = req.body;
    const newOrder  = { quest1, commentq1, quest2, commentq2 };
    //obtengo el id del cliente al que estoy buscando 
    console.log(req.params.id); 

    await Order.findByIdAndUpdate(req.params.id, newOrder);

    res.json({ status: 'Orden actualizada'});

})

// router.delete('/:id', async (req, res) => {

//     await User.findByIdAndDelete(req.params.id);
//     res.json({ status: 'usuario eliminado' })

// })

module.exports = router;