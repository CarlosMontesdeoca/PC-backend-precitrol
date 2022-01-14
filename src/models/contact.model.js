const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    business: {type: String, require: true },
    rol: { type: String, required: true },
    reason: { type:String }
})

module.exports = mongoose.model('contactos', ContactSchema);
