const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlantSchema = new Schema({
    city: { type: String }, 
    cost: { type: String }, 
    address: { type: String },
    typ: { type: String },
    plant: { type: String }, 
    // phone: { type: String },
    // email: { type: String },
    edited: { type: String },
    contacts: [],
    client: [{
        ref: "clientes",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('sucursales', PlantSchema);
