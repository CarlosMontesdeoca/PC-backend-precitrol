const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    user: { type: String, required: true },
    password: {type: String, require: true },
    rol: { type: String, required: true}
})

module.exports = mongoose.model('usuarios', UserSchema);