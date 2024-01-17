const express = require('express')
const userModel = require('../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
router.post('/login', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    //cas 1 email n'existe    pas 
    if (!user) {
        res.status(500).json({ error: "wrong email " })
    } else {
        bcrypt.compare(req.body.password, user.password, (err, same) => {
            if (same) {
                const payload = {
                    "_id": user._id,
                    "email": user.email,
                }

                let token = jwt.sign(payload, "secret", { expiresIn: 3600 })

                res.json({ msg: "connecté avec succes ! ", token: token, user: user })
            } else {
                // cas 2 mot de passe incorrecte 
                res.status(500).json({ error: "please check your password " })
            }
        })
    }


})


module.exports = router