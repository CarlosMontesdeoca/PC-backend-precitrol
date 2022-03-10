const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
    // _id: { type: String },
    name: { type: String },
    industry: { type:String },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('clientes', ClientSchema);

