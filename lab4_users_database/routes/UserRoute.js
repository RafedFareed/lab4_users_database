const express = require('express');
const UserModel = require('../models/User');
const app = express();

app.post('/user', async (req, res) => {
    const user = new UserModel(req.body);

    try {
        await user.save((err) => {
            if (err) {
                res.send(err)
            } else {
                res.send(user);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app