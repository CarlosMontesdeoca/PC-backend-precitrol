const express = require('express');
const router = express.Router();

const Dumbb = require('../models/dumbb.model');

router.get('/', async (req, res) => {
    try {
       const dataDumbb = await Dumbb.find();
        console.log(dataDumbb);
        res.json(dataDumbb); 
    } catch (error) {
        return error
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dataDumbb = await Dumbb.findById(req.params.id);
        res.json(dataDumbb);
    } catch (error) {
        return error
    }
})

router.post('/', async (req,res) => {
    try {
        const { _id, mass, density, material, state, mark, model } = req.body;
        const dataDumbb = new Dumbb({ _id, mass, density, material, active:true, state, mark, model })

        await dataDumbb.save();

        res.json({status: 'Item de Calibracion guardado'});
    } catch (error) {
        return error
    }
});

// // metodo para editar al cliente
// router.put('/:id', async (req, res) => {
//     try {
//         const { _id, mass, density, material, active, state, mark, model} = req.body;
//         const newDumbb  = { _id, mass, density, material, active, state, mark, model };
//         //obtengo el id del cliente al que estoy buscando 
//         console.log(req.params.id); 

//         await Dumbb.findByIdAndUpdate(req.params.id, newDumbb);

//         res.json({ status: 'Item de Calibracion actualizado'});
//     } catch (error) {
//         return error
//     }
// })

router.put('/:id', async (req, res) => {
    try {
        const newDumbb  = { active: false };
        console.log(req.params.id); 

        await Dumbb.findByIdAndUpdate(req.params.id, newDumbb);

        res.json({ status: 'Item de Calibracion actualizado'});
    } catch (error) {
        return error
    }
})
module.exports = router;