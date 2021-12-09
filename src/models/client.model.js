const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    ruc: { type: String, required: true },
    type: { type:String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    contacts: []
})

// clientes es el nombre de la coleccion donde se guardaran los datos
module.exports = mongoose.model('clientes', ClientSchema);

