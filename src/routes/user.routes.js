const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/', async (req, res) => {
    
    const dataUser = await User.find();
    console.log(dataUser);
    res.json(dataUser);

});

router.get('/:id', async (req, res) => {
    const dataUser = await User.findById(req.params.id);
    res.json(dataUser);
})

router.post('/', async (req,res) => {
    
    const { name, email, user, password, rol } = req.body;
    const dataUser = new User({ name, email, user, password, rol })

    await dataUser.save();

    res.json({status: 'usuario registrado'});

});

router.put('/:id', async (req, res) => {

    const { name, email, user, password, rol } = req.body;
    const newUser  = { name, email, user, password, rol };
    console.log(req.params.id); 

    await User.findByIdAndUpdate(req.params.id, newUser);

    res.json({ status: 'usuario actualizado'});

})

router.delete('/:id', async (req, res) => {

    await User.findByIdAndDelete(req.params.id);
    res.json({ status: 'usuario eliminado' })

})

module.exports = router;