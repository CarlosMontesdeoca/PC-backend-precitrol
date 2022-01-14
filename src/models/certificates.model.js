const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    _id: { type: String, required: true },
    metrologist: { type: String, required: true },
    date: { type: Date, required: true },
    password: {type: String, require: true },
    rol: { type: String, required: true}
})

module.exports = mongoose.model('usuarios', UserSchema);