const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
},
{
    versionKey: false,
    timeStamp: true
})

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = hashSync(this.password);
    next();
})

userSchema.methods.checkPassword = function(password) {
    return compareSync(password, this.password);
}
module.exports = mongoose.model('user', userSchema);