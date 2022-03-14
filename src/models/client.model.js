const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
    ruc: { type: String, unique: true },
    name: { type: String },
    industry: { type:String },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('clientes', ClientSchema);

