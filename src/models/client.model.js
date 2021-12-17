const mongoose = require('mongoose');
const { Schema } = mongoose;


const ClientSchema = new Schema({
    name: { type: String, required: true },
    email: { type:String, required: true },
    address: { type: String, required: true },
    ruc: { type: String, required: true },
    typ: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    contacts: [{
        _id: { type: String },
        name_cont: { type: String, required: true },
        email_cont: { type: String, required: true },
        phone_cont: { type: String, required: true },
        rol_cont: { type: String, Required: true }
    }]
})

// clientes es el nombre de la coleccion donde se guardaran los datos
module.exports = mongoose.model('clientes', ClientSchema);

