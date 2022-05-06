
const express = require('express')
const Post = require('../models/post.model')
const router = express.Router()

router.get('/:username', async (req, res) => {
    try {
        let posts = await Post.find({ username: req.params.username }).lean().exec()
        if (!posts)
            posts = []
        return res
            .status(200)
            .send(posts)
    } catch (error) {
        return res
            .status(500)
            .send({
                message: error.message
            })
    }
})

router.get("/interest/:username", async (req, res) => {
    try {
        let username = req.params.username
        const following = []
        const followingQuery = await Follow.find({ user: username }).lean().exec()
        if (Array.isArray(followingQuery)) {
            for (let i = 0; i < followingQuery.length; i++) {
                following.push(followingQuery[i])
            }
        }
        following.push(req.params.username)
        let posts = []
        const allPosts = await Post.find().lean().exec()
        if (allPosts) {
            following.map((users) => {
                let totalPostMentor = allPosts.filter(post => post.username == users)
                posts = [...posts, ...totalPostMentor]
            }
            )
            posts.sort((a, b) => -(new Date(a.createdAt).getTime()) + (new Date(b.createdAt).getTime()))
        }
        return res
            .status(200)
            .send(posts)
    } catch (error) {
        return res
            .status(500)
            .send({
                message: error.message
            })
    }
})
module.exports = router