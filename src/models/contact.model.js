const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    rol: { type: String, required: true},
    client: {type: String, required: true}
})

// clientes es el nombre de la coleccion donde se guardaran los datos
module.exports = mongoose.model('contactos', ContactSchema);
