const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');

router.post('/singup', async (req,res) => {
    const { name, email, user, password, roles } = req.body;

    const NewUSer = new User ({
        name,
        email,
        user,
        password  //: await User.encryptPwd(password)
    })
    
    const savedUser = await NewUSer.save();

    const token = jwt.sign({id: savedUser._id}, 'precitrol-api', {
        expiresIn : 43200
    })
    
    res.json({token})

});

router.post('/singin', async (req,res) => {
    
    res.json('singin')

});

module.exports = router;