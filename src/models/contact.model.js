const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    data1: { type: String },
    date2: { type: String },
    name: { type: String, required: true },
    appl: { type: String, require: true },
    email: { type: String },
    phone: { type: String },
    business: { type: String },
    rol: { type: String },
    reason: { type:String },
    state: { type:String }
})

module.exports = mongoose.model('contactos', ContactSchema);
