const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username cannot be with less than 3 characters']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Your password should be at least 6 characters long'],
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;

            next();
        });


});

userSchema.static('findByUsername', function(username) {
    return this.findOne({username});
})

const User = mongoose.model('User', userSchema);

module.exports = User;