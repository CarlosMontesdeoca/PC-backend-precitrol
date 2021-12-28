const express = require('express');
// const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../models/user.model');
// const BCRYPT_SALT_ROUNDS = 12; 

//metodo qe obtiene los datos a traves de http
router.get('/', async (req, res) => {
    
    const dataUser = await User.find();
    console.log(dataUser);
    res.json(dataUser);

});

// metodo para obtener un solo cliente 
router.get('/:id', async (req, res) => {
    const dataUser = await User.findById(req.params.id);
    res.json(dataUser);
})

// metodo que envia datos a traves de http
router.post('/', async (req,res) => {
    
    

    const { name, email, user, password, rol } = req.body;
    const dataUser = new User({ name, email, user, password, rol })

    await dataUser.save();

    res.json({status: 'usuario registrado'});

});

// metodo para editar al cliente
router.put('/:id', async (req, res) => {

    const { name, email, user, password, rol } = req.body;
    const newUser  = { name, email, user, password, rol };
    //obtengo el id del cliente al que estoy buscando 
    console.log(req.params.id); 

    await User.findByIdAndUpdate(req.params.id, newUser);

    res.json({ status: 'usuario actualizado'});

})

// metodo para eliminar un cliente
router.delete('/:id', async (req, res) => {

    await User.findByIdAndDelete(req.params.id);
    res.json({ status: 'usuario eliminado' })

})

module.exports = router;