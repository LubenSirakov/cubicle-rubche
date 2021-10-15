const mongoose = require('mongoose');
const validator = require('validator');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: [/^[a-zA-z0-9 ]+$/, 'Username should consist of english letters, digits and spaces'],
    },
    description: {
        type: String,
        required: true,
        validate: [/^[a-zA-z0-9 ]+$/, 'Description should consist of english letters, digits and spacess'],
        maxlength: 100,
        minlength: 2,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//i, 'Invalid image url']
        // validate: {
        //     validator: function (value) {
        //         return /^https?:\/\//i.test(value)
        //     },
        //     message: 'Image Url is invalid'
        // }
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory', 
        }
    ],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }

})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;