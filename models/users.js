var mongoose = require('mongoose');
//يعرف اليوزر و الايميل 

const Schema = mongoose.Schema
const userSchema= new Schema({
    email:String,
    password:String,
    token:String
})


module.exports = mongoose.model('user',userSchema,'users')
