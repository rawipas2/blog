var express = require("express");
var router = express.Router();
var blogmodel = require('../model/blog_model')

// Get all
router.get ('/', (req, res) => {
    blogmodel.find().exec((err, data) => {
        if (err) return res.status(400).send(err)
        res.status(200).send(data)
    })
})

// Get 1 data
router.get ('/:_id', (req, res) => {
    blogmodel.findById(req.params._id).exec((err, data) => {
        if (err) return res.status(400).send(err)
        res.status(200).send(data)
    })
})

// Post (create data)
router.post('/', (req, res) => {
    var object = new blogmodel(req.body)
    object.save((err, data) => {
        if (err) return res.status(400).send(err)
        res.status(200).send('[post seccess]')
    })
})

// Put (update data)
router.put ('/:_id' , (req, res) => {
    blogmodel.findByIDAndUpdate(req.params._id, req.body, (err, data) => {
        if (err) return res.status(400).send(err)
        res.status(200).send('[update seccess]')
    })
})

// Delete ( 1 data)
router.delete('/:_id', (req, res) => {
    blogmodel.findByIDAndDelete(req.params._id), (err, data) => {
        if (err) return res.status(400).send(err)
        res.status(200).send('[delete seccess]')
    }
})

module.exports = router