const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    user: { type: String, required: true, unique: true },
    password: { type: String, require: true },
    roles: [{
        ref: "roles",
        type: Schema.Types.ObjectId
    }] 
});

UserSchema.static.encryptPwd = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt);
}

UserSchema.static.comparePwd = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

module.exports = mongoose.model('usuarios', UserSchema);