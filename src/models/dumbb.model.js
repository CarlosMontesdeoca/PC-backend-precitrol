const mongoose = require('mongoose');
const { Schema } = mongoose;

const DumbbSchema = new Schema({
    _id: { type:String },
    mass: { type:Number},
    density: { type:Number },
    material: { type:String },
    active: { type:Boolean},
    state: { type:String },
    mark: { type:String },
    model: { type:String},
    client:{}

})

module.exports = mongoose.model('pesas', DumbbSchema);