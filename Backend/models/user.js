import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
     name: {type: String, maxlength: 30, minlength: 3, require: true},
     email: {type: String, maxlength: 200, minlength: 3, require: true, unique: true},
     password: {type: String, maxlength: 1024, require: true, minlength: 3}
})

const User = mongoose.model('User', userSchema);

export default User
 