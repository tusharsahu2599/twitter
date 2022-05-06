
const express = require('express');
const Follow = require('../models/follow.model');
const router = express.Router();
const User = require('../models/user.model');

router.post('/:username/:username', async (req, res) => {
    try {
        const status = await Follow.create({
            user : req.params.username,
        })
        return res
            .status(202)
            .send({ status: "success" })
    } catch (error) {
        return res
            .status(400)
            .send({
                message: error.message
            })
    }
})

router.delete('/:username/:usernameB', async (req, res) => {
    try {
        const Status = await Follow
            .findOneAndDelete(
                {
                    user: req.params.username,
                }
            )
            .lean()
            .exec()
        return res
            .status(202)
            .send({ status: "success" })
    } catch (error) {
        return res
            .status(400)
            .send({
                message: error.message,
                status : "failure"
        })}
})

module.exports = router