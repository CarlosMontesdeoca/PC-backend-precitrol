const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    _id: { type:String },
    date: { type:Date },
    reazon: { type:String },
    ruc: { type:Number },
    city: { type:String },
    address: { type:String },
    email: { type:String },
    phone: { type:String },
    contact: { type:String },
    quest1: { type:Boolean },
    quest2: { type:Boolean },
    commentq1: { type:String },
    commentq2: { type:String },
    Norder: { type:String },
    order: []
})

module.exports = mongoose.model('pedidos', OrderSchema);