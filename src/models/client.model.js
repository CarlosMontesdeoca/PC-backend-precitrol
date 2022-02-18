const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
    name: { type: String },
    ruc: { type: String },
    state: { type: Boolean },
    city: { type: String }, 
    cost: { type: String }, 
    address: { type: String },
    typ: { type: String },
    plant: { type: String }, 
    industry: { type:String },
    phone: { type: String },
    email: { type: String },
    comment: [], 
    contacts: []
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('clientes', ClientSchema);

