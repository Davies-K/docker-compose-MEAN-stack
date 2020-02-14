const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
// const dbHost = 'mongodb://database/mean-docker';

const dbHost = 'mongodb://database:27017/mean-docker'

//connect to mongodb
mongoose.connect(dbHost);

//create mongoose schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model('User', userSchema);

//get api listing

router.get('/', (req, res) => {
    res.send('api works fine')
})

/* GET all users. */
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* GET one users. */
router.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* Create a user. */
router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

module.exports = router;