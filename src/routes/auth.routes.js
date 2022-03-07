const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const Role = require('../models/roles.model');

router.post('/singup', async (req,res) => {
    const { name, email, user, password, roles } = req.body;

    const NewUser = new User ({
        name,
        email,
        user,
        password  //: await User.encryptPwd(password)
    })

    if( roles ){
        const foundRoles = await Role.findOne({name:  {$in: roles}})
        NewUser.roles = foundRoles._id
    } else {
        console.log(false)
    }
    
    
    const savedUser = await NewUser.save();
    console.log(savedUser)
    const token = jwt.sign({id: savedUser._id}, 'precitrol-api', {
        expiresIn : 43200
    })
    
    res.json({mesage: 'registro exitoso'})

});

router.post('/singin', async (req,res) => {
    
    const { user, password }  = req.body;
    const userFound = await User.findOne({user}).populate("roles")
    console.log(userFound)
    if( !userFound ) return res.status(400).json({message: "User not Found"})

    if( password != userFound.password ) return res.status(401).json({token: null, message: 'invalid password'});
    
    const token = jwt.sign({ id: userFound._id }, 'precitrol-api', {
        expiresIn: 43200
    });
    
    res.send({ token, userFound });
});

module.exports = router;