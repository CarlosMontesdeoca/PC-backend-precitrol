const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactCliSchema = new Schema({
    name_cont: { type: String, required: true },
    email_cont: { type: String, required: true },
    phone_cont: { type: String, required: true },
    rol_cont: { type: String, required: true},
    from_client: {type: String, required: false}
})

// clientes es el nombre de la coleccion donde se guardaran los datos
module.exports = mongoose.model('contactos-del-cliente', ContactCliSchema);