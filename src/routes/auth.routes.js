const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/singup', async (req,res) => {
    const { name, email, user, password, roles } = req.body;

    const NewUSer = new User ({
        name,
        email,
        user,
        password
    })
    
    console.log(NewUSer)
    res.json('signup')

});

router.post('/singin', async (req,res) => {
    
    res.json('singin')

});

module.exports = router;