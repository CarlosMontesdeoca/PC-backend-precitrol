const jwt = require('jsonwebtoken');
const User =  require('../models/user.model')
const Role = require('../models/roles.model');

const verifyToken = async (req, res, next) => {
    let token = req.headers["access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });

    try {
        const decoded = jwt.verify(token, 'precitrol-api');
        req.userId = decoded.id;

        const user = await User.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ message: "invalid token" });

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
};

const isSistem = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        const roles = await Role.find({ _id: { $in: user.roles } });

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "Sistem") {
                next();
                return;
            }
        }

        return res.status(403).json({ message: "Require Sistem Role!" });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "Admin") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Admin Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};

const isMetrologi = async (req, res, next) => {
    try {
      const user = await User.findById(req.userId);
      const roles = await Role.find({ _id: { $in: user.roles } });
  
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "Metrologi") {
          next();
          return;
        }
      }
  
      return res.status(403).json({ message: "Require Metrologi Role!" });
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: error });
    }
  };

module.exports = {verifyToken, isSistem, isAdmin, isMetrologi}


// https://www.youtube.com/watch?v=lV7mxivGX_I