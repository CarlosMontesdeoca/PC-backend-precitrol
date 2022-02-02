const mongoose = require('mongoose');
const { Schema } = mongoose;

const RolSchema = new Schema({
    name: { type: String }
}, {
    versionKey: false
})

module.exports = mongoose.model('roles', RolSchema);