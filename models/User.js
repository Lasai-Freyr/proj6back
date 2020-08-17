const mongoose = require('mongoose');

const userSchema = mongoose.schema ({
    userId: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);